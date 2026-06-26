#!/usr/bin/env python3
"""Apply Stitch-generated HTML screens directly to Next.js frontend.

Downloads htmlCode from STITCH_DESIGN_SYSTEM.json, extracts Tailwind config,
inline styles, and body markup — then generates pages that render Stitch output
verbatim (not a generic React template).

Usage:
  python3 stitch_apply_html.py <project-root>
"""
from __future__ import annotations

import json
import re
import subprocess
import sys
import urllib.request
from pathlib import Path
from typing import Any

CONFIG_REL = Path("docs/project/stitch-frontend.config.json")
STITCH_REL = Path("docs/project/STITCH_DESIGN_SYSTEM.json")
STITCH_FALLBACK = Path("stitch_output.json")
SCREENS_DIR = Path("frontend/src/stitch-screens")
MARKER_START = "/* === STITCH HTML STYLES (auto-generated) === */"
MARKER_END = "/* === END STITCH HTML STYLES === */"

DEFAULT_ROUTE_RULES: list[tuple[str, str]] = [
    ("workspace", "frontend/src/app/dashboard/page.tsx"),
    ("metric", "frontend/src/app/dashboard/cycle-heatmap/page.tsx"),
    ("heatmap", "frontend/src/app/dashboard/cycle-heatmap/page.tsx"),
    ("analytics", "frontend/src/app/dashboard/cycle-heatmap/page.tsx"),
    ("setting", "frontend/src/app/dashboard/settings/page.tsx"),
    ("team", "frontend/src/app/dashboard/settings/page.tsx"),
    ("landing", "frontend/src/app/page.tsx"),
    ("marketing", "frontend/src/app/page.tsx"),
    ("home", "frontend/src/app/page.tsx"),
]

SKIP_TITLE_KEYWORDS = ("logo", "icon", "favicon")

# Shell extraction — sidebar + header once; dashboard pages get content-only slices.
SIDEBAR_RE = re.compile(
    r"(?:<!--\s*SideNavBar[^>]*-->\s*)?<nav\b[\s\S]*?</nav>",
    re.IGNORECASE,
)
HEADER_RE = re.compile(
    r"(?:<!--\s*TopNavBar[^>]*-->\s*)?<header\b[^>]*>[\s\S]*?</header>",
    re.IGNORECASE,
)
MAIN_RE = re.compile(
    r"<main\b[^>]*>([\s\S]*?)</main>",
    re.IGNORECASE,
)
SHELL_WORKSPACE_KEYWORDS = ("workspace", "pipeline", "main workspace", "dashboard", "boru")


def is_landing_route(route: str | None) -> bool:
    if not route:
        return False
    normalized = route.replace("\\", "/")
    return normalized.endswith("frontend/src/app/page.tsx") or normalized.endswith("src/app/page.tsx")


def is_dashboard_route(route: str | None) -> bool:
    return route is not None and "/dashboard/" in route.replace("\\", "/")


def extract_sidebar(body: str) -> str | None:
    match = SIDEBAR_RE.search(body)
    return match.group(0).strip() if match else None


def extract_header(body: str) -> str | None:
    match = HEADER_RE.search(body)
    return match.group(0).strip() if match else None


def strip_shell(body: str) -> str:
    result = SIDEBAR_RE.sub("", body)
    result = HEADER_RE.sub("", result)
    result = re.sub(
        r'<div\b[^>]*class="[^"]*\bmd:ml-64\b[^"]*"[^>]*>',
        "",
        result,
        count=1,
        flags=re.IGNORECASE,
    )
    result = re.sub(r"</div>\s*$", "", result.strip(), count=1)
    return result.strip()


def extract_page_content(body: str) -> str:
    """Return inner dashboard content without sidebar/header/layout offsets."""
    stripped = strip_shell(body)
    main_match = MAIN_RE.search(stripped)
    inner = main_match.group(1).strip() if main_match else stripped
    inner = re.sub(r"\bml-64\b", "", inner)
    inner = re.sub(r"\bmt-16\b", "", inner)
    inner = re.sub(r"\bh-\[calc\(100vh-4rem\)\]\b", "min-h-full", inner)
    inner = re.sub(r"\bfixed\b", "", inner)
    inner = re.sub(r"\s{2,}", " ", inner)
    return (
        '<div class="stitch-page-content p-8 min-h-full w-full overflow-y-auto">'
        f"{inner}</div>"
    )


def pick_shell_parts(screens: list[dict[str, str]]) -> tuple[str, str] | None:
    """Use Workspace screen as canonical shell (sidebar + header)."""
    for screen in screens:
        title_lower = screen["title"].lower()
        if any(kw in title_lower for kw in SHELL_WORKSPACE_KEYWORDS):
            sidebar = extract_sidebar(screen["body"])
            header = extract_header(screen["body"])
            if sidebar and header:
                return sidebar, header
    for screen in screens:
        sidebar = extract_sidebar(screen["body"])
        header = extract_header(screen["body"])
        if sidebar and header:
            return sidebar, header
    return None


def build_shell_html(sidebar: str, header: str) -> str:
    return f"{sidebar}\n{header}"


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def load_config(project_root: Path) -> dict:
    cfg_path = project_root / CONFIG_REL
    if not cfg_path.exists():
        return {"displayName": "App", "projectSlug": "app", "stitchScreens": {"enabled": True}}
    return load_json(cfg_path)


def load_stitch_data(project_root: Path) -> dict | None:
    for rel in (STITCH_REL, STITCH_FALLBACK):
        path = project_root / rel
        if path.exists():
            return load_json(path)
    return None


def extract_screens(stitch_data: dict) -> list[dict[str, str]]:
    screens: list[dict[str, str]] = []
    sc = stitch_data.get("generateScreen", {}).get("result", {}).get("structuredContent", {})
    for comp in sc.get("outputComponents", []):
        for screen in comp.get("design", {}).get("screens", []):
            url = (screen.get("htmlCode") or {}).get("downloadUrl", "")
            title = screen.get("title") or screen.get("name") or "Screen"
            if url:
                screens.append({"title": title, "url": url})
    return screens


def slugify(title: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return slug or "screen"


def download_html(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (StitchApplyHTML/1.0)"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="replace")


def extract_tailwind_script(html: str) -> str | None:
    match = re.search(
        r'<script[^>]*id=["\']tailwind-config["\'][^>]*>(.*?)</script>',
        html,
        re.DOTALL | re.IGNORECASE,
    )
    return match.group(1).strip() if match else None


def extract_styles(html: str) -> str:
    blocks = re.findall(r"<style[^>]*>(.*?)</style>", html, re.DOTALL | re.IGNORECASE)
    return "\n".join(b.strip() for b in blocks if b.strip())


def extract_body(html: str) -> str:
    match = re.search(r"<body[^>]*>(.*?)</body>", html, re.DOTALL | re.IGNORECASE)
    return match.group(1).strip() if match else ""


def extract_head_links(html: str) -> list[str]:
    links: list[str] = []
    for match in re.finditer(r"<link[^>]+>", html, re.IGNORECASE):
        tag = match.group(0)
        if "stylesheet" in tag.lower() or "material" in tag.lower():
            links.append(tag)
    return links


def parse_tailwind_config(script_body: str) -> dict[str, Any] | None:
    """Parse tailwind.config JS via Node for fidelity."""
    match = re.search(r"tailwind\.config\s*=\s*(\{[\s\S]*\})\s*;?\s*$", script_body.strip())
    if not match:
        return None
    js_obj = match.group(1)
    node_code = f"const cfg = {js_obj}; process.stdout.write(JSON.stringify(cfg));"
    try:
        result = subprocess.run(
            ["node", "-e", node_code],
            capture_output=True,
            text=True,
            timeout=15,
            check=True,
        )
        return json.loads(result.stdout)
    except (subprocess.CalledProcessError, json.JSONDecodeError, FileNotFoundError):
        return None


def resolve_route(title: str, cfg: dict, used_routes: set[str]) -> str | None:
    stitch_cfg = cfg.get("stitchScreens") or {}
    if stitch_cfg.get("enabled") is False:
        return None

    title_lower = title.lower()
    if any(kw in title_lower for kw in SKIP_TITLE_KEYWORDS):
        return None

    for route_def in stitch_cfg.get("routes") or []:
        match_kw = (route_def.get("match") or "").lower()
        route_path = route_def.get("route") or route_def.get("path")
        if match_kw and match_kw in title_lower and route_path:
            rel = route_path if route_path.startswith("frontend/") else f"frontend/src/app/{route_path.lstrip('/')}"
            if not rel.endswith(".tsx"):
                rel = f"{rel.rstrip('/')}/page.tsx" if not rel.endswith("page.tsx") else rel
            if rel not in used_routes:
                return rel

    for keyword, route_path in DEFAULT_ROUTE_RULES:
        if keyword in title_lower and route_path not in used_routes:
            return route_path

    return None


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


SHADCN_SHELL_COLORS: dict[str, Any] = {
    "border": "hsl(var(--border))",
    "input": "hsl(var(--input))",
    "ring": "hsl(var(--ring))",
    "foreground": "hsl(var(--foreground))",
    "card": {"DEFAULT": "hsl(var(--card))", "foreground": "hsl(var(--card-foreground))"},
    "destructive": {
        "DEFAULT": "hsl(var(--destructive))",
        "foreground": "hsl(var(--destructive-foreground))",
    },
    "muted": {"DEFAULT": "hsl(var(--muted))", "foreground": "hsl(var(--muted-foreground))"},
    "success": {"DEFAULT": "hsl(var(--success))", "foreground": "hsl(var(--success-foreground))"},
    "warning": {"DEFAULT": "hsl(var(--warning))", "foreground": "hsl(var(--warning-foreground))"},
}


def merge_shell_colors(stitch_colors: dict[str, Any]) -> dict[str, Any]:
    """Keep Stitch hex tokens; add shadcn CSS-var aliases for shell pages."""
    merged = dict(stitch_colors)
    for key, val in SHADCN_SHELL_COLORS.items():
        if key not in merged:
            merged[key] = val

    for token, fg_var in (
        ("primary", "--primary-foreground"),
        ("secondary", "--secondary-foreground"),
        ("accent", "--accent-foreground"),
    ):
        if token in merged and isinstance(merged[token], str):
            merged[token] = {
                "DEFAULT": merged[token],
                "foreground": f"hsl(var({fg_var}))",
            }

    return merged


def extract_class_safelist(html_bodies: list[str]) -> list[str]:
    classes: set[str] = set()
    for body in html_bodies:
        for match in re.finditer(r'class="([^"]*)"', body):
            for cls in match.group(1).split():
                if cls and not cls.startswith("["):
                    classes.add(cls)
    return sorted(classes)


def write_tailwind_config(fe: Path, tw_cfg: dict[str, Any], safelist: list[str] | None = None) -> None:
    theme = tw_cfg.get("theme") or {}
    extend = dict(theme.get("extend") or {})
    stitch_colors = extend.get("colors") or {}
    extend["colors"] = merge_shell_colors(stitch_colors)
    extend.setdefault("boxShadow", {})
    if isinstance(extend["boxShadow"], dict):
        extend["boxShadow"]["brand-glow"] = "0 0 40px rgba(255, 107, 74, 0.15)"

    config_obj: dict[str, Any] = {
        "darkMode": tw_cfg.get("darkMode", "class"),
        "content": [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/stitch-screens/**/*.{js,ts,jsx,tsx}",
        ],
        "theme": {"extend": extend},
        "plugins": [],
    }
    if safelist:
        config_obj["safelist"] = safelist

    config_json = json.dumps(config_obj, indent=2, ensure_ascii=False)
    content = f"""import type {{ Config }} from 'tailwindcss';

/** Auto-generated from Stitch htmlCode tailwind-config — do not hand-edit colors. */
const config: Config = {config_json};

export default config;
"""
    (fe / "tailwind.config.ts").write_text(content, encoding="utf-8")


def merge_globals_css(fe: Path, stitch_styles: str) -> None:
    css_path = fe / "src/app/globals.css"
    if css_path.exists():
        existing = css_path.read_text(encoding="utf-8")
    else:
        existing = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"

    if MARKER_START in existing:
        before = existing.split(MARKER_START)[0].rstrip()
        after_parts = existing.split(MARKER_END)
        after = after_parts[1] if len(after_parts) > 1 else ""
        base = before
    else:
        base = existing.rstrip()
        after = ""

    safe_styles = stitch_styles.replace("{", "{{").replace("}", "}}")
    block = f"""
{MARKER_START}
/* Stitch inline styles extracted from htmlCode */
{safe_styles}

.stitch-screen {{
  min-height: 100vh;
  width: 100%;
}}
.stitch-screen img {{
  max-width: 100%;
  height: auto;
}}
.stitch-page-content {{
  width: 100%;
  min-height: 100%;
}}
.stitch-shell nav a[data-stitch-nav] {{
  cursor: pointer;
}}
.stitch-shell a[data-stitch-route],
.stitch-screen a[data-stitch-route],
.stitch-shell button[data-stitch-action],
.stitch-screen button[data-stitch-action] {{
  cursor: pointer;
}}
{MARKER_END}"""

    css_path.write_text(base + block + after, encoding="utf-8")


def escape_ts_template(html: str) -> str:
    return html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def write_html_module(screens_dir: Path, slug: str, body_html: str) -> None:
    content = f"""/** Auto-generated from Stitch htmlCode — do not edit. */
export const html = `{escape_ts_template(body_html)}`;
"""
    (screens_dir / f"{slug}.html.ts").write_text(content, encoding="utf-8")


STITCH_LAYER_FILES = (
    "src/lib/stitch-interactions.ts",
    "src/lib/use-stitch-click-handler.ts",
    "src/components/stitch-screen.tsx",
    "src/components/stitch-action-modal.tsx",
    "src/components/stitch-app-shell.tsx",
)


def stitch_layer_source_roots() -> list[Path]:
    script_dir = Path(__file__).resolve().parent
    return [
        script_dir.parent / "frontend",
        script_dir.parent.parent / "templates" / "base_project" / "frontend",
    ]


def write_stitch_interaction_layer(fe: Path) -> list[str]:
    """Copy Stitch click/navigation wiring — no dead href=\"#\" buttons."""
    generated: list[str] = []
    for rel in STITCH_LAYER_FILES:
        dest = fe / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        content: str | None = None
        for root in stitch_layer_source_roots():
            src = root / rel
            if src.exists():
                content = src.read_text(encoding="utf-8")
                break
        if content is None:
            raise FileNotFoundError(f"Missing Stitch interaction source: {rel}")
        dest.write_text(content, encoding="utf-8")
        generated.append(f"frontend/{rel}")
    return generated


def write_stitch_screen_component(fe: Path) -> None:
    write_stitch_interaction_layer(fe)


def write_stitch_page(route_rel: str, slug: str, title: str, *, content_only: bool) -> str:
    component = "StitchContent" if content_only else "StitchScreen"
    return f"""/** Auto-generated from Stitch htmlCode — {title} */
'use client';

import {{ {component} }} from '@/components/stitch-screen';

export default function Page() {{
  return <{component} slug="{slug}" />;
}}
"""


def write_dashboard_layout(fe: Path) -> None:
    """Unified StitchAppShell wraps all dashboard routes — sidebar/header never drift."""
    content = """'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLoadingScreen } from '@/components/states';
import { useAuth } from '@/lib/auth-context';
import { StitchAppShell } from '@/components/stitch-app-shell';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => { if (!loading && !user) router.push('/login'); }, [user, loading, router]);
  if (loading || !user) return <AuthLoadingScreen />;
  return <StitchAppShell>{children}</StitchAppShell>;
}
"""
    (fe / "src/app/dashboard/layout.tsx").write_text(content, encoding="utf-8")


def patch_root_layout(fe: Path, head_links: list[str]) -> None:
    layout_path = fe / "src/app/layout.tsx"
    if not layout_path.exists():
        return
    text = layout_path.read_text(encoding="utf-8")

    material_link = (
        '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        ':wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />'
    )

    if "Material+Symbols+Outlined" not in text:
        text = text.replace(
            "<body",
            f"      <head>\n        {material_link}\n      </head>\n      <body",
            1,
        )

    if "material-symbols-outlined" not in text and "@layer base" not in text:
        pass

    layout_path.write_text(text, encoding="utf-8")


def apply_stitch_html(project_root: Path) -> list[str]:
    project_root = project_root.resolve()
    fe = project_root / "frontend"
    if not fe.exists():
        raise FileNotFoundError(f"Missing frontend directory: {fe}")

    cfg = load_config(project_root)
    stitch_data = load_stitch_data(project_root)
    if not stitch_data:
        print("No STITCH_DESIGN_SYSTEM.json — skipping stitch_apply_html")
        return []

    screens = extract_screens(stitch_data)
    if not screens:
        print("No Stitch htmlCode screens found — skipping stitch_apply_html")
        return []

    screens_dir = fe / "src/stitch-screens"
    screens_dir.mkdir(parents=True, exist_ok=True)

    generated: list[str] = []
    all_styles: list[str] = []
    all_bodies: list[str] = []
    tailwind_cfg: dict[str, Any] | None = None
    head_links: list[str] = []
    used_routes: set[str] = set()
    downloaded: list[dict[str, str]] = []

    for screen in screens:
        title = screen["title"]
        print(f"  Downloading Stitch HTML: {title}")
        html = download_html(screen["url"])
        slug = slugify(title)

        body = extract_body(html)
        if not body:
            print(f"    Skipped (empty body): {title}")
            continue

        all_bodies.append(body)
        downloaded.append({"title": title, "body": body, "slug": slug, "html": html})

        styles = extract_styles(html)
        if styles:
            all_styles.append(f"/* {title} */\n{styles}")

        tw_script = extract_tailwind_script(html)
        if tw_script and not tailwind_cfg:
            tailwind_cfg = parse_tailwind_config(tw_script)

        head_links.extend(extract_head_links(html))

    shell_parts = pick_shell_parts(downloaded)
    has_dashboard_routes = False

    if shell_parts:
        sidebar, header = shell_parts
        write_html_module(screens_dir, "stitch-shell", build_shell_html(sidebar, header))
        generated.append("frontend/src/stitch-screens/stitch-shell.html.ts")
        print("  Extracted unified Stitch shell (sidebar + header) from Workspace screen")

    for item in downloaded:
        title = item["title"]
        slug = item["slug"]
        body = item["body"]
        route = resolve_route(title, cfg, used_routes)

        if is_dashboard_route(route) and shell_parts:
            store_body = extract_page_content(body)
            content_only = True
            has_dashboard_routes = True
        else:
            store_body = body
            content_only = False

        write_html_module(screens_dir, slug, store_body)
        generated.append(f"frontend/src/stitch-screens/{slug}.html.ts")

        if route:
            route_path = project_root / route
            route_path.parent.mkdir(parents=True, exist_ok=True)
            route_path.write_text(
                write_stitch_page(route, slug, title, content_only=content_only),
                encoding="utf-8",
            )
            generated.append(route)
            used_routes.add(route)
            mode = "content-only" if content_only else "full-page"
            print(f"    → {route} ({mode})")
        else:
            print(f"    Stored as {slug}.html.ts (no route mapping)")

    if tailwind_cfg:
        safelist = extract_class_safelist(all_bodies)
        write_tailwind_config(fe, tailwind_cfg, safelist)
        generated.append("frontend/tailwind.config.ts")

    if all_styles:
        merge_globals_css(fe, "\n\n".join(all_styles))
        generated.append("frontend/src/app/globals.css")

    write_stitch_interaction_layer(fe)
    generated.extend([
        "frontend/src/lib/stitch-interactions.ts",
        "frontend/src/components/stitch-screen.tsx",
        "frontend/src/components/stitch-action-modal.tsx",
        "frontend/src/components/stitch-app-shell.tsx",
    ])

    if has_dashboard_routes and shell_parts:
        write_dashboard_layout(fe)
        generated.append("frontend/src/app/dashboard/layout.tsx")

    patch_root_layout(fe, head_links)

    manifest = {
        "screens": [
            {"title": s["title"], "slug": slugify(s["title"])} for s in screens
        ],
        "routes": sorted(used_routes),
    }
    manifest_path = project_root / "docs/project/stitch-applied-manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    generated.append(str(manifest_path.relative_to(project_root)))

    return generated


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: stitch_apply_html.py <project-root>")
        return 1
    root = Path(sys.argv[1])
    try:
        files = apply_stitch_html(root)
    except FileNotFoundError as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1
    if not files:
        return 0
    print(f"Applied Stitch HTML ({len(files)} artifacts) in {root}")
    for f in files:
        print(f"  - {f}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

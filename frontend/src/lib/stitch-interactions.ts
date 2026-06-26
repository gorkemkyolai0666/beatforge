'use client';

/** Sidebar / header icon → Next.js route (checked first — most reliable for Stitch nav). */
export const STITCH_ROUTE_BY_ICON: Record<string, string> = {
  dashboard: '/dashboard',
  workspaces: '/dashboard',
  work: '/dashboard',
  analytics: '/dashboard/cycle-heatmap',
  insights: '/dashboard/cycle-heatmap',
  local_fire_department: '/dashboard/cycle-heatmap',
  settings: '/dashboard/settings',
  manage_accounts: '/dashboard/settings',
  visibility: '/',
  home: '/',
  inbox: '/dashboard/triage',
  all_inbox: '/dashboard/triage',
  mail: '/dashboard/triage',
  battery_alert: '/dashboard/triage',
  warning: '/dashboard/triage',
  group: '/dashboard/team',
  groups: '/dashboard/team',
  contact_support: '/dashboard/team',
  help: '/dashboard/team',
  account_circle: '/dashboard/settings',
  hub: '/dashboard/boards',
  folder: '/dashboard/boards',
  video_library: '/dashboard/boards',
  photo_camera: '/dashboard',
  close: '/dashboard/issues',
  link: '/dashboard/dependencies',
  device_hub: '/dashboard/dependencies',
  event: '/dashboard/sprints',
  calendar_month: '/dashboard/sprints',
  play_circle: '/login',
  arrow_forward: '/register',
};

/** Link / button label → route (normalized lowercase). */
export const STITCH_ROUTE_BY_TEXT: Record<string, string> = {
  workspace: '/dashboard',
  dashboard: '/dashboard',
  'ana sayfa': '/dashboard',
  analytics: '/dashboard/cycle-heatmap',
  metrics: '/dashboard/cycle-heatmap',
  heatmap: '/dashboard/cycle-heatmap',
  engagement: '/dashboard/cycle-heatmap',
  settings: '/dashboard/settings',
  ayarlar: '/dashboard/settings',
  inbox: '/dashboard/triage',
  triage: '/dashboard/triage',
  tekrar: '/dashboard/triage',
  fatigue: '/dashboard/triage',
  landing: '/',
  'landing preview': '/',
  preview: '/',
  pricing: '/pricing',
  fiyatlandırma: '/pricing',
  'sign in': '/login',
  login: '/login',
  giriş: '/login',
  'log in': '/login',
  register: '/register',
  'sign up': '/register',
  kayıt: '/register',
  product: '/',
  ürün: '/',
  solutions: '/',
  çözümler: '/',
  support: '/dashboard/team',
  destek: '/dashboard/team',
  account: '/dashboard/settings',
  hesap: '/dashboard/settings',
  team: '/dashboard/team',
  ekip: '/dashboard/team',
  boards: '/dashboard/boards',
  dependencies: '/dashboard/dependencies',
  cascade: '/dashboard/dependencies',
  sprints: '/dashboard/sprints',
  ceremonies: '/dashboard/ceremonies',
  issues: '/dashboard/issues',
  audit: '/dashboard/audit',
  library: '/dashboard/boards',
  calendar: '/dashboard',
  meetings: '/dashboard',
  rooms: '/dashboard',
  'fatigue inbox': '/dashboard/triage',
  'fatigue analytics': '/dashboard/triage',
  'engagement heatmap': '/dashboard/cycle-heatmap',
  'cascade radar': '/dashboard/dependencies',
  intelligence: '/dashboard',
};

/** CTA button text → route (landing / marketing pages). */
export const STITCH_CTA_ROUTE_BY_TEXT: Record<string, string> = {
  'sign in': '/login',
  'log in': '/login',
  giriş: '/login',
  'get started': '/register',
  'start free': '/register',
  'start intelligence meeting': '/register',
  'request early access': '/register',
  'view interactive demo': '/login',
  demo: '/login',
  'try free': '/register',
  'free trial': '/register',
  'explore fatigue analytics': '/dashboard/triage',
  'explore engagement heatmap': '/dashboard/cycle-heatmap',
  'explore cascade radar': '/dashboard/dependencies',
  'upgrade to enterprise': '/pricing',
};

/** Button / link text → action id */
export const STITCH_ACTION_BY_TEXT: Record<string, string> = {
  'create post': 'create-item',
  'new post': 'create-item',
  'yeni gönderi': 'create-item',
  'yeni mesaj': 'create-item',
  'new meeting': 'create-item',
  schedule: 'schedule',
  zamanla: 'schedule',
  'auto-crop': 'auto-crop',
  upgrade: 'upgrade',
  'pro plan': 'upgrade',
  export: 'export',
  indir: 'export',
  'en/tr': 'locale-toggle',
  'generate key': 'generate-key',
  'invite member': 'invite-member',
  'add member': 'invite-member',
  'üye davet': 'invite-member',
  'resolve conflicts': 'resolve-conflicts',
  'view audit log': 'audit-log',
  month: 'calendar-view-month',
  week: 'calendar-view-week',
  '7 days': 'range-7d',
  '30 days': 'range-30d',
};

export const STITCH_ACTION_BY_ICON: Record<string, string> = {
  notifications: 'notifications',
  search: 'search-focus',
  account_circle: 'profile',
  chevron_left: 'calendar-prev',
  chevron_right: 'calendar-next',
  schedule: 'schedule-picker',
  image: 'attach-media',
  sentiment_satisfied: 'emoji-picker',
  content_copy: 'copy-key',
  download: 'export',
  person_add: 'invite-member',
  more_horiz: 'context-menu',
  add: 'create-item',
  videocam: 'create-item',
};

export type StitchActionId =
  | 'create-item'
  | 'schedule'
  | 'auto-crop'
  | 'upgrade'
  | 'export'
  | 'locale-toggle'
  | 'generate-key'
  | 'invite-member'
  | 'resolve-conflicts'
  | 'audit-log'
  | 'calendar-view-month'
  | 'calendar-view-week'
  | 'range-7d'
  | 'range-30d'
  | 'notifications'
  | 'search-focus'
  | 'profile'
  | 'calendar-prev'
  | 'calendar-next'
  | 'schedule-picker'
  | 'attach-media'
  | 'emoji-picker'
  | 'copy-key'
  | 'context-menu'
  | 'open-detail'
  | 'heatmap-cell'
  | 'platform-toggle'
  | 'ui-feedback';

/** Classes Stitch uses for active sidebar items — stripped before re-applying. */
const STITCH_ACTIVE_CLASSES = [
  'bg-primary-container/20',
  'bg-primary-container/10',
  'bg-primary/10',
  'bg-primary/5',
  'bg-surface-container-high',
  'bg-surface-container-highest',
  'bg-surface-container-highest/50',
  'bg-primary-fixed/30',
  'bg-primary-fixed/10',
  'text-primary',
  'font-bold',
  'font-semibold',
  'border-r-4',
  'border-r-2',
  'border-primary',
  'rounded-r-none',
  'rounded-l-lg',
  'scale-95',
  'scale-98',
];

const STITCH_INACTIVE_NAV_CLASSES = ['text-on-surface-variant'];

export function normalizeStitchText(text: string): string {
  return text.replace(/\s+/g, ' ').trim().toLowerCase();
}

function getMaterialIcon(el: Element): string | null {
  const icon = el.querySelector('.material-symbols-outlined');
  if (!icon) return null;
  return normalizeStitchText(icon.textContent || '').replace(/\s/g, '_');
}

function matchRouteFromText(text: string, map: Record<string, string>): string | null {
  if (!text) return null;
  if (map[text]) return map[text];
  for (const [key, route] of Object.entries(map)) {
    if (key.length > 2 && text.includes(key)) return route;
  }
  return null;
}

export function resolveStitchRoute(el: Element): string | null {
  const icon = getMaterialIcon(el);
  if (icon && STITCH_ROUTE_BY_ICON[icon]) return STITCH_ROUTE_BY_ICON[icon];

  const text = normalizeStitchText(el.textContent || '');
  return (
    matchRouteFromText(text, STITCH_CTA_ROUTE_BY_TEXT) ||
    matchRouteFromText(text, STITCH_ROUTE_BY_TEXT)
  );
}

export function resolveStitchAction(el: Element): StitchActionId | null {
  const text = normalizeStitchText(el.textContent || '');
  for (const [key, action] of Object.entries(STITCH_ACTION_BY_TEXT)) {
    if (text.includes(key)) return action as StitchActionId;
  }
  const icon = getMaterialIcon(el);
  if (icon && STITCH_ACTION_BY_ICON[icon]) return STITCH_ACTION_BY_ICON[icon] as StitchActionId;
  if (el.classList.contains('cursor-pointer') && el.tagName !== 'A' && el.tagName !== 'BUTTON') {
    if (el.closest('[class*="grid-cols"]') && el.classList.contains('rounded')) {
      return 'heatmap-cell';
    }
    return 'open-detail';
  }
  return null;
}

function isSidebarNavLink(el: Element): boolean {
  const nav = el.closest('nav');
  if (!nav || el.tagName !== 'A') return false;
  // Landing/marketing header nav — not the app sidebar
  if (nav.closest('header') && !nav.classList.contains('fixed')) return false;
  return true;
}

function annotateElement(el: Element): void {
  const route = resolveStitchRoute(el);
  const action = resolveStitchAction(el);

  if (route) {
    el.setAttribute('data-stitch-route', route);
    if (el.tagName === 'A') {
      el.setAttribute('href', route);
      el.setAttribute('role', 'link');
    } else {
      el.setAttribute('role', 'link');
      el.setAttribute('tabindex', '0');
    }
    if (isSidebarNavLink(el)) el.setAttribute('data-stitch-nav', 'true');
    return;
  }

  if (action) {
    el.setAttribute('data-stitch-action', action);
    if (el.tagName === 'BUTTON' || el.tagName === 'A') {
      el.setAttribute('type', 'button');
    } else {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
    }
    return;
  }

  if (el.tagName === 'BUTTON' || (el.tagName === 'A' && (el.getAttribute('href') === '#' || !el.getAttribute('href')))) {
    el.setAttribute('data-stitch-action', 'ui-feedback');
    if (el.tagName === 'BUTTON') {
      el.setAttribute('type', 'button');
    } else {
      el.setAttribute('href', '#');
      el.setAttribute('role', 'button');
    }
  } else if (el.classList.contains('cursor-pointer')) {
    el.setAttribute('data-stitch-action', 'open-detail');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
  }
}

/** Annotate Stitch HTML with data-stitch-route / data-stitch-action before interaction wiring. */
export function wireStitchDom(root: HTMLElement): void {
  root.querySelectorAll('a[href="#"], a[href=""], a[href="javascript:void(0)"], button').forEach(annotateElement);

  root.querySelectorAll('a[href="#"]').forEach((el) => {
    if (!el.hasAttribute('data-stitch-route') && !el.hasAttribute('data-stitch-action')) {
      annotateElement(el);
    }
  });

  root.querySelectorAll('[class*="cursor-pointer"]').forEach((el) => {
    if (el.tagName === 'A' || el.tagName === 'BUTTON') return;
    if (el.hasAttribute('data-stitch-action') || el.hasAttribute('data-stitch-route')) return;
    annotateElement(el);
  });
}

/** Sync sidebar active highlight with current Next.js pathname. */
export function applyStitchNavActiveState(root: HTMLElement, pathname: string): void {
  const navLinks = root.querySelectorAll<HTMLElement>('[data-stitch-nav]');

  navLinks.forEach((el) => {
    STITCH_ACTIVE_CLASSES.forEach((c) => el.classList.remove(c));
    STITCH_INACTIVE_NAV_CLASSES.forEach((c) => el.classList.add(c));
    el.classList.add('px-4', 'py-3', 'flex', 'items-center', 'gap-3', 'transition-colors', 'rounded-lg', 'mx-2', 'mb-1');
  });

  navLinks.forEach((el) => {
    const route = el.getAttribute('data-stitch-route');
    if (!route) return;

    const isActive =
      pathname === route ||
      (route !== '/dashboard' && route !== '/' && pathname.startsWith(route));

    if (isActive) {
      STITCH_INACTIVE_NAV_CLASSES.forEach((c) => el.classList.remove(c));
      el.classList.add(
        'bg-primary-container/20',
        'text-primary',
        'font-bold',
        'border-r-4',
        'border-primary',
        'rounded-r-none',
        'rounded-l-lg',
      );
    }
  });
}

export function findStitchClickTarget(target: EventTarget | null): HTMLElement | null {
  if (!(target instanceof Element)) return null;
  const interactive = target.closest(
    'a[data-stitch-route], button[data-stitch-action], button[data-stitch-route], [data-stitch-action], [data-stitch-route]',
  );
  return interactive instanceof HTMLElement ? interactive : null;
}

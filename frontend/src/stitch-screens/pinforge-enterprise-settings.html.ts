/** Auto-generated from Stitch htmlCode — do not edit. */
export const html = `<div class="stitch-page-content p-8 min-h-full w-full overflow-y-auto"><div class="mb-8 flex justify-between items-end">
<div>
<h1 class="font-headline-xl text-headline-xl text-on-surface mb-2 tracking-tight">Team &amp; Security</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Manage organization access, API integrations, and compliance protocols.</p>
</div>
<div class="flex gap-4">
<button class="bg-transparent border border-[#1B4332]/20 text-[#1B4332] hover:bg-white/40 transition-all duration-200 font-body-sm text-body-sm px-4 py-2 rounded-lg font-semibold flex items-center gap-2 glass-panel">
<span class="material-symbols-outlined text-[18px]">download</span> Export Audit Log </button>
<button class="bg-primary text-on-primary hover:scale-102 transition-all duration-200 ease-out font-body-sm text-body-sm px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-sm shadow-primary/20">
<span class="material-symbols-outlined text-[18px]">person_add</span> Invite Member </button>
</div>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-12 gap-gutter">
<!-- User Management (Spans 8 cols) -->
<div class="col-span-12 lg:col-span-8 glass-panel glass-panel-hover rounded-xl p-6 flex flex-col">
<div class="flex justify-between items-center mb-6 border-b border-on-surface-variant/10 pb-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">group</span>
<h2 class="font-headline-md text-headline-md text-on-surface">Active Members</h2>
</div>
<div class="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-1.5 border border-white/40 w-48">
<span class="material-symbols-outlined text-on-surface-variant text-[16px]">search</span>
<input class="bg-transparent border-none focus:ring-0 text-data-sm font-data-sm w-full placeholder-on-surface-variant/70 outline-none p-0" placeholder="Find user..." type="text"/>
</div>
</div>
<div class="flex-1 overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="text-on-surface-variant border-b border-[#1B4332]/10 font-data-sm text-data-sm uppercase tracking-wider">
<th class="pb-3 font-medium">User</th>
<th class="pb-3 font-medium">Role</th>
<th class="pb-3 font-medium">Last Active</th>
<th class="pb-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody class="font-body-sm text-body-sm">
<tr class="border-b border-[#1B4332]/5 hover:bg-white/40 transition-colors group cursor-pointer">
<td class="py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-tertiary- text-on-tertiary- flex items-center justify-center font-bold text-data-sm">AL</div>
<div>
<div class="font-medium text-on-surface">Alex Lenz</div>
<div class="text-on-surface-variant/70 text-data-sm font-data-sm">alex@beatforge.io</div>
</div>
</div>
</td>
<td class="py-4"><span class="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-data-sm font-data-sm">Admin</span></td>
<td class="py-4 text-on-surface-variant/80 font-data-sm text-data-sm">2 mins ago</td>
<td class="py-4 text-right">
<div class="inline-flex items-center gap-1.5 bg-[#7B61FF]/10 text-[#7B61FF] px-2 py-1 rounded font-data-sm text-data-sm">
<div class="w-1.5 h-1.5 rounded-full bg-[#7B61FF]"></div> Active </div>
</td>
</tr>
<tr class="border-b border-[#1B4332]/5 hover:bg-white/40 transition-colors group cursor-pointer">
<td class="py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-secondary- text-on-secondary- flex items-center justify-center font-bold text-data-sm">SJ</div>
<div>
<div class="font-medium text-on-surface">Sarah Jenkins</div>
<div class="text-on-surface-variant/70 text-data-sm font-data-sm">sarah@beatforge.io</div>
</div>
</div>
</td>
<td class="py-4"><span class="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-data-sm font-data-sm">Editor</span></td>
<td class="py-4 text-on-surface-variant/80 font-data-sm text-data-sm">1 hour ago</td>
<td class="py-4 text-right">
<div class="inline-flex items-center gap-1.5 bg-[#7B61FF]/10 text-[#7B61FF] px-2 py-1 rounded font-data-sm text-data-sm">
<div class="w-1.5 h-1.5 rounded-full bg-[#7B61FF]"></div> Active </div>
</td>
</tr>
<tr class="hover:bg-white/40 transition-colors group cursor-pointer">
<td class="py-4">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-data-sm">MK</div>
<div>
<div class="font-medium text-on-surface">Mike Kline</div>
<div class="text-on-surface-variant/70 text-data-sm font-data-sm">mike@external.io</div>
</div>
</div>
</td>
<td class="py-4"><span class="bg-surface-variant text-on-surface-variant px-2 py-1 rounded text-data-sm font-data-sm">Viewer</span></td>
<td class="py-4 text-on-surface-variant/80 font-data-sm text-data-sm">3 days ago</td>
<td class="py-4 text-right">
<div class="inline-flex items-center gap-1.5 bg-on-surface-variant/10 text-on-surface-variant px-2 py-1 rounded font-data-sm text-data-sm">
<div class="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></div> Offline </div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="mt-4 text-center">
<button class="text-secondary font-data-sm text-data-sm font-semibold hover:underline">View All Members →</button>
</div>
</div>
<!-- API & Integrations (Spans 4 cols) -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<!-- KVKK Vault -->
<div class="glass-panel glass-panel-hover rounded-xl p-6 flex-1">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-[#7B61FF]">shield_lock</span>
<h3 class="font-headline-md text-headline-md text-on-surface">KVKK Consent Vault</h3>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant mb-4">Regional data compliance protocols are currently enforcing strict anonymization for EU/TR traffic.</p>
<div class="bg-white/50 border border-white/60 rounded-lg p-4 mb-4">
<div class="flex justify-between items-center mb-2">
<span class="font-data-sm text-data-sm text-on-surface font-medium">Compliance Status</span>
<span class="bg-[#7B61FF]/10 text-[#7B61FF] px-2 py-0.5 rounded text-data-sm font-data-sm">Active Enforcing</span>
</div>
<div class="w-full bg-surface-variant rounded-full h-1.5 mb-1">
<div class="bg-[#7B61FF] h-1.5 rounded-full w-[100%]"></div>
</div>
<div class="text-right font-data-sm text-data-sm text-on-surface-variant/70">100% Covered</div>
</div>
<button class="w-full bg-transparent border border-[#1B4332] text-[#1B4332] hover:bg-white/40 transition-all duration-200 font-body-sm text-body-sm px-4 py-2 rounded-lg font-semibold">Review Policy Rules</button>
</div>
<!-- API Keys -->
<div class="glass-panel glass-panel-hover rounded-xl p-6 flex-1">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-secondary">api</span>
<h3 class="font-headline-md text-headline-md text-on-surface">API Access</h3>
</div>
<div class="space-y-3 mb-6">
<div class="flex justify-between items-center p-3 bg-white/40 border border-white/60 rounded-lg">
<div>
<div class="font-data-sm text-data-sm font-medium text-on-surface">Production Key</div>
<div class="font-data-sm text-data-sm text-on-surface-variant/60">pk_live_***9f2</div>
</div>
<button class="text-secondary hover:bg-secondary/10 p-1.5 rounded-md transition-colors"><span class="material-symbols-outlined text-[18px]">content_copy</span></button>
</div>
<div class="flex justify-between items-center p-3 bg-white/40 border border-white/60 rounded-lg">
<div>
<div class="font-data-sm text-data-sm font-medium text-on-surface">Staging Key</div>
<div class="font-data-sm text-data-sm text-on-surface-variant/60">pk_test_***4x1</div>
</div>
<button class="text-secondary hover:bg-secondary/10 p-1.5 rounded-md transition-colors"><span class="material-symbols-outlined text-[18px]">content_copy</span></button>
</div>
</div>
<button class="w-full bg-transparent border border-secondary text-secondary hover:bg-secondary/5 transition-all duration-200 font-body-sm text-body-sm px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">add</span> Generate New Key </button>
</div>
</div>
<!-- SSO Config (Spans 12 cols, bottom row) -->
<div class="col-span-12 glass-panel glass-panel-hover rounded-xl p-6 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-[24px]">key</span>
</div>
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">Single Sign-On (SSO)</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Configure SAML or OIDC for enterprise identity management.</p>
</div>
</div>
<div>
<div class="flex items-center gap-3">
<span class="font-data-sm text-data-sm text-on-surface-variant">Status: <span class="text-primary font-semibold">Not Configured</span></span>
<button class="bg-transparent border border-[#1B4332]/20 text-[#1B4332] hover:bg-white/40 transition-all duration-200 font-body-sm text-body-sm px-4 py-2 rounded-lg font-semibold">Setup Identity Provider</button>
</div>
</div>
</div>
</div></div>`;

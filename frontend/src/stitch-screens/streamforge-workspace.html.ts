/** Auto-generated from Stitch htmlCode — do not edit. */
export const html = `<div class="stitch-page-content p-8 min-h-full w-full overflow-y-auto"><!-- Left/Center: Video Player & Stats -->
<div class="col-span-12 lg:col-span-8 space-y-6">
<!-- Video Player Container -->
<div class="glass-panel rounded-xl overflow-hidden aspect-video relative group border-glow">
<!-- Placeholder for stream image -->
<div class="bg-cover bg-center w-full h-full absolute inset-0 opacity-80 mix-blend-screen" data-alt="A high-octane live stream gaming scene. A futuristic first-person shooter game is being played, displayed on a high-resolution screen. The scene is lit with vibrant neon purples and emeralds typical of a cyberpunk aesthetic. The UI overlays of the game are sharp and technical. Dark obsidian backgrounds contrast with bright laser effects." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3aiWKswyOq05cw2m-LLqAqoUizL3xNTqFlfYOctlkcDKeepxvrIWJQzeFrH0-2WXaUr74bts3GtuqubqK0zTDT1dIsqHeWPSkXTVxUfrPGygnQumfZhsTiUwEW9hVVDiM3yKiEhZ4ZzJ3-tDMscBsckoj4NDDtpD65R0qTlteTq1WW3xUzfCVB8jUAbWeJ7oTz_YSuQyMTBlvrWR7WgyKFbY7_WvAtUNwqAeJPAvFYAT4tf5BvTz7E08uXRWgTOryGiE6g1J9ip5i')"></div>
<!-- Player Overlay UI -->
<div class="absolute inset-0 bg-gradient-to-t from-[#0A0E0D]/90 via-transparent to-transparent flex flex-col justify-between p-4">
<div class="flex justify-between items-start">
<div class="flex items-center gap-2 bg-[#0A0E0D]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant/30">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse shadow-[0_0_8px_#00eefc]"></span>
<span class="font-label-mono text-label-mono text-secondary-container">LIVE</span>
<span class="font-label-mono text-label-mono text-on-surface ml-2">124.5K Viewers</span>
</div>
<div class="flex gap-2">
<button class="p-2 bg-[#0A0E0D]/80 backdrop-blur-md rounded-full text-on-surface hover:text-primary transition-colors border border-outline-variant/30"><span class="material-symbols-outlined text-[20px]">share</span></button>
<button class="p-2 bg-[#0A0E0D]/80 backdrop-blur-md rounded-full text-on-surface hover:text-primary transition-colors border border-outline-variant/30"><span class="material-symbols-outlined text-[20px]">fullscreen</span></button>
</div>
</div>
<div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<!-- Fake Progress Bar -->
<div class="w-full h-1 bg-surface-container rounded-full overflow-hidden mb-4">
<div class="h-full bg-primary w-full origin-left animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
<div class="flex justify-between items-center">
<div class="flex items-center gap-4 text-on-surface">
<button><span class="material-symbols-outlined text-[28px]">play_arrow</span></button>
<button><span class="material-symbols-outlined text-[24px]">volume_up</span></button>
<span class="font-label-mono text-label-mono">03:45:12 / LIVE</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-[20px]">closed_caption</span>
<span class="material-symbols-outlined text-on-surface text-[20px]">settings</span>
</div>
</div>
</div>
</div>
</div>
<!-- Live Metrics Bento -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Metric Card 1 -->
<div class="glass-panel p-4 rounded-xl border-l-2 border-l-[#1DB954]">
<p class="font-label-mono text-label-mono text-on-surface-variant mb-1 flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">chat</span> CHAT VELOCITY</p>
<p class="font-data-display text-[24px] font-medium text-on-surface">342 <span class="text-[14px] text-on-surface-variant">msg/s</span></p>
<div class="mt-2 h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-[#1DB954] w-[75%]"></div>
</div>
</div>
<!-- Metric Card 2 -->
<div class="glass-panel p-4 rounded-xl border-l-2 border-l-[#7B61FF]">
<p class="font-label-mono text-label-mono text-on-surface-variant mb-1 flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">local_fire_department</span> HYPE INDEX</p>
<p class="font-data-display text-[24px] font-medium text-secondary-container">98.2%</p>
<div class="mt-2 h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div class="h-full bg-[#7B61FF] w-[98%] shadow-[0_0_8px_#7B61FF]"></div>
</div>
</div>
<!-- Metric Card 3 -->
<div class="glass-panel p-4 rounded-xl border-l-2 border-l-primary">
<p class="font-label-mono text-label-mono text-on-surface-variant mb-1 flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">trending_up</span> CLIP CANDIDATE SCORE</p>
<div class="flex items-end gap-2">
<p class="font-data-display text-[32px] font-bold text-primary leading-none">8.9</p>
<p class="text-on-surface-variant text-sm mb-1">/ 10</p>
</div>
<p class="text-[12px] text-primary mt-1 font-label-mono">High Probability</p>
</div>
</div>
</div>
<!-- Right Sidebar: Clip Inspector & Inbox -->
<div class="col-span-12 lg:col-span-4 flex flex-col gap-6">
<!-- Intelligence Feed Header -->
<div class="glass-panel p-4 rounded-xl flex items-center justify-between border-t border-t-primary/30">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary">memory</span>
<h2 class="font-headline-sm text-[18px] font-semibold text-on-surface">Auto-Clips Inbox</h2>
</div>
<span class="bg-primary/20 text-primary px-2 py-0.5 rounded font-label-mono text-[10px]">AI ACTIVE</span>
</div>
<!-- Inbox List -->
<div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
<!-- Clip Card 1 (High Severity) -->
<div class="glass-panel p-4 rounded-xl relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
<div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-error/20 to-transparent pointer-events-none"></div>
<div class="flex justify-between items-start mb-2">
<span class="bg-error/10 text-error border border-error/20 px-2 py-0.5 rounded-full font-label-mono text-[10px] flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-error"></span> HIGH IMPACT </span>
<span class="font-label-mono text-label-mono text-on-surface-variant">- 2m ago</span>
</div>
<h3 class="font-body-md font-medium text-on-surface mb-2 pr-4">Insane 1v4 Clutch Ending</h3>
<div class="flex flex-wrap gap-2 mb-3">
<span class="bg-[#2E1065] text-primary px-2 py-0.5 rounded-full font-label-mono text-[10px]">#HypeTrain</span>
<span class="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-label-mono text-[10px] flex items-center gap-1"><span class="material-symbols-outlined text-[12px]">chat</span> Peak Drift</span>
</div>
<div class="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant/20">
<div class="flex gap-2">
<button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[18px]">play_circle</span></button>
<button class="text-on-surface-variant hover:text-secondary-container transition-colors"><span class="material-symbols-outlined text-[18px]">bookmark</span></button>
</div>
<button class="text-xs text-primary font-medium hover:underline">Review Candidate</button>
</div>
</div>
<!-- Clip Card 2 (Medium) -->
<div class="glass-panel p-4 rounded-xl relative group cursor-pointer hover:border-primary/50 transition-colors">
<div class="flex justify-between items-start mb-2">
<span class="bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-label-mono text-[10px] flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span> MED IMPACT </span>
<span class="font-label-mono text-label-mono text-on-surface-variant">- 15m ago</span>
</div>
<h3 class="font-body-md font-medium text-on-surface mb-2">Funny Glitch Reaction</h3>
<div class="flex flex-wrap gap-2 mb-3">
<span class="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full font-label-mono text-[10px]">#LUL</span>
</div>
<div class="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant/20">
<div class="flex gap-2">
<button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[18px]">play_circle</span></button>
</div>
<button class="text-xs text-primary font-medium hover:underline">Review Candidate</button>
</div>
</div>
<!-- Clip Card 3 (Low) -->
<div class="glass-panel p-4 rounded-xl relative group cursor-pointer hover:border-primary/50 transition-colors opacity-70">
<div class="flex justify-between items-start mb-2">
<span class="bg-surface-container text-on-surface-variant border border-outline-variant/20 px-2 py-0.5 rounded-full font-label-mono text-[10px] flex items-center gap-1"> LOW IMPACT </span>
<span class="font-label-mono text-label-mono text-on-surface-variant">- 1h ago</span>
</div>
<h3 class="font-body-md text-sm text-on-surface-variant mb-2">Ambient Map Walkthrough</h3>
<div class="flex justify-between items-center mt-3 pt-3 border-t border-outline-variant/20">
<div class="flex gap-2">
<button class="text-on-surface-variant hover:text-primary transition-colors"><span class="material-symbols-outlined text-[18px]">play_circle</span></button>
</div>
<button class="text-xs text-on-surface-variant hover:text-primary font-medium">Dismiss</button>
</div>
</div>
</div>
</div></div>`;

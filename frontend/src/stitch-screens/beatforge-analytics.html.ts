/** Auto-generated from Stitch htmlCode — do not edit. */
export const html = `<div class="stitch-page-content p-8 min-h-full w-full overflow-y-auto"><!-- Header Section -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-4">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-1">Metrics &amp; Analytics</h2>
<p class="font-data-label text-data-label text-on-surface-variant flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Live Data Stream <span class="text-tertiary-container mx-2">|</span> Session ID: <span class="text-primary font-bold">#BF-8829-X</span>
</p>
</div>
<div class="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full border border-white/10">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span class="font-caption text-caption font-bold text-primary tracking-wide uppercase">Enterprise</span>
</div>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
<!-- Session Heatmap (Spans full width on mobile, 8 cols on desktop) -->
<div class="glass-card glow-hover p-card-padding rounded-xl md:col-span-8 flex flex-col transition-all duration-300">
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Oturum Isı Haritası</h3>
<span class="material-symbols-outlined text-on-surface-variant" data-icon="calendar_month">calendar_month</span>
</div>
<p class="font-caption text-caption text-on-surface-variant mb-4">Skip Severity Density (Grid Cols: 12, Row: Hour)</p>
<div class="flex-1 flex flex-col gap-1 justify-center">
<!-- Heatmap Rows -->
<div class="heatmap-grid h-8">
<div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-mid rounded-sm"></div><div class="hm-mid rounded-sm"></div>
<div class="hm-high rounded-sm"></div><div class="hm-severe rounded-sm"></div><div class="hm-high rounded-sm"></div><div class="hm-mid rounded-sm"></div>
<div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div>
</div>
<div class="heatmap-grid h-8">
<div class="hm-low rounded-sm"></div><div class="hm-mid rounded-sm"></div><div class="hm-high rounded-sm"></div><div class="hm-high rounded-sm"></div>
<div class="hm-severe rounded-sm"></div><div class="hm-severe rounded-sm"></div><div class="hm-severe rounded-sm"></div><div class="hm-high rounded-sm"></div>
<div class="hm-mid rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div>
</div>
<div class="heatmap-grid h-8">
<div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-mid rounded-sm"></div>
<div class="hm-mid rounded-sm"></div><div class="hm-high rounded-sm"></div><div class="hm-mid rounded-sm"></div><div class="hm-low rounded-sm"></div>
<div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div><div class="hm-low rounded-sm"></div>
</div>
</div>
<div class="mt-4 flex justify-between font-data-label text-[10px] text-tertiary-container">
<span>00:00</span>
<span>12:00</span>
<span>24:00</span>
</div>
</div>
<!-- Skip Decay Score -->
<div class="glass-card glow-hover p-card-padding rounded-xl md:col-span-4 flex flex-col transition-all duration-300">
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Atlama Kaybı Skoru</h3>
<span class="material-symbols-outlined text-error" data-icon="trending_down">trending_down</span>
</div>
<div class="mb-4">
<div class="font-data-value text-[32px] font-bold text-on-surface">14.2%</div>
<div class="font-data-label text-data-label text-error mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> +2.4% vs last track </div>
</div>
<!-- Abstract Sparkline -->
<div class="flex-1 mt-auto relative h-24 w-full">
<svg class="w-full h-full absolute bottom-0" preserveaspectratio="none" viewbox="0 0 100 30">
<path class="sparkline-svg complex" d="M0,25 Q10,20 20,25 T40,15 T60,20 T80,5 T100,10"></path>
<!-- Gradient Fill under sparkline -->
<path d="M0,25 Q10,20 20,25 T40,15 T60,20 T80,5 T100,10 L100,30 L0,30 Z" fill="url(#decayGrad)" opacity="0.2"></path>
<defs>
<lineargradient id="decayGrad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#c9bfff"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<!-- Discovery Funnel -->
<div class="glass-card glow-hover p-card-padding rounded-xl md:col-span-6 flex flex-col transition-all duration-300">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md text-headline-md text-on-surface">Keşif Hunisi</h3>
<span class="material-symbols-outlined text-primary" data-icon="filter_alt">filter_alt</span>
</div>
<div class="flex flex-col gap-3">
<!-- Funnel Step 1 -->
<div class="flex items-center gap-4 group">
<div class="w-16 font-data-label text-data-label text-tertiary-container text-right">Imps</div>
<div class="flex-1 bg-surface-container-high h-6 rounded-r-md overflow-hidden relative">
<div class="absolute top-0 left-0 h-full bg-primary/20 w-full group-hover:bg-primary/30 transition-colors"></div>
<div class="absolute top-0 left-0 h-full border-l-2 border-primary w-full"></div>
</div>
<div class="w-20 font-data-value text-data-value text-right">42.5K</div>
</div>
<!-- Funnel Step 2 -->
<div class="flex items-center gap-4 group">
<div class="w-16 font-data-label text-data-label text-tertiary-container text-right">Plays</div>
<div class="flex-1 bg-surface-container-high h-6 rounded-r-md overflow-hidden relative">
<div class="absolute top-0 left-0 h-full bg-primary/40 w-[65%] group-hover:bg-primary/50 transition-colors"></div>
<div class="absolute top-0 left-0 h-full border-l-2 border-primary w-[65%]"></div>
</div>
<div class="w-20 font-data-value text-data-value text-right">27.6K</div>
</div>
<!-- Funnel Step 3 -->
<div class="flex items-center gap-4 group">
<div class="w-16 font-data-label text-data-label text-tertiary-container text-right">Saves</div>
<div class="flex-1 bg-surface-container-high h-6 rounded-r-md overflow-hidden relative">
<div class="absolute top-0 left-0 h-full bg-primary/60 w-[22%] group-hover:bg-primary/70 transition-colors"></div>
<div class="absolute top-0 left-0 h-full border-l-2 border-primary w-[22%]"></div>
</div>
<div class="w-20 font-data-value text-data-value text-right">9.3K</div>
</div>
<!-- Funnel Step 4 -->
<div class="flex items-center gap-4 group">
<div class="w-16 font-data-label text-data-label text-tertiary-container text-right">Shares</div>
<div class="flex-1 bg-surface-container-high h-6 rounded-r-md overflow-hidden relative">
<div class="absolute top-0 left-0 h-full bg-primary w-[8%] group-hover:brightness-110 transition-all shadow-[0_0_10px_rgba(83,224,118,0.5)]"></div>
</div>
<div class="w-20 font-data-value text-data-value text-right text-primary">3.4K</div>
</div>
</div>
</div>
<!-- Trend Analysis & Early Skip Warnings -->
<div class="glass-card glow-hover p-card-padding rounded-xl md:col-span-6 flex flex-col transition-all duration-300">
<div class="flex justify-between items-center mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Trend Analizi</h3>
<div class="flex gap-2">
<span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span class="w-2 h-2 rounded-full bg-error animate-pulse" style="animation-delay: 200ms;"></span>
</div>
</div>
<div class="space-y-4 flex-1">
<!-- Warning Item 1 -->
<div class="bg-surface-container-high p-3 rounded-lg border border-error/20 hover:border-error/50 transition-colors duration-200 cursor-pointer">
<div class="flex justify-between items-start mb-2">
<div class="font-body-md text-body-md font-semibold text-error flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="warning">warning</span> Early Skip Drift </div>
<span class="font-data-label text-data-label text-tertiary-container">0:12 - 0:18</span>
</div>
<p class="font-caption text-caption text-on-surface-variant">Vocals entering at 0:12 causing a 14% drop-off spike compared to rolling average.</p>
</div>
<!-- Warning Item 2 -->
<div class="bg-surface-container-high p-3 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-colors duration-200 cursor-pointer">
<div class="flex justify-between items-start mb-2">
<div class="font-body-md text-body-md font-semibold text-secondary flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]" data-icon="info">info</span> Retention Anomaly </div>
<span class="font-data-label text-data-label text-tertiary-container">1:45</span>
</div>
<p class="font-caption text-caption text-on-surface-variant">Chorus 2 retains 8% more listeners than Chorus 1. Structural review recommended.</p>
</div>
</div>
</div>
</div></div>`;

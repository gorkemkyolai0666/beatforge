/** Auto-generated from Stitch htmlCode — do not edit. */
export const html = `<div class="stitch-page-content p-8 min-h-full w-full overflow-y-auto"><!-- Dashboard Canvas -->
<div class="flex-1 p-gutter pt-24 max-w-[1600px] mx-auto w-full space-y-stack-xl">
<!-- Page Header -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-stack-md">
<div>
<h2 class="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface">Metrics &amp; Analytics</h2>
<p class="font-body-lg text-body-lg text-secondary mt-1">Real-time occupancy intelligence and revenue forecasting.</p>
</div>
<div class="flex gap-2">
<button class="px-4 py-2 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-colors duration-200 font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">calendar_today</span> Last 30 Days </button>
<button class="px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors duration-200 font-label-md text-label-md flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">download</span> Export </button>
</div>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- KPI Cards (Row 1) -->
<div class="col-span-1 md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div class="flex justify-between items-start">
<div>
<p class="font-label-md text-label-md text-secondary uppercase tracking-wider">Portfolio Occupancy</p>
<h3 class="font-headline-xl text-headline-xl text-on-surface mt-2">78.4%</h3>
</div>
<div class="p-2 bg-surface-container rounded-lg text-primary">
<span class="material-symbols-outlined">hotel_class</span>
</div>
</div>
<div class="mt-stack-md flex items-center gap-2 text-surface-tint font-label-sm text-label-sm">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
<span>+4.2% vs last month</span>
</div>
</div>
<div class="col-span-1 md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div class="flex justify-between items-start">
<div>
<p class="font-label-md text-label-md text-secondary uppercase tracking-wider">Avg. RevPAR</p>
<h3 class="font-headline-xl text-headline-xl text-on-surface mt-2">€245</h3>
</div>
<div class="p-2 bg-surface-container rounded-lg text-tertiary">
<span class="material-symbols-outlined">payments</span>
</div>
</div>
<div class="mt-stack-md flex items-center gap-2 text-surface-tint font-label-sm text-label-sm">
<span class="material-symbols-outlined text-[16px]">trending_up</span>
<span>+12.8% YoY growth</span>
</div>
</div>
<div class="col-span-1 md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
<div class="relative z-10">
<p class="font-label-md text-label-md text-secondary uppercase tracking-wider">Empty-Night Decay</p>
<h3 class="font-headline-xl text-headline-xl text-error mt-2">12 Days</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">Identified gaps needing pricing adjustment.</p>
</div>
<!-- Decorative background element for warning -->
<div class="absolute -right-6 -bottom-6 w-32 h-32 bg-error-container rounded-full blur-2xl opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
</div>
<!-- High-Density Occupancy Heatmap (Row 2, Full Width) -->
<div class="col-span-1 md:col-span-12 glass-card rounded-xl p-6 space-y-stack-md">
<div class="flex justify-between items-center border-b border-outline-variant/30 pb-4">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface">90-Day Occupancy Heatmap</h3>
<p class="font-body-sm text-body-sm text-secondary">Visualizing booking density and revenue decay scoring.</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
<span>Low</span>
<div class="w-16 h-2 rounded-full bg-gradient-to-r from-surface-container to-primary"></div>
<span>High</span>
</div>
</div>
</div>
<!-- 12-Column Grid for Heatmap -->
<div class="overflow-x-auto pb-2">
<div class="min-w-[800px]">
<!-- Month Labels -->
<div class="grid grid-cols-12 gap-1 mb-2">
<div class="col-span-4 font-label-sm text-label-sm text-on-surface-variant">June</div>
<div class="col-span-4 font-label-sm text-label-sm text-on-surface-variant">July</div>
<div class="col-span-4 font-label-sm text-label-sm text-on-surface-variant">August</div>
</div>
<!-- Heatmap Rows (Simulated Properties) -->
<div class="space-y-2">
<!-- Property Row 1 -->
<div class="flex items-center gap-4">
<div class="w-32 truncate font-label-md text-label-md text-on-surface">Villa Azure</div>
<div class="flex-1 grid grid-cols-[repeat(90,minmax(0,1fr))] gap-[1px]">
<!-- Simulating 90 days. Using script to generate blocks for brevity in visual representation -->
<script> for(let i=0; i<90; i++) { let intensity = Math.random(); let bgClass = 'bg-surface-container'; // Default empty if(intensity > 0.8) bgClass = 'bg-primary'; // Booked solid else if(intensity > 0.4) bgClass = 'bg-primary/60'; // Booked partially/discounted else if(intensity > 0.2) bgClass = 'bg-tertiary-container/40'; // Inquiry stage document.write(\`<div class="h-6 rounded-[1px] \${bgClass} hover:opacity-75 transition-opacity cursor-pointer group relative"> <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none"> Day \${i+1}: \${intensity > 0.4 ? 'Booked' : 'Available'} </div> </div>\`); } </script>
</div>
</div>
<!-- Property Row 2 -->
<div class="flex items-center gap-4">
<div class="w-32 truncate font-label-md text-label-md text-on-surface">Mansion Blanca</div>
<div class="flex-1 grid grid-cols-[repeat(90,minmax(0,1fr))] gap-[1px]">
<script> for(let i=0; i<90; i++) { let intensity = Math.random(); let bgClass = 'bg-surface-container'; if(i > 30 && i < 45) bgClass = 'bg-primary'; // Block booking else if(intensity > 0.6) bgClass = 'bg-primary/80'; else if(intensity > 0.5) bgClass = 'bg-tertiary-container/60'; document.write(\`<div class="h-6 rounded-[1px] \${bgClass} hover:opacity-75 transition-opacity cursor-pointer"></div>\`); } </script>
</div>
</div>
<!-- Property Row 3 -->
<div class="flex items-center gap-4">
<div class="w-32 truncate font-label-md text-label-md text-on-surface">City Loft X</div>
<div class="flex-1 grid grid-cols-[repeat(90,minmax(0,1fr))] gap-[1px]">
<script> for(let i=0; i<90; i++) { let intensity = Math.random(); let bgClass = 'bg-surface-container'; if(i%7 === 5 || i%7 === 6) bgClass = 'bg-primary'; // Weekends booked else if(intensity > 0.8) bgClass = 'bg-primary/40'; document.write(\`<div class="h-6 rounded-[1px] \${bgClass} hover:opacity-75 transition-opacity cursor-pointer"></div>\`); } </script>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Drift Warnings & Sparklines (Row 3) -->
<div class="col-span-1 md:col-span-6 glass-card rounded-xl p-6 flex flex-col">
<div class="flex justify-between items-center mb-stack-md">
<h3 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-error">warning</span> Empty-Night Drift Warnings </h3>
<button class="font-label-sm text-label-sm text-primary hover:underline">View All</button>
</div>
<div class="space-y-4 flex-1">
<!-- Warning Item -->
<div class="p-4 rounded-lg bg-error-container/30 border border-error-container/50 hover:bg-error-container/50 transition-colors duration-200">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-md text-label-md text-on-surface">Villa Azure</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">7-day gap approaching in 14 days.</p>
</div>
<span class="px-2 py-1 bg-surface text-error rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">High Risk</span>
</div>
<div class="mt-3 flex gap-2">
<button class="px-3 py-1 bg-white text-on-surface border border-outline-variant rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors">Apply 15% Discount</button>
</div>
</div>
<!-- Warning Item -->
<div class="p-4 rounded-lg bg-surface-container border border-outline-variant/30 hover:bg-surface-container-high transition-colors duration-200">
<div class="flex justify-between items-start">
<div>
<h4 class="font-label-md text-label-md text-on-surface">City Loft X</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Mid-week slump detected (Tue-Thu).</p>
</div>
<span class="px-2 py-1 bg-surface text-tertiary rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">Moderate Risk</span>
</div>
</div>
</div>
</div>
<!-- Revenue Trend & Booking Funnel (Row 3) -->
<div class="col-span-1 md:col-span-6 glass-card rounded-xl p-6 flex flex-col">
<div class="flex justify-between items-center mb-stack-md">
<h3 class="font-headline-sm text-headline-sm text-on-surface">Revenue Trajectory</h3>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="font-label-sm text-label-sm text-secondary">Actual</span>
<span class="w-3 h-3 rounded-full bg-tertiary--dim"></span>
<span class="font-label-sm text-label-sm text-secondary">Projected</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-end relative h-48 border-b border-l border-outline-variant/50 pl-4 pb-4">
<!-- Abstract SVG Chart to maintain clean code and brand style -->
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<!-- Projected Line -->
<path d="M0,40 Q20,35 40,20 T80,15 T100,5" fill="none" stroke="#e6c185" stroke-dasharray="4 2" stroke-width="1.5"></path>
<!-- Actual Line -->
<path class="sparkline-path" d="M0,40 Q20,38 40,25 T70,10" fill="none" stroke="#9a442d" stroke-width="2.5"></path>
<!-- Data Points -->
<circle class="hover:r-[2.5px] transition-all cursor-pointer" cx="40" cy="25" fill="#9a442d" r="1.5"></circle>
<circle class="hover:r-[2.5px] transition-all cursor-pointer" cx="70" cy="10" fill="#9a442d" r="1.5"></circle>
</svg>
<!-- Y-Axis Labels -->
<div class="absolute left-0 top-0 h-full flex flex-col justify-between -ml-8 text-[10px] text-secondary font-label-sm">
<span>€50k</span>
<span>€25k</span>
<span>€0</span>
</div>
</div>
<div class="mt-4 grid grid-cols-3 gap-2 text-center">
<div class="p-2 rounded bg-surface-container-low">
<p class="font-label-sm text-label-sm text-secondary uppercase">Views</p>
<p class="font-headline-sm text-headline-sm text-on-surface">12.4k</p>
</div>
<div class="p-2 rounded bg-surface-container-low">
<p class="font-label-sm text-label-sm text-secondary uppercase">Inquiries</p>
<p class="font-headline-sm text-headline-sm text-on-surface">842</p>
</div>
<div class="p-2 rounded bg-surface-container-low border-b-2 border-primary">
<p class="font-label-sm text-label-sm text-secondary uppercase">Bookings</p>
<p class="font-headline-sm text-headline-sm text-primary">156</p>
</div>
</div>
</div>
</div>
<!-- Footer Spacer -->
<div class="h-12"></div>
</div></div>`;

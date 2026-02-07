(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const x=24,M=130,j={toronto:{medianIncome:99e3,medianHomePrice:1029600,currency:"CAD",ownershipYear:2025,rentYear:2025,incomeType:"Median household income",taxBasis:"Pre-tax",ownershipSource:"Demographia International Housing Affordability (2025)",rentSource:"National Bank of Canada Q3 2025",desc:"The Trap of Good Intentions",burdenLabel:"Ownership burden",burdenValue:"81% of household income",narrative:"The ambition tax: where hustle is survival, not aspiration. Ownership becomes a math problem first, a life decision second.",image:{src:"./toronto.png",alt:"CN Tower Toronto skyline black and white"}},vancouver:{medianIncome:92e3,medianHomePrice:1242e3,currency:"CAD",ownershipYear:2025,rentYear:2025,incomeType:"Median household income",taxBasis:"Pre-tax",ownershipSource:"Demographia International Housing Affordability (2025)",rentSource:"Demographia International Housing Affordability (2025)",desc:"Immobility by Design",burdenLabel:"Affordability pressure",burdenValue:"13.5x median income",narrative:"The most beautiful trap: affordability drifts so far from wages that mobility becomes inheritance-dependent.",image:{src:"./vancouver.png",alt:"Lions Gate Bridge Vancouver black and white"}},london:{medianIncome:45e3,medianHomePrice:396e3,currency:"GBP",ownershipYear:2025,rentYear:2024,incomeType:"Median household income",taxBasis:"Pre-tax",ownershipSource:"Demographia International Housing Affordability (2025)",rentSource:"GLA/City Hall Investigation 2024",desc:"The Feudal Rental Market",burdenLabel:"Housing burden (low-income young)",burdenValue:"Up to 77% of earnings",narrative:"Feudalism reinvented: rent absorbs upward mobility while ownership keeps moving out of reach.",image:{src:"./london.png",alt:"St Pauls Cathedral London skyline black and white"}},nyc:{medianIncome:8e4,medianHomePrice:616e3,currency:"USD",ownershipYear:2025,rentYear:2023,incomeType:"Median household income",taxBasis:"Pre-tax",ownershipSource:"Demographia International Housing Affordability (2025)",rentSource:"NYC Comptroller 2023",desc:"The Velocity Machine",burdenLabel:"Rent burdened households",burdenValue:"53%",narrative:"Velocity over everything. High rent burden persists, but the social story still calls this opportunity.",image:{src:"./nyc.png",alt:"Empire State Building NYC skyline black and white"}}},A={nyc:"New York City"},v=e=>A[e]||e.charAt(0).toUpperCase()+e.slice(1),I=(e,a)=>{if(a==="CAD"||a==="USD"){const i=new Intl.NumberFormat("en",{notation:"compact",compactDisplay:"short",maximumFractionDigits:1}).format(e);return`${a} ${i}`}return new Intl.NumberFormat("en",{style:"currency",currency:a,notation:"compact",compactDisplay:"short",maximumFractionDigits:1}).format(e)},S=e=>{const a=Object.entries(e).map(([t,r])=>{const o=r.medianHomePrice/r.medianIncome;return[t,{...r,ratio:o}]}),i=Object.fromEntries(a),s=Math.max(...a.map(([,t])=>t.medianHomePrice));return{computed:i,maxValue:s}},$=(e,a)=>{if(!a||e<=0)return`${x}px`;const i=x+e/a*(M-x);return`${Math.round(i)}px`},D=e=>{const{currentCity:a}=e,{computed:i}=S(e.cityData);if(!i[a])return"";const s=Object.keys(i).map(r=>{const o=r===a;return`
        <button
          onclick="selectCity('${r}')"
          class="w-full text-left px-4 py-4 border-b border-surveillance/10 flex justify-between items-center group transition-all hover:bg-surveillance/5 ${o?"bg-surveillance/5 border-l-4 border-l-rust pl-3":"pl-4"}"
        >
          <span class="font-mono text-sm uppercase tracking-widest ${o?"text-rust font-bold":"text-surveillance/70"}">${v(r)}</span>
          ${o?'<span class="material-symbols-outlined text-sm text-rust">arrow_right</span>':""}
        </button>`}).join(""),t=i[a];return`
    <section class="max-w-7xl mx-auto px-6 pt-8 pb-8 lg:pt-12 lg:pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-surveillance/20 bg-white shadow-sm">

        <div class="lg:col-span-4 border-r border-surveillance/20 flex flex-col">
          <div class="p-6 border-b border-surveillance/20 bg-blueprint">
            <span class="font-mono text-[10px] uppercase text-surveillance/60 mb-1 block">Select Jurisdiction</span>
            <h3 class="font-display font-bold text-2xl text-surveillance">The Markets</h3>
          </div>

          <div class="flex-grow flex flex-col">
            ${s}
          </div>

          <div class="p-8 mt-auto bg-cream/30">
             <div class="font-mono text-[10px] uppercase text-rust mb-2 tracking-widest">System Note</div>
             <p class="font-body text-lg italic leading-relaxed text-surveillance/80" id="city-narrative"></p>
          </div>
        </div>

        <div class="lg:col-span-8 relative min-h-[500px] flex flex-col">

          <div class="absolute top-0 left-0 w-full z-20 flex justify-between items-start p-6 pointer-events-none">
            <div class="bg-white/90 backdrop-blur border border-surveillance/20 px-4 py-2 shadow-sm">
              <span class="font-mono text-[10px] uppercase text-surveillance/50 block mb-1">Status</span>
              <span class="font-display font-bold text-xl text-surveillance uppercase" id="city-title">${v(a)}</span>
              <span class="font-mono text-xs text-rust uppercase tracking-widest block mt-1" id="city-desc"></span>
            </div>
            <div class="bg-surveillance text-cream px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-md">
              <span id="stat-burden">${t.burdenLabel}: ${t.burdenValue}</span>
            </div>
          </div>

          <div class="relative flex-grow bg-surveillance overflow-hidden group">
            <div class="absolute inset-0 bg-blueprint opacity-20 z-10 mix-blend-overlay"></div>
            <div class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none border-[20px] border-white/0">
               <div class="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/50"></div>
               <div class="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/50"></div>
               <div class="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/50"></div>
               <div class="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/50"></div>
            </div>
            <img id="city-img" src="" class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale contrast-125 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-40">
          </div>

          <div class="bg-white border-t border-surveillance/20 p-8 pb-4 md:p-10 md:pb-5 lg:p-12 lg:pb-6 min-h-[220px] mt-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-end relative z-20">

            <div class="col-span-2 md:col-span-1">
              <span class="font-mono text-[10px] uppercase text-surveillance/60 block mb-2">Price-to-Income Ratio</span>
              <div class="flex items-baseline gap-2">
                 <span class="font-display font-bold text-6xl text-rust" id="ratio-value">${t.ratio.toFixed(1)}</span>
                 <span class="font-mono text-sm text-surveillance/50">x</span>
              </div>
            </div>

            <figure
              class="col-span-2 flex items-end gap-12 h-32 pb-2"
              role="img"
              aria-labelledby="affordability-graph-title"
              aria-describedby="city-graph-description"
              id="affordability-graph"
            >
              <span id="affordability-graph-title" class="sr-only">Housing affordability comparison</span>
               <div class="flex flex-col items-center gap-2 group w-1/2">
                  <div class="w-full relative h-[140px] flex items-end">
                    <div class="w-full bg-surveillance/20 hover:bg-surveillance/30 transition-all duration-500 relative" id="bar-income" style="height: ${x}px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-surveillance shadow-sm" id="income-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Median Income</span>
               </div>

               <div class="flex flex-col items-center gap-2 group w-1/2">
                   <div class="w-full relative h-[140px] flex items-end">
                    <div class="w-full bg-rust hover:bg-rust/90 transition-all duration-500 relative" id="bar-cost" style="height: ${x}px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-rust shadow-sm" id="cost-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Median Home Price</span>
               </div>

               <figcaption id="city-graph-description" class="sr-only" aria-live="polite"></figcaption>
            </figure>

            <p class="col-span-2 md:col-span-3 font-mono text-[10px] uppercase text-surveillance/50 tracking-wider" id="city-metadata"></p>
            <p class="col-span-2 md:col-span-3 font-mono text-[10px] uppercase text-surveillance/40 tracking-wider" id="city-definition"></p>
          </div>
        </div>
      </div>

      <p class="mt-3 font-mono text-[10px] text-surveillance/35 tracking-wide lowercase" id="city-sources"></p>

      <div class="flex justify-between items-center mt-8">
        <span class="font-mono text-xs text-surveillance/40 uppercase">Fig 02.1 — Housing Affordability (Price-to-Income)</span>
        <button onclick="navigateTo('machines')" class="text-rust font-bold flex items-center gap-2">Next: The Machines <span class="material-symbols-outlined">arrow_forward</span></button>
      </div>
    </section>
  `},H=e=>{const{computed:a,maxValue:i}=S(e.cityData),s=a[e.currentCity];if(!s)return;const t=(P,L)=>{const T=document.getElementById(P);T&&(T.innerText=L)},r=v(e.currentCity),o=I(s.medianIncome,s.currency),l=I(s.medianHomePrice,s.currency),p=s.ratio.toFixed(1);t("city-narrative",s.narrative),t("city-title",r),t("city-desc",s.desc),t("stat-burden",`${s.burdenLabel}: ${s.burdenValue}`),t("ratio-value",p),t("income-value",o),t("cost-value",l),t("city-metadata",`Inputs: ${s.incomeType} (${s.taxBasis}), ${s.rentYear}. Median home price, ${s.ownershipYear}.`),t("city-definition","Definition: price-to-income = median home price divided by median annual household income."),t("city-sources",`sources: ownership - ${s.ownershipSource} (${s.ownershipYear}); rent - ${s.rentSource} (${s.rentYear}).`.toLowerCase());const u=`${r}: median income ${o}, median home price ${l}, price-to-income ratio ${p} to 1.`,g=document.getElementById("city-graph-description");g&&(g.innerText=u);const y=document.getElementById("affordability-graph");y&&y.setAttribute("aria-label",u);const f=document.getElementById("city-img");f&&(f.src=s.image.src,f.alt=s.image.alt);const w=document.getElementById("bar-income"),k=document.getElementById("bar-cost");requestAnimationFrame(()=>{w&&(w.style.height=$(s.medianIncome,i)),k&&(k.style.height=$(s.medianHomePrice,i))})},d=(e,a,i,s)=>`
      <header class="bg-cream pt-12 pb-12 px-6 border-b border-surveillance/10 relative">
          <div class="max-w-7xl mx-auto relative z-10"><span class="font-mono text-rust text-sm uppercase tracking-widest mb-2 block animate-fade-in">Chapter ${e}</span><h2 class="font-display font-bold text-5xl md:text-6xl text-surveillance mb-4 pb-px animate-slide-up">${a}</h2><p class="font-body text-xl md:text-2xl text-surveillance/60 max-w-2xl pb-px animate-slide-up">${i}</p></div>
      </header>
  `,c=(e,a,i,s,t)=>`
      <div onclick="navigateTo('${s}')" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${t}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${e}</span><h3 class="font-display font-bold text-2xl mb-4">${a}</h3><p class="font-body text-lg opacity-70">${i}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `,m=(e,a,i,s,t)=>`
      <div onclick="window.location.href='archetypes/${s}.html'" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${t}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${e}</span><h3 class="font-display font-bold text-2xl mb-4">${a}</h3><p class="font-body text-lg opacity-70">${i}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `,B=()=>`
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-blueprint">
          <div class="absolute inset-0 opacity-10 pointer-events-none">
               <!-- Placeholder for abstract architectural grid wireframe distortion panopticon style minimalist cream background blue lines -->
          </div>
          <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <div class="mb-6 inline-block animate-fade-in">
                  <span class="font-mono text-rust uppercase tracking-[0.2em] text-sm border border-rust px-3 py-1">Research Document 2026</span>
              </div>
              <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tighter leading-[0.9] text-surveillance animate-slide-up">THE ARCHITECTURE<br>OF AMBITION</h1>
              <p class="font-body text-xl md:text-2xl text-surveillance/70 max-w-2xl mx-auto mb-12 animate-slide-up" style="animation-delay: 0.2s;">How career became identity, why it's breaking us, and the structural flaws in the "rational" pursuit of success.</p>
              <div class="flex flex-col items-center">
                  <button onclick="navigateTo('system')" class="px-8 py-4 bg-surveillance text-cream font-mono uppercase tracking-widest hover:bg-rust transition-colors animate-slide-up mx-auto" style="animation-delay: 0.4s;">Enter System</button>

                  <div class="mt-6 animate-slide-up" style="animation-delay: 0.6s">
                      <button onclick="document.getElementById('sections').scrollIntoView({behavior: 'smooth'})" aria-label="Scroll to sections" class="flex flex-col items-center gap-1 text-surveillance/70 hover:text-surveillance transition-colors w-max mx-auto">
                          <span class="material-symbols-outlined text-3xl">expand_more</span>
                          <span class="font-mono text-xs uppercase tracking-widest">Or review the sections below</span>
                      </button>
                  </div>
              </div>
          </div>
      </section>
      <section id="sections" class="py-24 px-6 max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${c("01","The System","The Tyranny of Merit","system","grid_view")}
              ${c("02","The Cities","Toronto, London, NYC","cities","location_city")}
              ${c("03","The Machines","LinkedIn Panopticon","machines","devices")}
              ${c("04","The Casualties","Burnout & Anxiety","casualties","psychology")}
              ${c("05","The Exits","Alternative Frameworks","exits","door_open")}
              ${c("06","Resources","Practical Tools","resources","library_books")}
          </div>
      </section>
  `,V=()=>`
      ${d("01","The System","The theological intensity of modern work.")}
      <article class="max-w-3xl mx-auto px-6 py-16">
          <p class="font-body text-2xl leading-relaxed text-surveillance/80 mb-12 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">We have replaced the worship of gods with the worship of potential. Derek Thompson calls it "Workism"—the belief that work is not only necessary to economic production, but also the centerpiece of one’s identity.</p>
          <div class="my-12 border-l-4 border-rust pl-8 py-2"><blockquote class="font-display font-bold text-2xl text-surveillance italic">"The achievement-subject exploits itself. It means that exploitation is possible even without domination."</blockquote><cite class="block mt-4 font-mono text-sm text-rust uppercase">— Byung-Chul Han</cite></div>
          <h3 class="font-display font-bold text-3xl mb-6">The Tyranny of Merit</h3>
          <p class="font-body text-lg leading-relaxed mb-8">Michael Sandel argues that the rhetoric of "rising" creates a hubristic meritocracy. If you believe success is your own doing, failure must be your own fault.</p>
          <div class="bg-surveillance text-cream p-8 my-12 relative"><h4 class="font-mono text-rust uppercase tracking-widest mb-4">Diagnostic</h4><ul class="space-y-4 font-body text-lg"><li>Do you introduce yourself by job title?</li><li>Do you feel guilty when unproductive?</li><li>Is work your primary community?</li></ul></div>
          <div class="flex justify-between items-center mt-16 pt-8 border-t border-surveillance/10"><button onclick="navigateTo('home')" class="text-surveillance/50 hover:text-surveillance flex items-center gap-2"><span class="material-symbols-outlined">arrow_back</span> Home</button><button onclick="navigateTo('cities')" class="text-rust font-bold hover:text-surveillance flex items-center gap-2">Next: The Cities <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </article>
  `,F=e=>`
      ${d("02","The Cities","Where ambition goes to pay rent.")}
      ${D(e)}
  `,O=()=>`
      ${d("03","The Machines","Engines of Envy.")}
      <section class="max-w-7xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div class="lg:col-span-2">
                  <div class="flex items-center gap-3 mb-4">
                      <span class="material-symbols-outlined text-rust">visibility</span>
                      <h3 class="font-display font-bold text-3xl">The Panopticon</h3>
                  </div>
                  <p class="font-body text-lg mb-6 text-surveillance/80">LinkedIn is a surveillance mechanism where we police success. Frequent users have <strong class="text-rust">2.1x higher odds of depression</strong>.</p>
                  <div class="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-surveillance/50 border-y border-surveillance/10 py-3 mb-4">
                      <span>Trap Index</span>
                      <span>Tap to expand</span>
                  </div>
                  <ol class="space-y-3">
                      <div class="flex items-center gap-2 mb-4 mt-6">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Identity & Structural</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="future-audience" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('future-audience')">
                              <span class="font-mono text-xs text-rust">01</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">The Future Audience</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Every action is treated as future recruiter content; the present is performance and authenticity gets deferred to a future viewer.
                          </div>
                      </li>
                      <div class="flex items-center gap-2 mb-4 mt-5">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Performative & Linguistic</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="success-theater" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('success-theater')">
                              <span class="font-mono text-xs text-rust">02</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Success Theater</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Career platforms become highlight reels; curated wins signal perfectionism and make real life look inadequate.
                          </div>
                      </li>
                      <li data-trap="performative-vulnerability" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('performative-vulnerability')">
                              <span class="font-mono text-xs text-rust">03</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Performative Vulnerability</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Failures and layoffs are repackaged as brand assets to signal resilience, excluding losses you cannot monetize.
                          </div>
                      </li>
                      <div class="flex items-center gap-2 mb-4 mt-5">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Comparison & Envy</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="infinite-comparison" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('infinite-comparison')">
                              <span class="font-mono text-xs text-rust">04</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Infinite Comparison</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Your peers are now an algorithmic feed of global outliers; ordinary progress starts to feel like failure.
                          </div>
                      </li>
                      <li data-trap="extremity-bias" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('extremity-bias')">
                              <span class="font-mono text-xs text-rust">05</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Extremity Bias</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Platforms disproportionately surface unicorn founders, creating a skewed reference point and hiding average success.
                          </div>
                      </li>
                      <div class="flex items-center gap-2 mb-4 mt-5">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Psychological Cost</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="work-esteem" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('work-esteem')">
                              <span class="font-mono text-xs text-rust">06</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Work-Conditional Esteem</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Your sense of worth becomes directly coupled to career validation; identity is outsourced to engagement metrics.
                          </div>
                      </li>
                      <li data-trap="veblen-inversion" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('veblen-inversion')">
                              <span class="font-mono text-xs text-rust">07</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Veblen Inversion</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Exhaustion becomes status signaling; burnout is reframed as proof of dedication and hustle.
                          </div>
                      </li>
                      <li data-trap="defensive-ambition" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('defensive-ambition')">
                              <span class="font-mono text-xs text-rust">08</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Defensive Ambition</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Effort is driven by fear of dropping into precarity rather than desire to ascend.
                          </div>
                      </li>
                  </ol>
              </div>
              
              <!-- LinkedIn Feed Container -->
              <div class="lg:col-span-3 space-y-4">
                  <div class="flex items-center gap-3 mb-6 px-1">
                      <span class="material-symbols-outlined text-3xl text-surveillance/90">visibility</span>
                      <div>
                          <p class="text-xs uppercase tracking-[0.3em] text-surveillance/60">Surveillance feed</p>
                      </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <!-- Post 1 - Future Audience -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  AT
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Alex Thompson</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">1st</span>
                                  </div>
                                  <p class="text-xs text-gray-600">Software Engineer @ DataCorp</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Quick wins from this week:</p>
                              <p class="mt-2">✅ Led standup (showing leadership!)</p>
                              <p>✅ Mentored junior dev (giving back!)</p>
                              <p>✅ Fixed critical bug (problem solver!)</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('future-audience', true)">Always documenting the journey.</span> You never know who's watching! 👀</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 2 - Success Theater -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  JM
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Jessica Martinez</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">2nd</span>
                                  </div>
                                  <p class="text-xs text-gray-600">Product Manager @ TechCorp</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Excited to share that our team just shipped v2.0! 🚀</p>
                              <p class="mt-2">6 months of hard work, countless late nights, but we made it happen. <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('success-theater', true)">Grateful for this amazing journey.</span></p>
                              <p class="mt-2">Onward and upward! 💪</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 3 - Performative Vulnerability -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  SC
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Sarah Chen</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">3rd+</span>
                                  </div>
                                  <p class="text-xs text-gray-600">Marketing Director @ FinTech Inc</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Today I was laid off. Here's what I learned 🧵</p>
                              <p class="mt-2">1. <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('performative-vulnerability', true)">Every ending is a new beginning</span></p>
                              <p>2. Your network is your net worth</p>
                              <p>3. Resilience is built in moments like these</p>
                              <p class="mt-2">I'm excited about what's next. Open to opportunities in marketing leadership!</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 4 - Infinite Comparison -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  LP
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Lisa Park</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">3rd+</span>
                                  </div>
                                  <p class="text-xs text-gray-600">UX Designer @ DesignStudio</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Seeing all these amazing career updates in my feed today.</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('infinite-comparison', true)">Everyone's crushing it while I'm still working on the same project.</span> Time to level up!</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 5 - Extremity Bias -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  RK
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Ryan Kumar</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">1st</span>
                                  </div>
                                  <p class="text-xs text-gray-600">CEO & Founder @ StartupAI | Forbes 30U30</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Thrilled to announce we've closed our $40M Series B! 🎉</p>
                              <p class="mt-2">From dorm room idea to 200+ employees in 18 months. <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('extremity-bias', true)">The journey is just beginning.</span></p>
                              <p class="mt-2">Thank you to our incredible team and investors who believed in the vision.</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 6 - Work-Conditional Esteem -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  DW
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">David Wang</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">2nd</span>
                                  </div>
                                  <p class="text-xs text-gray-600">Sales Manager @ Enterprise Solutions</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Hit 150% of quota this month! 📈</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('work-esteem', true)">Finally feeling like I'm adding value.</span> This week has been rough but numbers don't lie.</p>
                              <p class="mt-2">Engagement = validation 💯</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 7 - Veblen Inversion -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  MB
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Michael Brooks</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">2nd</span>
                                  </div>
                                  <p class="text-xs text-gray-600">VP Engineering @ CloudScale</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Sunday grind hits different ☕💻</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('veblen-inversion', true)">No rest for those building the future.</span> Just pushed 3 PRs before breakfast.</p>
                              <p class="mt-2">#hustleculture #neverstop</p>
                          </div>
                      </div>
                  </div>

                  <!-- Post 8 - Defensive Ambition -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div class="p-4">
                          <div class="flex items-start gap-3 mb-3">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                  NK
                              </div>
                              <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2">
                                      <h4 class="font-semibold text-gray-900 text-sm">Nina Kapoor</h4>
                                      <span class="text-gray-400">•</span>
                                      <span class="text-gray-500 text-xs">1st</span>
                                  </div>
                                  <p class="text-xs text-gray-600">Business Analyst @ Consulting Firm</p>
                                  <p class="text-xs text-gray-500"></p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Just completed my 5th certification this year 🎓</p>
                              <p class="mt-2">AWS ✓ Scrum Master ✓ Six Sigma ✓ PMP ✓ Data Analytics ✓</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('defensive-ambition', true)">In this market, you can never be too prepared.</span> Already enrolled in the next one!</p>
                          </div>
                      </div>
                  </div>
                  </div>

                  <p class="mt-8 text-xs text-center text-gray-500 font-mono uppercase tracking-wide">Click highlighted phrases to explore psychological traps</p>
              </div>
          </div>
          <div class="flex justify-end mt-16"><button onclick="navigateTo('casualties')" class="text-rust font-bold flex items-center gap-2">Next: The Casualties <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </section>
  `,R=()=>d("04","The Casualties","Psychological Archetypes")+`
          <section class="py-16 px-6 max-w-6xl mx-auto">
              <div class="mb-16 max-w-3xl mx-auto">
                  <p class="font-body text-xl leading-relaxed text-surveillance/70">
                      The economic pressures of the City (Chapter 02) force the self into specific shapes for survival. These are not personality types; they are defense mechanisms. Each archetype represents a different adaptation to the same systemic pressure: the demand to be perpetually useful, perpetually productive, perpetually visible.
                  </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${m("01","The Watchman","Vigilant defense against uncertainty","watchman","visibility")}
                  ${m("02","The Visible","Performance as identity","visible","person")}
                  ${m("03","The Faithful","Work as calling","faithful","church")}
                  ${m("04","The Departed","Quiet withdrawal","departed","person_off")}
                  ${m("05","The Architect","Strategic detachment","architect","architecture")}
              </div>
              <div class="flex justify-end mt-16">
                  <button onclick="navigateTo('exits')" class="text-rust font-bold flex items-center gap-2">
                      Next: The Exits <span class="material-symbols-outlined">arrow_forward</span>
                  </button>
              </div>
          </section>
      `,h=(e,a,i,s,t,r,o)=>`
    <div class="bg-white border border-surveillance/20 p-8 hover:shadow-md transition-all relative overflow-hidden group flex flex-col h-full" data-trap="${e}">
       <div class="flex items-start justify-between mb-6">
         <div>
           <span class="font-mono text-xs text-rust uppercase tracking-widest mb-2 block border-l-2 border-rust pl-2">${s}</span>
           <h3 class="font-display font-bold text-2xl text-surveillance leading-none">${i}</h3>
         </div>
         <span class="material-symbols-outlined text-surveillance/10 text-5xl group-hover:text-rust/10 transition-colors">${a}</span>
       </div>

       <div class="mb-6">
          <span class="font-mono text-[10px] uppercase text-surveillance/50 tracking-widest">Archetype</span>
          <div class="font-body font-bold text-surveillance text-lg">${t}</div>
       </div>

       <p class="font-body text-lg text-surveillance/80 mb-8 flex-grow">${r}</p>

       <div class="mt-auto pt-6 border-t border-surveillance/10">
         <button onclick="openTrap('${e}')" class="w-full flex items-center justify-between group/btn">
            <span class="font-mono text-xs uppercase tracking-widest text-surveillance/60 group-hover/btn:text-rust transition-colors">Analyze Risks</span>
            <span data-trap-icon class="material-symbols-outlined text-sm text-surveillance/60 transition-transform duration-300">expand_more</span>
         </button>
       </div>

       <div data-trap-detail class="hidden mt-4 bg-surveillance/5 -mx-8 -mb-8 p-8 border-t border-surveillance/10">
          ${o}
       </div>
    </div>
`,N=()=>`
      ${d("05","The Exits","Strategies for defensive detachment.")}
      
      <section class="max-w-6xl mx-auto px-6 py-12">
          
          <div class="mb-16 max-w-3xl mx-auto text-center">
              <p class="font-body text-xl text-surveillance/80 leading-relaxed mb-6">
                  These are not ideals. These are <strong class="text-rust">containment strategies</strong>.
              </p>
              <p class="font-body text-lg text-surveillance/70">
                 In an economy where "failure" is often a rational maladaptation to a sick system, we do not seek pure freedom. We seek to manage ego depletion. Each exit below is a calculated trade-off designed to protect the self from total institutional absorption.
              </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
              
              ${h("exit-vocation","church","Identity Containment","The Theological Exit","The New Monastic",'Work is stripped of its ultimate status. By imposing a "rule of life," mobility and upside are traded for geographic and relational stability. Value is conferred by origin (Imago Dei), not utility.',`
                <div class="space-y-4">
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Hidden Tension</span>
                        <p class="text-sm opacity-80">The Protestant ghost never leaves. Faithfulness easily mutates into "sanctified overwork," where the calling becomes indistinguishable from the hustle.</p>
                    </div>
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Failure Mode</span>
                        <p class="text-sm opacity-80"><strong>Burnout reframed as sacrifice.</strong> This exit fails when obedience becomes indistinguishable from productivity.</p>
                    </div>
                </div>
                `)}

              ${h("exit-craft","handyman","Craft Loyalty","The Aristotelian Exit","The Virtuous Practitioner",'A refusal of promotions that sever the worker from the work. This strategy prioritizes the "internal goods" of a practice over the "external goods" (status, scale) of the institution.',`
                <div class="space-y-4">
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Hidden Tension</span>
                        <p class="text-sm opacity-80">Institutions require external goods to survive. The practitioner is constantly at war with the management layer that employs them.</p>
                    </div>
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Failure Mode</span>
                        <p class="text-sm opacity-80"><strong>Moral Injury.</strong> To survive, the virtuous practitioner often learns to speak the language of the institution they distrust.</p>
                    </div>
                </div>
                `)}

              ${h("exit-ego","psychology","Ego Load Reduction","The Humanistic Exit","The Strategic Deprioritizer",'Manages the ego depletion caused by the digital panopticon. The self is not a project to be optimized, but a vessel to be protected. Often misread by management as "quiet quitting."',`
                <div class="space-y-4">
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Hidden Tension</span>
                        <p class="text-sm opacity-80">Without communal anchors, this defensive detachment easily slides into narcissism or apathy.</p>
                    </div>
                    <div>
                        <span class="font-mono text-[10px] uppercase text-rust tracking-widest block mb-1">Failure Mode</span>
                        <p class="text-sm opacity-80"><strong>Optimization Loops.</strong> Without transcendence, self-actualization simply becomes another metric to optimize.</p>
                    </div>
                </div>
                `)}
          </div>

          <div class="border-t border-surveillance/20 pt-16">
            <h3 class="font-display font-bold text-3xl mb-8 text-center">The Radical Refusals</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                <div class="bg-surveillance text-cream p-8 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold">FIRE</div>
                    <h4 class="font-mono text-rust uppercase tracking-widest mb-2 text-sm">Weaponized Ambition</h4>
                    <p class="font-body opacity-90 mb-4">
                        Financial Independence, Retire Early (FIRE) is not an exit from ambition. It is ambition turned against the system that created it.
                    </p>
                    <p class="font-mono text-xs opacity-60 border-t border-cream/20 pt-4">
                        RESULT: Freedom is purchased, not discovered.
                    </p>
                </div>

                <div class="bg-rust/10 border border-rust p-8 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold">躺平</div>
                    <h4 class="font-mono text-rust uppercase tracking-widest mb-2 text-sm">Tang Ping (Lying Flat)</h4>
                    <p class="font-body text-surveillance opacity-90 mb-4">
                        Not a lifestyle choice, but a political refusal. It demonstrates what happens when hope itself is withdrawn from the labor market.
                    </p>
                    <p class="font-mono text-xs text-surveillance opacity-60 border-t border-surveillance/20 pt-4">
                        RESULT: The refusal of the game itself.
                    </p>
                </div>

            </div>
          </div>

          <div class="mt-24 text-center">
             <p class="font-mono text-xs text-surveillance/50 uppercase tracking-widest mb-4">Proof of Concept</p>
             <button onclick="navigateTo('resources')" class="px-8 py-3 bg-surveillance text-cream font-mono uppercase hover:bg-rust transition-colors shadow-lg">
                View The Architect's Tools
             </button>
          </div>
      </section>
  `,_=()=>`
      ${d("06","Resources","Tools for resistance.")}
      <section class="max-w-4xl mx-auto px-6 py-12 space-y-12">
          <div>
              <h3 class="font-display font-bold text-2xl border-b border-surveillance mb-6 pb-2">Essential Reading</h3>
              <ul class="space-y-6">
                  <li>
                      <h4 class="font-display font-bold text-lg">The Burnout Society</h4>
                      <p class="text-sm font-mono text-rust mb-2">Byung-Chul Han</p>
                      <p class="font-body text-surveillance/70">Stanford University Press. On the self-exploitation of the achievement society and how burnout is not pathological but structural.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">The Tyranny of Merit</h4>
                      <p class="text-sm font-mono text-rust mb-2">Michael J. Sandel</p>
                      <p class="font-body text-surveillance/70">Penguin Books. On how meritocratic rhetoric masks structural inequality and creates hubristic moral judgment.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">The Price of Inequality</h4>
                      <p class="text-sm font-mono text-rust mb-2">Joseph Stiglitz</p>
                      <p class="font-body text-surveillance/70">W.W. Norton & Company. On structural precarity and the economic mechanisms that force defensive adaptation.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">Scarcity</h4>
                      <p class="text-sm font-mono text-rust mb-2">Sendhil Mullainathan & Eldar Shafir</p>
                      <p class="font-body text-surveillance/70">Times Books. On scarcity trapping attention and how constant urgency makes deep work impossible.</p>
                  </li>
              </ul>
          </div>
          <div>
              <h3 class="font-display font-bold text-2xl border-b border-surveillance mb-6 pb-2">Work & Resistance</h3>
              <ul class="space-y-6">
                  <li>
                      <h4 class="font-display font-bold text-lg">Refuse, Reduce, Reclaim</h4>
                      <p class="text-sm font-mono text-rust mb-2">Jenny Odell</p>
                      <p class="font-body text-surveillance/70">Penguin Random House. On refusal as resistance and the construction of alternative values outside market logic.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">The Craftsman</h4>
                      <p class="text-sm font-mono text-rust mb-2">Richard Sennett</p>
                      <p class="font-body text-surveillance/70">Yale University Press. On skill, autonomy, and meaning in work—an alternative to optimization.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">Alone Together</h4>
                      <p class="text-sm font-mono text-rust mb-2">Sherry Turkle</p>
                      <p class="font-body text-surveillance/70">MIT Press. On identity, connection, and the difference between being seen and being known.</p>
                  </li>
                  <li>
                      <h4 class="font-display font-bold text-lg">The Presentation of Self in Everyday Life</h4>
                      <p class="text-sm font-mono text-rust mb-2">Erving Goffman</p>
                      <p class="font-body text-surveillance/70">Penguin Classics. On performance, persona, and the construction of identity through social interaction.</p>
                  </li>
              </ul>
          </div>
          <div class="bg-surveillance/5 border border-surveillance/20 p-8 rounded">
              <h3 class="font-display font-bold text-lg mb-4">In Crisis</h3>
              <p class="font-body text-surveillance/70 mb-4">If you are in acute distress or having thoughts of self-harm, please reach out:</p>
              <ul class="space-y-2 font-mono text-sm font-bold text-rust">
                  <li>🇺🇸 / 🇨🇦 National Crisis Line: 988</li>
                  <li>🇬🇧 Samaritans: 116 123</li>
                  <li>🇪🇺 Telefonseelsorge (DE): 0800 1110111 or 0800 1110222</li>
              </ul>
          </div>
      </section>
  `,n={currentView:"home",cityData:j,currentCity:"toronto"},E=new Set(["home","system","cities","machines","casualties","exits","resources"]);function Y(e){n.currentCity=e,b()}function b(){const e=document.getElementById("app"),a={home:B,system:V,cities:()=>F(n),machines:O,casualties:R,exits:N,resources:_};e.style.opacity="0",setTimeout(()=>{e.innerHTML=a[n.currentView](),n.currentView==="cities"&&H(n),e.style.opacity="1";const i={home:"0%",system:"16%",cities:"32%",machines:"48%",casualties:"64%",exits:"80%",resources:"100%"};document.getElementById("progress-bar").style.width=i[n.currentView]},300)}function z(e){E.has(e)&&(n.currentView=e,e==="home"?history.replaceState(null,"",window.location.pathname+window.location.search):window.location.hash=e,b(),window.scrollTo(0,0))}function W(){const e=document.getElementById("mobile-menu");e.classList.toggle("hidden"),e.classList.toggle("flex")}function q(e,a=!1){const i=document.querySelector(`[data-trap="${e}"]`);if(!i)return;const s=i.querySelector("[data-trap-detail]"),t=i.querySelector("[data-trap-icon]"),r=s&&!s.classList.contains("hidden");r&&a||(document.querySelectorAll("[data-trap]").forEach(l=>{l.classList.remove("trap-active","bg-rust/5");const p=l.querySelector("[data-trap-detail]"),u=l.querySelector("[data-trap-icon]");p&&p.classList.add("hidden"),u&&u.classList.remove("rotate-180")}),r)||(i.classList.add("trap-active"),s&&s.classList.remove("hidden"),t&&t.classList.add("rotate-180"),window.innerWidth<768&&setTimeout(()=>{i.scrollIntoView({behavior:"smooth",block:"nearest"})},100))}Object.assign(window,{navigateTo:z,toggleMobileMenu:W,openTrap:q,selectCity:Y});document.addEventListener("DOMContentLoaded",()=>{C(),b(),window.addEventListener("hashchange",()=>{C(),b()}),window.addEventListener("scroll",()=>{const e=document.getElementById("navbar");window.scrollY>50?(e.classList.add("shadow-md","py-2"),e.classList.remove("py-4")):(e.classList.remove("shadow-md","py-2"),e.classList.add("py-4"))})});function C(){const e=window.location.hash.replace("#","");e&&E.has(e)&&(n.currentView=e)}

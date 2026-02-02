(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const b={toronto:{ratio:10.7,income:99e3,desc:"The Trap of Good Intentions",stats:"77% income for ownership",narrative:"The ambition tax: where hustle is survival, not aspiration. 10.7 price-to-income makes ownership mathematical.",costDisplay:"$1.07M",costBarHeight:240,image:{src:"./toronto.png",alt:"CN Tower Toronto skyline black and white"}},vancouver:{ratio:12.7,income:92e3,desc:"Immobility by Design",stats:"12.7 Price-to-Income Ratio",narrative:"The most beautiful trap: a 12.7 price-to-income ratio means only inheritance buys shelter.",costDisplay:"$1.27M",costBarHeight:254,image:{src:"./vancouver.png",alt:"Lions Gate Bridge Vancouver black and white"}},london:{ratio:9.8,income:45e3,desc:"The Feudal Rental Market",stats:"52% income on rent",narrative:"Feudalism reinvented. 9.8 price-to-income and 52% of pay on rent feels “normal.”",costDisplay:"£221K",costBarHeight:190,image:{src:"./london.png",alt:"St Pauls Cathedral London skyline black and white"}},nyc:{ratio:7.5,income:8e4,desc:"The Velocity Machine",stats:"53% Rent Burdened",narrative:"Velocity over everything. 53% rent burden, yet the story says you are lucky.",costDisplay:"$600K",costBarHeight:200,image:{src:"./nyc.png",alt:"Empire State Building NYC skyline black and white"}}},h=e=>{const{currentCity:a,cityData:s}=e;return s[a]?`
        <section class="max-w-6xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h3 class="font-display font-bold text-3xl mb-6">Select Pressure Point</h3>
                    <div class="flex flex-wrap gap-4 mb-8">${Object.keys(s).map(t=>`<button onclick="selectCity('${t}')" class="px-6 py-3 border border-surveillance font-mono text-sm uppercase transition-all ${t===a?"bg-surveillance text-cream":"hover:bg-surveillance/10"}">${t}</button>`).join("")}</div>
                    <div id="city-details" class="bg-white p-8 border border-surveillance/10 shadow-sm animate-fade-in">
                        <h4 class="font-display font-bold text-4xl mb-2 text-surveillance uppercase">${a}</h4>
                        <p class="font-mono text-rust text-sm uppercase tracking-widest mb-6">${s[a].desc}</p>
                        <p class="font-body text-lg" id="city-narrative"></p>
                    </div>
                </div>
                <div class="bg-blueprint p-6 border border-surveillance/20 relative min-h-[400px] flex flex-col justify-end">
                    <img id="city-img" src="" class="absolute inset-0 w-full h-full object-cover opacity-30 img-blueprint mix-blend-multiply">
                    <div class="relative z-10 w-full bg-cream/90 p-6 backdrop-blur-sm border border-surveillance/10">
                        <h5 class="font-mono text-xs uppercase mb-6 text-center font-bold tracking-widest">Economic Viability</h5>
                        <div class="flex justify-center items-end gap-12 mb-6" style="height: 200px">
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 bg-surveillance transition-all duration-500" id="bar-income" style="height: 120px"></div>
                                <div class="text-center">
                                    <span class="text-sm font-mono font-bold text-surveillance mb-1 block" id="income-value">$99K</span>
                                    <span class="text-xs font-mono text-surveillance/60 uppercase">Income</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 bg-rust transition-all duration-500" id="bar-cost" style="height: 180px"></div>
                                <div class="text-center">
                                    <span class="text-sm font-mono font-bold text-rust mb-1 block" id="cost-value">$1.07M</span>
                                    <span class="text-xs font-mono text-surveillance/60 uppercase">Cost</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-4 border-t border-surveillance/10"><span class="block font-mono text-xs text-surveillance/50 uppercase mb-2">Key Stat</span><span class="block font-display font-bold text-xl text-rust" id="stat-main">${s[a].stats}</span></div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-8"><button onclick="navigateTo('machines')" class="text-rust font-bold flex items-center gap-2">Next: The Machines <span class="material-symbols-outlined">arrow_forward</span></button></div>
        </section>
    `:""},v=e=>{const a=document.getElementById("city-narrative"),s=document.getElementById("city-img"),r=b[e.currentCity];if(!r)return;a&&(a.innerText=r.narrative),s&&(s.src=r.image.src,s.alt=r.image.alt);const t=document.getElementById("income-value"),n=document.getElementById("cost-value"),o=document.getElementById("bar-income"),d=document.getElementById("bar-cost");t&&(t.innerText="$"+(r.income/1e3).toFixed(0)+"K"),o&&(o.style.height="120px"),n&&(n.innerText=r.costDisplay),d&&(d.style.height=r.costBarHeight+"px")},i={currentView:"home",cityData:b,currentCity:"toronto"},f=new Set(["home","system","cities","machines","casualties","exits","resources"]),g=()=>`
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
              <button onclick="navigateTo('system')" class="px-8 py-4 bg-surveillance text-cream font-mono uppercase tracking-widest hover:bg-rust transition-colors animate-slide-up" style="animation-delay: 0.4s;">Enter System</button>
          </div>
      </section>
      <section class="py-24 px-6 max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${l("01","The System","The Tyranny of Merit","system","grid_view")}
              ${l("02","The Cities","Toronto, London, NYC","cities","location_city")}
              ${l("03","The Machines","LinkedIn Panopticon","machines","devices")}
              ${l("04","The Casualties","Burnout & Anxiety","casualties","psychology")}
              ${l("05","The Exits","Alternative Frameworks","exits","door_open")}
              ${l("06","Resources","Practical Tools","resources","library_books")}
          </div>
      </section>
  `,l=(e,a,s,r,t)=>`
      <div onclick="navigateTo('${r}')" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${t}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${e}</span><h3 class="font-display font-bold text-2xl mb-4">${a}</h3><p class="font-body text-lg opacity-70">${s}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `,p=(e,a,s,r,t)=>`
      <div onclick="window.location.href='archetypes/${r}.html'" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${t}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${e}</span><h3 class="font-display font-bold text-2xl mb-4">${a}</h3><p class="font-body text-lg opacity-70">${s}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `,y=()=>`
      ${c("01","The System","The theological intensity of modern work.")}
      <article class="max-w-3xl mx-auto px-6 py-16">
          <p class="font-body text-2xl leading-relaxed text-surveillance/80 mb-12 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">We have replaced the worship of gods with the worship of potential. Derek Thompson calls it "Workism"—the belief that work is not only necessary to economic production, but also the centerpiece of one’s identity.</p>
          <div class="my-12 border-l-4 border-rust pl-8 py-2"><blockquote class="font-display font-bold text-2xl text-surveillance italic">"The achievement-subject exploits itself. It means that exploitation is possible even without domination."</blockquote><cite class="block mt-4 font-mono text-sm text-rust uppercase">— Byung-Chul Han</cite></div>
          <h3 class="font-display font-bold text-3xl mb-6">The Tyranny of Merit</h3>
          <p class="font-body text-lg leading-relaxed mb-8">Michael Sandel argues that the rhetoric of "rising" creates a hubristic meritocracy. If you believe success is your own doing, failure must be your own fault.</p>
          <div class="bg-surveillance text-cream p-8 my-12 relative"><h4 class="font-mono text-rust uppercase tracking-widest mb-4">Diagnostic</h4><ul class="space-y-4 font-body text-lg"><li>Do you introduce yourself by job title?</li><li>Do you feel guilty when unproductive?</li><li>Is work your primary community?</li></ul></div>
          <div class="flex justify-between items-center mt-16 pt-8 border-t border-surveillance/10"><button onclick="navigateTo('home')" class="text-surveillance/50 hover:text-surveillance flex items-center gap-2"><span class="material-symbols-outlined">arrow_back</span> Home</button><button onclick="navigateTo('cities')" class="text-rust font-bold hover:text-surveillance flex items-center gap-2">Next: The Cities <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </article>
  `,w=()=>`
      ${c("02","The Cities","Where ambition goes to pay rent.")}
      ${h(i)}
  `,k=()=>`
      ${c("03","The Machines","Engines of Envy.")}
      <section class="max-w-5xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div class="md:sticky md:top-24 self-start">
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
                      <div class="flex items-center gap-2 mb-3 mt-2">
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
                      <div class="flex items-center gap-2 mb-3 mt-6">
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
                      <div class="flex items-center gap-2 mb-3 mt-6">
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
                      <div class="flex items-center gap-2 mb-3 mt-6">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Psychological Cost</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="work-esteem" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('work-esteem')">
                              <span class="font-mono text-xs text-rust">06</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">Work-Contingent Self-Esteem</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Self-worth now updates in real time with likes and reviews, producing chronic emotional volatility.
                          </div>
                      </li>
                      <div class="flex items-center gap-2 mb-3 mt-6">
                          <span class="h-px flex-1 bg-gradient-to-r from-rust/20 to-transparent"></span>
                          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-rust/60 px-2">Status & Defensive</span>
                          <span class="h-px flex-1 bg-gradient-to-l from-rust/20 to-transparent"></span>
                      </div>
                      <li data-trap="veblen-inversion" class="border border-surveillance/10 border-l-4 border-l-transparent bg-white rounded-lg transition-all hover:border-rust/40 hover:shadow-sm">
                          <button class="w-full flex items-center justify-between gap-4 p-4 text-left" onclick="openTrap('veblen-inversion')">
                              <span class="font-mono text-xs text-rust">07</span>
                              <span class="font-display font-bold text-lg text-surveillance flex-1">The Veblen Inversion</span>
                              <span class="material-symbols-outlined text-surveillance/40 transition-transform" data-trap-icon>expand_more</span>
                          </button>
                          <div class="hidden px-4 pb-4 text-sm text-surveillance/70 leading-relaxed" data-trap-detail>
                              Exhaustion becomes the new flex; lack of leisure signals scarce human capital and high demand.
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
              <div class="bg-white shadow-xl border p-6 relative">
                  <div class="flex items-center gap-3 mb-4">
                      <span class="material-symbols-outlined text-3xl text-surveillance/90">visibility</span>
                      <div>
                          <p class="text-xs uppercase tracking-[0.3em] text-surveillance/60">Surveillance feed</p>
                          <p class="text-sm font-display text-surveillance">Live sentiment</p>
                      </div>
                  </div>
                  <div class="space-y-6">
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 01</p>
                          <p>
                            Hustle culture is optimized for an audience that never sees the real cost. Post real rest instead of another seed-round win.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('future-audience')">Every move becomes marketing</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 02</p>
                          <p>
                            My feed is sticky. When I remove algorithmic dopamine, I actually ship slower, but feel sharper. Going quiet helps avoid <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('success-theater')">constant pitching</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 03</p>
                          <p>
                            It’s easy to feel small when the feed highlights the biggest wins. I try to measure progress by shipped outcomes—this month I launched a feature that improved retention by 8%.
                            Small, consistent wins beat chasing the <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('extremity-bias')">extreme stories</span>.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('infinite-comparison')">Perspective helps</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 04</p>
                          <p>
                            Burnout isn’t a badge. I took a short break to reset and returned with clearer priorities—productivity improved and meetings felt less urgent. Rest is a strategy, not a status symbol.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('veblen-inversion')">Healthy boundaries</span> beat performative exhaustion.
                          </p>
                      </div>
                  </div>
                  <div class="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-gray-400">
                      <div class="flex gap-4 text-xs font-mono">
                          <span>👍 127</span>
                          <span>💬 23</span>
                          <span>🔄 8</span>
                      </div>
                  </div>
                  <p class="mt-4 text-xs text-center text-gray-400 font-mono uppercase tracking-wide">Click highlighted phrases to expand the left list</p>
              </div>
          </div>
          <div class="flex justify-end mt-16"><button onclick="navigateTo('casualties')" class="text-rust font-bold flex items-center gap-2">Next: The Casualties <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </section>
  `,m=(e,a,s,r)=>`
      <div class="bg-white border border-surveillance/10 p-8 hover:shadow-lg transition-all group">
          <div class="h-12 w-12 bg-rust/10 text-rust flex items-center justify-center mb-6 group-hover:bg-rust group-hover:text-white transition-colors"><span class="material-symbols-outlined">${e}</span></div>
          <h3 class="font-display font-bold text-2xl mb-2">${a}</h3><span class="font-mono text-xs uppercase tracking-widest text-surveillance/50 mb-4 block">${s}</span>
          <p class="font-body text-lg">${r}</p>
      </div>
  `,T=()=>`
      ${c("05","The Exits","Doors out of the burning building.")}
      <section class="max-w-6xl mx-auto px-6 py-12">
          <div class="mb-16 max-w-3xl mx-auto bg-surveillance/5 p-8 border-l-4 border-rust">
              <p class="font-body text-lg text-surveillance/80 mb-4">
                  <strong>The Architect</strong> (Chapter 04) is the practical application of these exits. It is what happens when you deliberately construct a life where work is not identity, where productivity is bounded, where success is redefined.
              </p>
              <p class="font-body text-lg text-surveillance/80">
                  The Exits are frameworks. The Architect is proof it is possible.
              </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${m("church","Vocation","Christian Exit","Work is not a ladder, but a station to serve. Value is conferred by origin (Imago Dei), not utility.")}
              ${m("balance","Eudaimonia","Aristotelian Exit","Happiness is not a dopamine spike, but the steady practice of virtue over a complete life.")}
              ${m("self_improvement","Transcendence","Humanistic Exit","The self is not a project to be optimized, but a vessel to be emptied into something larger.")}
          </div>
          <div class="mt-16 text-center"><button onclick="navigateTo('resources')" class="px-8 py-3 bg-surveillance text-cream font-mono uppercase hover:bg-rust transition-colors">View Resources</button></div>
      </section>
  `,$=()=>`
      ${c("06","Resources","Tools for resistance.")}
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
  `,c=(e,a,s,r)=>`
      <header class="bg-cream pt-12 pb-12 px-6 border-b border-surveillance/10 relative overflow-hidden">
          <div class="max-w-7xl mx-auto relative z-10"><span class="font-mono text-rust text-sm uppercase tracking-widest mb-2 block animate-fade-in">Chapter ${e}</span><h2 class="font-display font-bold text-5xl md:text-6xl text-surveillance mb-4 animate-slide-up">${a}</h2><p class="font-body text-xl md:text-2xl text-surveillance/60 max-w-2xl animate-slide-up">${s}</p></div>
      </header>
  `;function E(e){i.currentCity=e,u()}function u(){const e=document.getElementById("app"),a={home:g,system:y,cities:w,machines:k,exits:T,resources:$,casualties:()=>c("04","The Casualties","Psychological Archetypes")+`
          <section class="py-16 px-6 max-w-6xl mx-auto">
              <div class="mb-16 max-w-3xl mx-auto">
                  <p class="font-body text-xl leading-relaxed text-surveillance/70">
                      The economic pressures of the City (Chapter 02) force the self into specific shapes for survival. These are not personality types; they are defense mechanisms. Each archetype represents a different adaptation to the same systemic pressure: the demand to be perpetually useful, perpetually productive, perpetually visible.
                  </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${p("01","The Watchman","Vigilant defense against uncertainty","watchman","visibility")}
                  ${p("02","The Visible","Performance as identity","visible","person")}
                  ${p("03","The Faithful","Work as calling","faithful","church")}
                  ${p("04","The Departed","Quiet withdrawal","departed","person_off")}
                  ${p("05","The Architect","Strategic detachment","architect","architecture")}
              </div>
              <div class="flex justify-end mt-16">
                  <button onclick="navigateTo('exits')" class="text-rust font-bold flex items-center gap-2">
                      Next: The Exits <span class="material-symbols-outlined">arrow_forward</span>
                  </button>
              </div>
          </section>
      `};e.style.opacity="0",setTimeout(()=>{e.innerHTML=a[i.currentView](),i.currentView==="cities"&&v(i),e.style.opacity="1";const s={home:"0%",system:"16%",cities:"32%",machines:"48%",casualties:"64%",exits:"80%",resources:"100%"};document.getElementById("progress-bar").style.width=s[i.currentView]},300)}function C(e){f.has(e)&&(i.currentView=e,e==="home"?history.replaceState(null,"",window.location.pathname+window.location.search):window.location.hash=e,u(),window.scrollTo(0,0))}function I(){const e=document.getElementById("mobile-menu");e.classList.toggle("hidden"),e.classList.toggle("flex")}function S(e){document.querySelectorAll("[data-trap]").forEach(n=>{n.classList.remove("border-rust","border-l-rust","bg-rust/5");const o=n.querySelector("[data-trap-detail]"),d=n.querySelector("[data-trap-icon]");o&&o.classList.add("hidden"),d&&d.classList.remove("rotate-180")});const s=document.querySelector(`[data-trap="${e}"]`);if(!s)return;const r=s.querySelector("[data-trap-detail]"),t=s.querySelector("[data-trap-icon]");s.classList.add("border-rust","border-l-rust","bg-rust/5"),r&&r.classList.remove("hidden"),t&&t.classList.add("rotate-180"),window.innerWidth<768&&setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"nearest"})},100)}Object.assign(window,{navigateTo:C,toggleMobileMenu:I,openTrap:S,selectCity:E});document.addEventListener("DOMContentLoaded",()=>{x(),u(),window.addEventListener("hashchange",()=>{x(),u()}),window.addEventListener("scroll",()=>{const e=document.getElementById("navbar");window.scrollY>50?(e.classList.add("shadow-md","py-2"),e.classList.remove("py-4")):(e.classList.remove("shadow-md","py-2"),e.classList.add("py-4"))})});function x(){const e=window.location.hash.replace("#","");e&&f.has(e)&&(i.currentView=e)}

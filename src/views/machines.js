import { Header } from './shared.js'

export const MachinesView = () => `
      ${Header('03', 'The Machines', 'Engines of Envy.', 'machines')}
      <section class="max-w-5xl mx-auto px-6 py-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div class="self-start">
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
              <div class="space-y-4">
                  <div class="flex items-center gap-3 mb-6 px-1">
                      <span class="material-symbols-outlined text-3xl text-surveillance/90">visibility</span>
                      <div>
                          <p class="text-xs uppercase tracking-[0.3em] text-surveillance/60">Surveillance feed</p>
                          <p class="text-sm font-display text-surveillance">Live sentiment</p>
                      </div>
                  </div>
                  
                  <!-- Post 1 - Future Audience -->
                  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow md:mt-12">
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
                                  <p class="text-xs text-gray-500">3h • 🌎</p>
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
                                  <p class="text-xs text-gray-500">4h • 🌎</p>
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
                                  <p class="text-xs text-gray-500">2d • 🌎</p>
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
                                  <p class="text-xs text-gray-500">6h • 🌎</p>
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
                                  <p class="text-xs text-gray-500">1d • 🌎</p>
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
                                  <p class="text-xs text-gray-500">12h • 🌎</p>
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
                                  <p class="text-xs text-gray-500">18h • 🌎</p>
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
                                  <p class="text-xs text-gray-500">1d • 🌎</p>
                              </div>
                          </div>
                          <div class="text-sm text-gray-800 leading-relaxed">
                              <p>Just completed my 5th certification this year 🎓</p>
                              <p class="mt-2">AWS ✓ Scrum Master ✓ Six Sigma ✓ PMP ✓ Data Analytics ✓</p>
                              <p class="mt-2"><span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('defensive-ambition', true)">In this market, you can never be too prepared.</span> Already enrolled in the next one!</p>
                          </div>
                      </div>
                  </div>

                  <p class="mt-8 text-xs text-center text-gray-500 font-mono uppercase tracking-wide">Click highlighted phrases to explore psychological traps</p>
              </div>
          </div>
          <div class="flex justify-end mt-16"><button onclick="navigateTo('casualties')" class="text-rust font-bold flex items-center gap-2">Next: The Casualties <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </section>
  `

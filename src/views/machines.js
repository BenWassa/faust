import { Header } from './shared.js'

export const MachinesView = () => `
      ${Header('03', 'The Machines', 'Engines of Envy.', 'machines')}
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
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('future-audience', true)">Every move becomes marketing</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 02</p>
                          <p>
                            My feed is sticky. When I remove algorithmic dopamine, I actually ship slower, but feel sharper. Going quiet helps avoid <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('success-theater', true)">constant pitching</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 03</p>
                          <p>
                            The feed is a highlight reel of outliers. I try to measure progress by shipped outcomes and depth of focus.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('extremity-bias', true)">The unicorns set the baseline</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 04</p>
                          <p>
                            I didn’t realize how much I was tracking my peers until I logged off and felt relief. Comparison is infinite if you let it be.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('infinite-comparison', true)">Perspective breaks the spell</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 05</p>
                          <p>
                            If your layoff post reads like a case study, something is off. Pain is allowed to be unoptimized.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('performative-vulnerability', true)">Turning loss into content</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 06</p>
                          <p>
                            I used to feel guilty on weekends until I saw how much my mood depended on notifications.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('work-esteem', true)">Self-worth updates in real time</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 07</p>
                          <p>
                            Burnout isn't a badge. Rest is a strategy, not a status symbol.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('veblen-inversion', true)">Exhaustion as a flex</span>.
                          </p>
                      </div>
                      <div class="border border-surveillance/10 rounded-lg p-4 bg-cream/60">
                          <p class="text-xs font-mono text-gray-400 uppercase mb-2">Post 08</p>
                          <p>
                            I chase credentials when I feel precarious, not when I'm inspired. It's protection dressed up as ambition.
                            <span class="cursor-pointer text-rust border-b-2 border-rust/30 hover:border-rust hover:bg-rust/10 transition-colors px-0.5 rounded-sm" onclick="openTrap('defensive-ambition', true)">Fear-driven optimization</span>.
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
  `

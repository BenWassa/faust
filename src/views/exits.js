import { Header } from './shared.js'

// Local component for the upgraded cards
const StrategyCard = (id, icon, title, subtitle, archetype, core, risk) => `
    <div class="bg-white border border-surveillance/20 p-8 hover:shadow-md transition-all relative overflow-hidden group flex flex-col h-full" data-trap="${id}">
       <div class="flex items-start justify-between mb-6">
         <div>
           <span class="font-mono text-xs text-rust uppercase tracking-widest mb-2 block border-l-2 border-rust pl-2">${subtitle}</span>
           <h3 class="font-display font-bold text-2xl text-surveillance leading-none">${title}</h3>
         </div>
         <span class="material-symbols-outlined text-surveillance/10 text-5xl group-hover:text-rust/10 transition-colors">${icon}</span>
       </div>

       <div class="mb-6">
          <span class="font-mono text-[10px] uppercase text-surveillance/50 tracking-widest">Archetype</span>
          <div class="font-body font-bold text-surveillance text-lg">${archetype}</div>
       </div>

       <p class="font-body text-lg text-surveillance/80 mb-8 flex-grow">${core}</p>

       <div class="mt-auto pt-6 border-t border-surveillance/10">
         <button onclick="openTrap('${id}')" class="w-full flex items-center justify-between group/btn">
            <span class="font-mono text-xs uppercase tracking-widest text-surveillance/60 group-hover/btn:text-rust transition-colors">Analyze Risks</span>
            <span data-trap-icon class="material-symbols-outlined text-sm text-surveillance/60 transition-transform duration-300">expand_more</span>
         </button>
       </div>

       <div data-trap-detail class="hidden mt-4 bg-surveillance/5 -mx-8 -mb-8 p-8 border-t border-surveillance/10">
          ${risk}
       </div>
    </div>
`

export const ExitsView = () => `
      ${Header('05', 'The Exits', 'Strategies for defensive detachment.', 'exits')}
      
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
              
              ${StrategyCard(
                'exit-vocation',
                'church',
                'Identity Containment',
                'The Theological Exit',
                'The New Monastic',
                'Work is stripped of its ultimate status. By imposing a "rule of life," mobility and upside are traded for geographic and relational stability. Value is conferred by origin (Imago Dei), not utility.',
                `
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
                `
              )}

              ${StrategyCard(
                'exit-craft',
                'handyman', // or 'construction' or 'balance'
                'Craft Loyalty',
                'The Aristotelian Exit',
                'The Virtuous Practitioner',
                'A refusal of promotions that sever the worker from the work. This strategy prioritizes the "internal goods" of a practice over the "external goods" (status, scale) of the institution.',
                `
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
                `
              )}

              ${StrategyCard(
                'exit-ego',
                'psychology',
                'Ego Load Reduction',
                'The Humanistic Exit',
                'The Strategic Deprioritizer',
                'Manages the ego depletion caused by the digital panopticon. The self is not a project to be optimized, but a vessel to be protected. Often misread by management as "quiet quitting."',
                `
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
                `
              )}
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
  `
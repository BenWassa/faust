import { Card } from './shared.js'

export const Hero = () => `
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
              ${Card('01', 'The System', 'The Tyranny of Merit', 'system', 'grid_view')}
              ${Card('02', 'The Cities', 'Toronto, London, NYC', 'cities', 'location_city')}
              ${Card('03', 'The Machines', 'LinkedIn Panopticon', 'machines', 'devices')}
              ${Card('04', 'The Casualties', 'Burnout & Anxiety', 'casualties', 'psychology')}
              ${Card('05', 'The Exits', 'Alternative Frameworks', 'exits', 'door_open')}
              ${Card('06', 'Resources', 'Practical Tools', 'resources', 'library_books')}
          </div>
      </section>
  `

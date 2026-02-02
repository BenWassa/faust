import { ExitCard, Header } from './shared.js'

export const ExitsView = () => `
      ${Header('05', 'The Exits', 'Doors out of the burning building.', 'exits')}
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
              ${ExitCard('church', 'Vocation', 'Christian Exit', 'Work is not a ladder, but a station to serve. Value is conferred by origin (Imago Dei), not utility.')}
              ${ExitCard('balance', 'Eudaimonia', 'Aristotelian Exit', 'Happiness is not a dopamine spike, but the steady practice of virtue over a complete life.')}
              ${ExitCard('self_improvement', 'Transcendence', 'Humanistic Exit', 'The self is not a project to be optimized, but a vessel to be emptied into something larger.')}
          </div>
          <div class="mt-16 text-center"><button onclick="navigateTo('resources')" class="px-8 py-3 bg-surveillance text-cream font-mono uppercase hover:bg-rust transition-colors">View Resources</button></div>
      </section>
  `

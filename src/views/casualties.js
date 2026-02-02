import { ArchetypeCard, Header } from './shared.js'

export const CasualtiesView = () =>
  Header('04', 'The Casualties', 'Psychological Archetypes', 'casualties') +
  `
          <section class="py-16 px-6 max-w-6xl mx-auto">
              <div class="mb-16 max-w-3xl mx-auto">
                  <p class="font-body text-xl leading-relaxed text-surveillance/70">
                      The economic pressures of the City (Chapter 02) force the self into specific shapes for survival. These are not personality types; they are defense mechanisms. Each archetype represents a different adaptation to the same systemic pressure: the demand to be perpetually useful, perpetually productive, perpetually visible.
                  </p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${ArchetypeCard('01', 'The Watchman', 'Vigilant defense against uncertainty', 'watchman', 'visibility')}
                  ${ArchetypeCard('02', 'The Visible', 'Performance as identity', 'visible', 'person')}
                  ${ArchetypeCard('03', 'The Faithful', 'Work as calling', 'faithful', 'church')}
                  ${ArchetypeCard('04', 'The Departed', 'Quiet withdrawal', 'departed', 'person_off')}
                  ${ArchetypeCard('05', 'The Architect', 'Strategic detachment', 'architect', 'architecture')}
              </div>
              <div class="flex justify-end mt-16">
                  <button onclick="navigateTo('exits')" class="text-rust font-bold flex items-center gap-2">
                      Next: The Exits <span class="material-symbols-outlined">arrow_forward</span>
                  </button>
              </div>
          </section>
      `

import { Header } from './shared.js'

export const ResourcesView = () => `
      ${Header('06', 'Resources', 'Tools for resistance.', 'resources')}
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
  `

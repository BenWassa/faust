import { Header } from './shared.js'

export const SystemView = () => `
      ${Header('01', 'The System', 'The theological intensity of modern work.', 'system')}
      <article class="max-w-3xl mx-auto px-6 py-16">
          <p class="font-body text-2xl leading-relaxed text-surveillance/80 mb-12 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">We have replaced the worship of gods with the worship of potential. Derek Thompson calls it "Workism"—the belief that work is not only necessary to economic production, but also the centerpiece of one’s identity.</p>
          <div class="my-12 border-l-4 border-rust pl-8 py-2"><blockquote class="font-display font-bold text-2xl text-surveillance italic">"The achievement-subject exploits itself. It means that exploitation is possible even without domination."</blockquote><cite class="block mt-4 font-mono text-sm text-rust uppercase">— Byung-Chul Han</cite></div>
          <h3 class="font-display font-bold text-3xl mb-6">The Tyranny of Merit</h3>
          <p class="font-body text-lg leading-relaxed mb-8">Michael Sandel argues that the rhetoric of "rising" creates a hubristic meritocracy. If you believe success is your own doing, failure must be your own fault.</p>
          <div class="bg-surveillance text-cream p-8 my-12 relative"><h4 class="font-mono text-rust uppercase tracking-widest mb-4">Diagnostic</h4><ul class="space-y-4 font-body text-lg"><li>Do you introduce yourself by job title?</li><li>Do you feel guilty when unproductive?</li><li>Is work your primary community?</li></ul></div>
          <div class="flex justify-between items-center mt-16 pt-8 border-t border-surveillance/10"><button onclick="navigateTo('home')" class="text-surveillance/50 hover:text-surveillance flex items-center gap-2"><span class="material-symbols-outlined">arrow_back</span> Home</button><button onclick="navigateTo('cities')" class="text-rust font-bold hover:text-surveillance flex items-center gap-2">Next: The Cities <span class="material-symbols-outlined">arrow_forward</span></button></div>
      </article>
  `

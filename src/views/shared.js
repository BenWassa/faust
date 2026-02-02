export const Header = (num, title, sub, view) => `
      <header class="bg-cream pt-12 pb-12 px-6 border-b border-surveillance/10 relative overflow-hidden">
          <div class="max-w-7xl mx-auto relative z-10"><span class="font-mono text-rust text-sm uppercase tracking-widest mb-2 block animate-fade-in">Chapter ${num}</span><h2 class="font-display font-bold text-5xl md:text-6xl text-surveillance mb-4 animate-slide-up">${title}</h2><p class="font-body text-xl md:text-2xl text-surveillance/60 max-w-2xl animate-slide-up">${sub}</p></div>
      </header>
  `

export const Card = (num, title, desc, link, icon) => `
      <div onclick="navigateTo('${link}')" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${icon}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${num}</span><h3 class="font-display font-bold text-2xl mb-4">${title}</h3><p class="font-body text-lg opacity-70">${desc}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `

export const ArchetypeCard = (num, title, desc, file, icon) => `
      <div onclick="window.location.href='archetypes/${file}.html'" class="group border border-surveillance/20 p-8 hover:bg-surveillance hover:text-cream transition-all duration-300 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden bg-white">
          <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20"><span class="material-symbols-outlined text-6xl">${icon}</span></div>
          <div><span class="font-mono text-rust text-sm mb-2 block group-hover:text-soft-green">${num}</span><h3 class="font-display font-bold text-2xl mb-4">${title}</h3><p class="font-body text-lg opacity-70">${desc}</p></div>
          <div class="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Explore <span class="material-symbols-outlined text-sm">arrow_forward</span></div>
      </div>
  `

export const ExitCard = (icon, title, sub, text) => `
      <div class="bg-white border border-surveillance/10 p-8 hover:shadow-lg transition-all group">
          <div class="h-12 w-12 bg-rust/10 text-rust flex items-center justify-center mb-6 group-hover:bg-rust group-hover:text-white transition-colors"><span class="material-symbols-outlined">${icon}</span></div>
          <h3 class="font-display font-bold text-2xl mb-2">${title}</h3><span class="font-mono text-xs uppercase tracking-widest text-surveillance/50 mb-4 block">${sub}</span>
          <p class="font-body text-lg">${text}</p>
      </div>
  `

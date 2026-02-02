export const cityData = {
  toronto: {
    ratio: 10.7,
    income: 99000,
    desc: 'The Trap of Good Intentions',
    stats: '77% income for ownership',
    narrative:
      'The ambition tax: where hustle is survival, not aspiration. 10.7 price-to-income makes ownership mathematical.',
    costDisplay: '$1.07M',
    costBarHeight: 130,
    image: { src: './toronto.png', alt: 'CN Tower Toronto skyline black and white' },
  },
  vancouver: {
    ratio: 12.7,
    income: 92000,
    desc: 'Immobility by Design',
    stats: '12.7 Price-to-Income Ratio',
    narrative:
      'The most beautiful trap: a 12.7 price-to-income ratio means only inheritance buys shelter.',
    costDisplay: '$1.27M',
    costBarHeight: 138,
    image: { src: './vancouver.png', alt: 'Lions Gate Bridge Vancouver black and white' },
  },
  london: {
    ratio: 9.8,
    income: 45000,
    desc: 'The Feudal Rental Market',
    stats: '52% income on rent',
    narrative: 'Feudalism reinvented. 9.8 price-to-income and 52% of pay on rent feels "normal."',
    costDisplay: '£221K',
    costBarHeight: 115,
    image: { src: './london.png', alt: 'St Pauls Cathedral London skyline black and white' },
  },
  nyc: {
    ratio: 7.5,
    income: 80000,
    desc: 'The Velocity Machine',
    stats: '53% Rent Burdened',
    narrative: 'Velocity over everything. 53% rent burden, yet the story says you are lucky.',
    costDisplay: '$600K',
    costBarHeight: 118,
    image: { src: './nyc.png', alt: 'Empire State Building NYC skyline black and white' },
  },
}

const cityNameMap = {
  nyc: 'New York City',
}

const formatCityName = (key) => cityNameMap[key] || key.charAt(0).toUpperCase() + key.slice(1)

export const CitiesLayout = (state) => {
  const { currentCity, cityData } = state
  if (!cityData[currentCity]) return ''

  // Generate the "Index" list of cities
  const cityList = Object.keys(cityData)
    .map((key) => {
      const isActive = key === currentCity
      return `
        <button
          onclick="selectCity('${key}')"
          class="w-full text-left px-4 py-4 border-b border-surveillance/10 flex justify-between items-center group transition-all hover:bg-surveillance/5 ${
            isActive ? 'bg-surveillance/5 border-l-4 border-l-rust pl-3' : 'pl-4'
          }"
        >
          <span class="font-mono text-sm uppercase tracking-widest ${
            isActive ? 'text-rust font-bold' : 'text-surveillance/70'
          }">${key}</span>
          ${
            isActive
              ? '<span class="material-symbols-outlined text-sm text-rust">arrow_right</span>'
              : ''
          }
        </button>`
    })
    .join('')

  return `
    <section class="max-w-7xl mx-auto px-6 pt-8 pb-8 lg:pt-12 lg:pb-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-surveillance/20 bg-white shadow-sm">

        <div class="lg:col-span-4 border-r border-surveillance/20 flex flex-col">
          <div class="p-6 border-b border-surveillance/20 bg-blueprint">
            <span class="font-mono text-[10px] uppercase text-surveillance/60 mb-1 block">Select Jurisdiction</span>
            <h3 class="font-display font-bold text-2xl text-surveillance">The Markets</h3>
          </div>

          <div class="flex-grow flex flex-col">
            ${cityList}
          </div>

          <div class="p-8 mt-auto bg-cream/30">
             <div class="font-mono text-[10px] uppercase text-rust mb-2 tracking-widest">System Note</div>
             <p class="font-body text-lg italic leading-relaxed text-surveillance/80" id="city-narrative"></p>
          </div>
        </div>

        <div class="lg:col-span-8 relative min-h-[500px] flex flex-col">

          <div class="absolute top-0 left-0 w-full z-20 flex justify-between items-start p-6 pointer-events-none">
            <div class="bg-white/90 backdrop-blur border border-surveillance/20 px-4 py-2 shadow-sm">
              <span class="font-mono text-[10px] uppercase text-surveillance/50 block mb-1">Status</span>
              <span class="font-display font-bold text-xl text-surveillance uppercase" id="city-title">${currentCity}</span>
              <span class="font-mono text-xs text-rust uppercase tracking-widest block mt-1" id="city-desc"></span>
            </div>
            <div class="bg-rust text-cream px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-md">
              <span id="stat-main">${cityData[currentCity].stats}</span>
            </div>
          </div>

          <div class="relative flex-grow bg-surveillance overflow-hidden group">
            <div class="absolute inset-0 bg-blueprint opacity-20 z-10 mix-blend-overlay"></div>
            <div class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none border-[20px] border-white/0">
               <div class="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/50"></div>
               <div class="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/50"></div>
               <div class="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/50"></div>
               <div class="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/50"></div>
            </div>
            <img id="city-img" src="" class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale contrast-125 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-40">
          </div>

          <div class="bg-white border-t border-surveillance/20 p-8 pb-4 md:p-10 md:pb-5 lg:p-12 lg:pb-6 min-h-[220px] mt-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-end relative z-20">

            <div class="col-span-2 md:col-span-1">
              <span class="font-mono text-[10px] uppercase text-surveillance/60 block mb-2">Price-to-Income Ratio</span>
              <div class="flex items-baseline gap-2">
                 <span class="font-display font-bold text-6xl text-rust" id="ratio-value">${
                   cityData[currentCity].ratio
                 }</span>
                 <span class="font-mono text-sm text-surveillance/50">x</span>
              </div>
            </div>

            <figure
              class="col-span-2 flex items-end gap-12 h-32 pb-2"
              role="img"
              aria-labelledby="affordability-graph-title"
              aria-describedby="city-graph-description"
              id="affordability-graph"
            >
              <span id="affordability-graph-title" class="sr-only">Housing affordability comparison</span>
               <div class="flex flex-col items-center gap-2 group w-1/2">
                  <div class="w-full relative h-[140px] flex items-end">
                    <div class="w-full bg-surveillance/20 hover:bg-surveillance/30 transition-all duration-500 relative" id="bar-income" style="height: 70px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-surveillance shadow-sm" id="income-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Annual Income</span>
               </div>

               <div class="flex flex-col items-center gap-2 group w-1/2">
                   <div class="w-full relative h-[140px] flex items-end">
                    <div class="w-full bg-rust hover:bg-rust/90 transition-all duration-500 relative" id="bar-cost" style="height: 130px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-rust shadow-sm" id="cost-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Property Cost</span>
               </div>

               <figcaption id="city-graph-description" class="sr-only" aria-live="polite"></figcaption>
            </figure>

          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-8">
        <span class="font-mono text-xs text-surveillance/40 uppercase">Fig 02.1 — Global Affordability Index</span>
        <button onclick="navigateTo('machines')" class="text-rust font-bold flex items-center gap-2">Next: The Machines <span class="material-symbols-outlined">arrow_forward</span></button>
      </div>
    </section>
  `
}

export const updateCityPanel = (state) => {
  const data = cityData[state.currentCity]
  if (!data) return

  // Update Text Content
  const setText = (id, text) => {
    const el = document.getElementById(id)
    if (el) el.innerText = text
  }

  setText('city-narrative', data.narrative)
  setText('city-title', state.currentCity)
  setText('city-desc', data.desc)
  setText('stat-main', data.stats)
  setText('ratio-value', data.ratio)
  const incomeLabel = '$' + (data.income / 1000).toFixed(0) + 'K'
  setText('income-value', incomeLabel)
  setText('cost-value', data.costDisplay)

  const cityLabel = formatCityName(state.currentCity)
  const graphDescription = `${cityLabel} annual income ${incomeLabel} compared to property cost ${data.costDisplay}; price-to-income ratio ${data.ratio}:1.`
  const graphDescriptionEl = document.getElementById('city-graph-description')
  if (graphDescriptionEl) graphDescriptionEl.innerText = graphDescription
  const graphEl = document.getElementById('affordability-graph')
  if (graphEl) graphEl.setAttribute('aria-label', graphDescription)

  // Update Image
  const img = document.getElementById('city-img')
  if (img) {
    img.src = data.image.src
    img.alt = data.image.alt
  }

  // Update Bars
  const incomeBar = document.getElementById('bar-income')
  const costBar = document.getElementById('bar-cost')

  // We set a small timeout to allow the CSS transition to trigger if this is a re-render
  requestAnimationFrame(() => {
    if (incomeBar) incomeBar.style.height = '70px' // Baseline
    if (costBar) costBar.style.height = data.costBarHeight + 'px'
  })
}

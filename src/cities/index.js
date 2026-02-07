const BAR_MIN_HEIGHT = 24
const BAR_MAX_HEIGHT = 130

export const cityData = {
  toronto: {
    medianIncome: 99000,
    medianHomePrice: 1029600,
    currency: 'CAD',
    year: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Project Faust city baseline',
    rentSource: 'Project Faust city baseline',
    desc: 'The Trap of Good Intentions',
    burdenLabel: 'Ownership burden',
    burdenValue: '77% of income',
    narrative:
      'The ambition tax: where hustle is survival, not aspiration. Ownership becomes a math problem first, a life decision second.',
    image: { src: './toronto.png', alt: 'CN Tower Toronto skyline black and white' },
  },
  vancouver: {
    medianIncome: 92000,
    medianHomePrice: 1168400,
    currency: 'CAD',
    year: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Project Faust city baseline',
    rentSource: 'Project Faust city baseline',
    desc: 'Immobility by Design',
    burdenLabel: 'Affordability pressure',
    burdenValue: '12.7x income',
    narrative: 'The most beautiful trap: affordability drifts so far from wages that mobility becomes inheritance-dependent.',
    image: { src: './vancouver.png', alt: 'Lions Gate Bridge Vancouver black and white' },
  },
  london: {
    medianIncome: 45000,
    medianHomePrice: 441000,
    currency: 'GBP',
    year: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Project Faust city baseline',
    rentSource: 'Project Faust city baseline',
    desc: 'The Feudal Rental Market',
    burdenLabel: 'Rent burden',
    burdenValue: '52% of income',
    narrative: 'Feudalism reinvented: rent absorbs upward mobility while ownership keeps moving out of reach.',
    image: { src: './london.png', alt: 'St Pauls Cathedral London skyline black and white' },
  },
  nyc: {
    medianIncome: 80000,
    medianHomePrice: 600000,
    currency: 'USD',
    year: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Project Faust city baseline',
    rentSource: 'Project Faust city baseline',
    desc: 'The Velocity Machine',
    burdenLabel: 'Rent burdened households',
    burdenValue: '53%',
    narrative: 'Velocity over everything. High rent burden persists, but the social story still calls this opportunity.',
    image: { src: './nyc.png', alt: 'Empire State Building NYC skyline black and white' },
  },
}

const cityNameMap = {
  nyc: 'New York City',
}

const formatCityName = (key) => cityNameMap[key] || key.charAt(0).toUpperCase() + key.slice(1)

const formatCurrencyCompact = (value, currency) => {
  if (currency === 'CAD' || currency === 'USD') {
    const amount = new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1,
    }).format(value)
    return `${currency} ${amount}`
  }

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency,
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(value)
}

const buildComputedCities = (data) => {
  const entries = Object.entries(data).map(([key, item]) => {
    const ratio = item.medianHomePrice / item.medianIncome
    return [key, { ...item, ratio }]
  })

  const computed = Object.fromEntries(entries)
  const maxValue = Math.max(...entries.map(([, item]) => item.medianHomePrice))
  return { computed, maxValue }
}

const scaleBarHeight = (value, maxValue) => {
  if (!maxValue || value <= 0) return `${BAR_MIN_HEIGHT}px`
  const scaled = BAR_MIN_HEIGHT + (value / maxValue) * (BAR_MAX_HEIGHT - BAR_MIN_HEIGHT)
  return `${Math.round(scaled)}px`
}

export const CitiesLayout = (state) => {
  const { currentCity } = state
  const { computed } = buildComputedCities(state.cityData)
  if (!computed[currentCity]) return ''

  const cityList = Object.keys(computed)
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
          }">${formatCityName(key)}</span>
          ${
            isActive
              ? '<span class="material-symbols-outlined text-sm text-rust">arrow_right</span>'
              : ''
          }
        </button>`
    })
    .join('')

  const selected = computed[currentCity]

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
              <span class="font-display font-bold text-xl text-surveillance uppercase" id="city-title">${formatCityName(currentCity)}</span>
              <span class="font-mono text-xs text-rust uppercase tracking-widest block mt-1" id="city-desc"></span>
            </div>
            <div class="bg-surveillance text-cream px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-md">
              <span id="stat-burden">${selected.burdenLabel}: ${selected.burdenValue}</span>
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
                 <span class="font-display font-bold text-6xl text-rust" id="ratio-value">${selected.ratio.toFixed(1)}</span>
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
                    <div class="w-full bg-surveillance/20 hover:bg-surveillance/30 transition-all duration-500 relative" id="bar-income" style="height: ${BAR_MIN_HEIGHT}px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-surveillance shadow-sm" id="income-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Median Income</span>
               </div>

               <div class="flex flex-col items-center gap-2 group w-1/2">
                   <div class="w-full relative h-[140px] flex items-end">
                    <div class="w-full bg-rust hover:bg-rust/90 transition-all duration-500 relative" id="bar-cost" style="height: ${BAR_MIN_HEIGHT}px">
                       <div class="absolute -top-7 left-1/2 -translate-x-1/2 w-fit bg-cream/95 border border-surveillance/10 rounded-sm px-2 py-0.5 font-mono text-xs font-bold text-rust shadow-sm" id="cost-value"></div>
                    </div>
                  </div>
                  <span class="font-mono text-[10px] uppercase tracking-widest text-surveillance/60">Median Home Price</span>
               </div>

               <figcaption id="city-graph-description" class="sr-only" aria-live="polite"></figcaption>
            </figure>

            <p class="col-span-2 md:col-span-3 font-mono text-[10px] uppercase text-surveillance/50 tracking-wider" id="city-metadata"></p>
            <p class="col-span-2 md:col-span-3 font-mono text-[10px] uppercase text-surveillance/40 tracking-wider" id="city-definition"></p>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-8">
        <span class="font-mono text-xs text-surveillance/40 uppercase">Fig 02.1 — Housing Affordability (Price-to-Income)</span>
        <button onclick="navigateTo('machines')" class="text-rust font-bold flex items-center gap-2">Next: The Machines <span class="material-symbols-outlined">arrow_forward</span></button>
      </div>
    </section>
  `
}

export const updateCityPanel = (state) => {
  const { computed, maxValue } = buildComputedCities(state.cityData)
  const data = computed[state.currentCity]
  if (!data) return

  const setText = (id, text) => {
    const el = document.getElementById(id)
    if (el) el.innerText = text
  }

  const cityLabel = formatCityName(state.currentCity)
  const incomeLabel = formatCurrencyCompact(data.medianIncome, data.currency)
  const priceLabel = formatCurrencyCompact(data.medianHomePrice, data.currency)
  const ratioLabel = data.ratio.toFixed(1)

  setText('city-narrative', data.narrative)
  setText('city-title', cityLabel)
  setText('city-desc', data.desc)
  setText('stat-burden', `${data.burdenLabel}: ${data.burdenValue}`)
  setText('ratio-value', ratioLabel)
  setText('income-value', incomeLabel)
  setText('cost-value', priceLabel)
  setText(
    'city-metadata',
    `${data.incomeType} (${data.taxBasis}), ${data.year}. Ownership source: ${data.ownershipSource}. Rent source: ${data.rentSource}.`
  )
  setText(
    'city-definition',
    'Definition: price-to-income = median home price divided by median annual household income.'
  )

  const graphDescription = `${cityLabel}: median income ${incomeLabel}, median home price ${priceLabel}, price-to-income ratio ${ratioLabel} to 1.`
  const graphDescriptionEl = document.getElementById('city-graph-description')
  if (graphDescriptionEl) graphDescriptionEl.innerText = graphDescription
  const graphEl = document.getElementById('affordability-graph')
  if (graphEl) graphEl.setAttribute('aria-label', graphDescription)

  const img = document.getElementById('city-img')
  if (img) {
    img.src = data.image.src
    img.alt = data.image.alt
  }

  const incomeBar = document.getElementById('bar-income')
  const costBar = document.getElementById('bar-cost')

  requestAnimationFrame(() => {
    if (incomeBar) incomeBar.style.height = scaleBarHeight(data.medianIncome, maxValue)
    if (costBar) costBar.style.height = scaleBarHeight(data.medianHomePrice, maxValue)
  })
}

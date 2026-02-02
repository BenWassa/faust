export const cityData = {
  toronto: {
    ratio: 10.7,
    income: 99000,
    desc: 'The Trap of Good Intentions',
    stats: '77% income for ownership',
    narrative: 'The ambition tax: where hustle is survival, not aspiration. 10.7 price-to-income makes ownership mathematical.',
    costDisplay: '$1.07M',
    costBarHeight: 240,
    image: { src: './toronto.png', alt: 'CN Tower Toronto skyline black and white' },
  },
  vancouver: {
    ratio: 12.7,
    income: 92000,
    desc: 'Immobility by Design',
    stats: '12.7 Price-to-Income Ratio',
    narrative: 'The most beautiful trap: a 12.7 price-to-income ratio means only inheritance buys shelter.',
    costDisplay: '$1.27M',
    costBarHeight: 254,
    image: { src: './vancouver.png', alt: 'Lions Gate Bridge Vancouver black and white' },
  },
  london: {
    ratio: 9.8,
    income: 45000,
    desc: 'The Feudal Rental Market',
    stats: '52% income on rent',
    narrative: 'Feudalism reinvented. 9.8 price-to-income and 52% of pay on rent feels “normal.”',
    costDisplay: '£221K',
    costBarHeight: 190,
    image: { src: './london.png', alt: 'St Pauls Cathedral London skyline black and white' },
  },
  nyc: {
    ratio: 7.5,
    income: 80000,
    desc: 'The Velocity Machine',
    stats: '53% Rent Burdened',
    narrative: 'Velocity over everything. 53% rent burden, yet the story says you are lucky.',
    costDisplay: '$600K',
    costBarHeight: 200,
    image: { src: './nyc.png', alt: 'Empire State Building NYC skyline black and white' },
  },
}

export const CitiesLayout = (state) => {
  const { currentCity, cityData } = state
  if (!cityData[currentCity]) return ''
  const buttons = Object.keys(cityData)
    .map(
      (key) =>
        `<button onclick="selectCity('${key}')" class="px-6 py-3 border border-surveillance font-mono text-sm uppercase transition-all ${
          key === currentCity ? 'bg-surveillance text-cream' : 'hover:bg-surveillance/10'
        }">${key}</button>`
    )
    .join('')

  return `
        <section class="max-w-6xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h3 class="font-display font-bold text-3xl mb-6">Select Pressure Point</h3>
                    <div class="flex flex-wrap gap-4 mb-8">${buttons}</div>
                    <div id="city-details" class="bg-white p-8 border border-surveillance/10 shadow-sm animate-fade-in">
                        <h4 class="font-display font-bold text-4xl mb-2 text-surveillance uppercase">${currentCity}</h4>
                        <p class="font-mono text-rust text-sm uppercase tracking-widest mb-6">${cityData[currentCity].desc}</p>
                        <p class="font-body text-lg" id="city-narrative"></p>
                    </div>
                </div>
                <div class="bg-blueprint p-6 border border-surveillance/20 relative min-h-[400px] flex flex-col justify-end">
                    <img id="city-img" src="" class="absolute inset-0 w-full h-full object-cover opacity-30 img-blueprint mix-blend-multiply">
                    <div class="relative z-10 w-full bg-cream/90 p-6 backdrop-blur-sm border border-surveillance/10">
                        <h5 class="font-mono text-xs uppercase mb-6 text-center font-bold tracking-widest">Economic Viability</h5>
                        <div class="flex justify-center items-end gap-12 mb-6" style="height: 200px">
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 bg-surveillance transition-all duration-500" id="bar-income" style="height: 120px"></div>
                                <div class="text-center">
                                    <span class="text-sm font-mono font-bold text-surveillance mb-1 block" id="income-value">$99K</span>
                                    <span class="text-xs font-mono text-surveillance/60 uppercase">Income</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 bg-rust transition-all duration-500" id="bar-cost" style="height: 180px"></div>
                                <div class="text-center">
                                    <span class="text-sm font-mono font-bold text-rust mb-1 block" id="cost-value">$1.07M</span>
                                    <span class="text-xs font-mono text-surveillance/60 uppercase">Cost</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-center pt-4 border-t border-surveillance/10"><span class="block font-mono text-xs text-surveillance/50 uppercase mb-2">Key Stat</span><span class="block font-display font-bold text-xl text-rust" id="stat-main">${cityData[currentCity].stats}</span></div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-8"><button onclick="navigateTo('machines')" class="text-rust font-bold flex items-center gap-2">Next: The Machines <span class="material-symbols-outlined">arrow_forward</span></button></div>
        </section>
    `
}

export const updateCityPanel = (state) => {
  const narrative = document.getElementById('city-narrative')
  const img = document.getElementById('city-img')
  const data = cityData[state.currentCity]
  if (!data) return

  if (narrative) narrative.innerText = data.narrative
  if (img) {
    img.src = data.image.src
    img.alt = data.image.alt
  }

  const incomeValue = document.getElementById('income-value')
  const costValue = document.getElementById('cost-value')
  const incomeBar = document.getElementById('bar-income')
  const costBar = document.getElementById('bar-cost')

  if (incomeValue) incomeValue.innerText = '$' + (data.income / 1000).toFixed(0) + 'K'
  if (incomeBar) incomeBar.style.height = '120px'
  if (costValue) costValue.innerText = data.costDisplay
  if (costBar) costBar.style.height = data.costBarHeight + 'px'
}

// Canonical, source-backed city dataset (see documentation/CITIES_SOURCE_DATA.md).
// Every displayed figure maps to a primary source.
export interface City {
  key: string
  name: string
  desc: string
  medianIncome: number
  medianHomePrice: number
  currency: 'CAD' | 'USD' | 'GBP'
  ownershipYear: number
  rentYear: number
  incomeType: string
  taxBasis: string
  ownershipSource: string
  rentSource: string
  burdenLabel: string
  burdenValue: string
  narrative: string
  image: { src: string; alt: string }
}

export const cities: Record<string, City> = {
  toronto: {
    key: 'toronto',
    name: 'Toronto',
    desc: 'The Trap of Good Intentions',
    medianIncome: 99000,
    medianHomePrice: 1029600,
    currency: 'CAD',
    ownershipYear: 2025,
    rentYear: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Demographia International Housing Affordability (2025)',
    rentSource: 'National Bank of Canada Q3 2025',
    burdenLabel: 'Ownership burden',
    burdenValue: '81% of household income',
    narrative:
      'The ambition tax: where hustle is survival, not aspiration. Ownership becomes a math problem first, a life decision second.',
    image: { src: 'toronto.png', alt: 'CN Tower Toronto skyline, black and white' },
  },
  vancouver: {
    key: 'vancouver',
    name: 'Vancouver',
    desc: 'Immobility by Design',
    medianIncome: 92000,
    medianHomePrice: 1242000,
    currency: 'CAD',
    ownershipYear: 2025,
    rentYear: 2025,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Demographia International Housing Affordability (2025)',
    rentSource: 'Demographia International Housing Affordability (2025)',
    burdenLabel: 'Affordability pressure',
    burdenValue: '13.5x median income',
    narrative:
      'The most beautiful trap: affordability drifts so far from wages that mobility becomes inheritance-dependent.',
    image: { src: 'vancouver.png', alt: 'Lions Gate Bridge Vancouver, black and white' },
  },
  london: {
    key: 'london',
    name: 'London',
    desc: 'The Feudal Rental Market',
    medianIncome: 45000,
    medianHomePrice: 396000,
    currency: 'GBP',
    ownershipYear: 2025,
    rentYear: 2024,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Demographia International Housing Affordability (2025)',
    rentSource: 'GLA/City Hall Investigation 2024',
    burdenLabel: 'Housing burden (low-income young)',
    burdenValue: 'Up to 77% of earnings',
    narrative:
      'Feudalism reinvented: rent absorbs upward mobility while ownership keeps moving out of reach.',
    image: { src: 'london.png', alt: 'St Pauls Cathedral London skyline, black and white' },
  },
  nyc: {
    key: 'nyc',
    name: 'New York City',
    desc: 'The Velocity Machine',
    medianIncome: 80000,
    medianHomePrice: 616000,
    currency: 'USD',
    ownershipYear: 2025,
    rentYear: 2023,
    incomeType: 'Median household income',
    taxBasis: 'Pre-tax',
    ownershipSource: 'Demographia International Housing Affordability (2025)',
    rentSource: 'NYC Comptroller 2023',
    burdenLabel: 'Rent burdened households',
    burdenValue: '53%',
    narrative:
      'Velocity over everything. High rent burden persists, but the social story still calls this opportunity.',
    image: { src: 'nyc.png', alt: 'Empire State Building NYC skyline, black and white' },
  },
}

export const cityOrder = ['toronto', 'vancouver', 'london', 'nyc']

export function ratio(c: City): number {
  return c.medianHomePrice / c.medianIncome
}

// Audited 2024 Q3 metropolitan-market figures from Demographia's 2025 edition.
// Its Tables 3-4 publish rounded median multiples, NOT underlying median prices or incomes.
// Do not reverse-engineer monetary inputs from a one-decimal ratio.
export const AFFORDABLE_CUTOFF = 3.0

export interface Burden {
  label: string
  value: string
  definition: string
  year: number
  sourceId: string
  sourceLocation: string
}

export interface City {
  key: string
  name: string
  market: string
  desc: string
  medianMultiple: number
  currency: 'CAD' | 'USD' | 'GBP'
  ownershipDataYear: 2024
  ownershipEditionYear: 2025
  ownershipSourceId: 'demographia_2025'
  ownershipSourceLocation: string
  incomeType: 'Gross median household income'
  burden?: Burden
  narrative: string
  image: { src: string; alt: string }
}

const ownership = {
  ownershipDataYear: 2024,
  ownershipEditionYear: 2025,
  ownershipSourceId: 'demographia_2025',
  incomeType: 'Gross median household income',
} as const

export const cities: Record<string, City> = {
  toronto: {
    ...ownership,
    key: 'toronto',
    name: 'Toronto',
    market: 'Toronto, ON metropolitan housing market',
    desc: 'The Trap of Good Intentions',
    medianMultiple: 8.4,
    currency: 'CAD',
    ownershipSourceLocation: 'Table 4, printed p. 23 (PDF p. 29)',
    narrative:
      'The ambition tax: where hustle is survival, not aspiration. Ownership becomes a math problem first, a life decision second.',
    image: { src: 'toronto.png', alt: 'CN Tower Toronto skyline, black and white' },
  },
  vancouver: {
    ...ownership,
    key: 'vancouver',
    name: 'Vancouver',
    market: 'Vancouver, BC metropolitan housing market',
    desc: 'Immobility by Design',
    medianMultiple: 11.8,
    currency: 'CAD',
    ownershipSourceLocation: 'Table 4, printed p. 23 (PDF p. 29)',
    narrative:
      'The most beautiful trap: affordability drifts so far from wages that mobility becomes inheritance-dependent.',
    image: { src: 'vancouver.png', alt: 'Lions Gate Bridge Vancouver, black and white' },
  },
  london: {
    ...ownership,
    key: 'london',
    name: 'London',
    market: 'Greater London metropolitan housing market',
    desc: 'The Feudal Rental Market',
    medianMultiple: 9.1,
    currency: 'GBP',
    ownershipSourceLocation: 'Table 4, printed p. 23 (PDF p. 29)',
    burden: {
      label: 'Housing cost share: low-income Londoners aged 25–29',
      value: '77% of wages',
      definition: 'Low-income 25–29-year-old Londoners; proportion of wages spent on housing costs. Not all London renters.',
      year: 2024,
      sourceId: 'gla_2024',
      sourceLocation: 'London Assembly Housing Committee report overview, 7 March 2024, paragraph 2',
    },
    narrative:
      'Feudalism reinvented: rent absorbs upward mobility while ownership keeps moving out of reach.',
    image: { src: 'london.png', alt: 'St Pauls Cathedral London skyline, black and white' },
  },
  nyc: {
    ...ownership,
    key: 'nyc',
    name: 'New York',
    market: 'New York, NY–NJ–PA metropolitan housing market',
    desc: 'The Velocity Machine',
    medianMultiple: 7.4,
    currency: 'USD',
    ownershipSourceLocation: 'Table 4, printed p. 25 (PDF p. 31)',
    burden: {
      label: 'NYC renter households rent-burdened',
      value: '52.1%',
      definition: 'New York City renter households whose gross rent (including utilities) exceeds 30% of household income; city-proper ACS sample, not the metropolitan market.',
      year: 2022,
      sourceId: 'nyc_comptroller_2023',
      sourceLocation: '2024 Comptroller Spotlight, Housing Affordability, Chart 6 / ACS 2022',
    },
    narrative:
      'Velocity over everything. High rent burden persists, but the social story still calls this opportunity.',
    image: { src: 'nyc.png', alt: 'Empire State Building NYC skyline, black and white' },
  },
}

export const cityOrder = ['toronto', 'vancouver', 'london', 'nyc'] as const

// The source publishes one-decimal multiples; do not claim these were recomputed
// from unpublished income/home-price pairs.
export function ratio(c: City): number {
  return c.medianMultiple
}

export function ratioBarPercent(value: number, maximum: number): number {
  if (!Number.isFinite(value) || !Number.isFinite(maximum) || maximum <= 0 || value < 0)
    throw new RangeError('Ratios and chart maximum must be non-negative finite numbers')
  return (value / maximum) * 100
}

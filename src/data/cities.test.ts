import { describe, expect, it } from 'vitest'
import { AFFORDABLE_CUTOFF, cities, cityOrder, ratio, ratioBarPercent } from './cities'
import { source, sources } from './citations'

// 2025 Demographia edition, Table 4: 2024 Q3 metropolitan median multiples.
const reported = {
  toronto: 8.4,
  vancouver: 11.8,
  london: 9.1,
  nyc: 7.4,
} as const

describe('Cities source fidelity (#9)', () => {
  it('uses exactly the four source-published one-decimal metropolitan multiples', () => {
    expect(cityOrder).toEqual(['toronto', 'vancouver', 'london', 'nyc'])
    for (const key of cityOrder) {
      const c = cities[key]
      expect(ratio(c)).toBe(reported[key])
      expect(c.ownershipDataYear).toBe(2024)
      expect(c.ownershipEditionYear).toBe(2025)
      expect(c.incomeType).toBe('Gross median household income')
      expect(c.market).toMatch(/market$/)
      expect(c.ownershipSourceLocation).toMatch(/Table 4/)
      expect(source(c.ownershipSourceId)?.url).toContain('2025-Edition.pdf')
    }
  })

  it('does not put unverified median monetary pairs back into the source dataset', () => {
    for (const city of Object.values(cities)) {
      expect(city).not.toHaveProperty('medianIncome')
      expect(city).not.toHaveProperty('medianHomePrice')
    }
  })

  it('scales every bar and its benchmark with a common unitless ratio axis', () => {
    const max = Math.max(...cityOrder.map((k) => ratio(cities[k])))
    expect(max).toBe(11.8)
    expect(AFFORDABLE_CUTOFF).toBe(3)
    expect(ratioBarPercent(max, max)).toBe(100)
    expect(ratioBarPercent(cities.toronto.medianMultiple, max)).toBeCloseTo(71.1864, 3)
    expect(ratioBarPercent(AFFORDABLE_CUTOFF, max)).toBeCloseTo(25.4237, 3)
    expect(() => ratioBarPercent(2, 0)).toThrow(RangeError)
    expect(() => ratioBarPercent(-1, 10)).toThrow(RangeError)
  })

  it('keeps heterogenous burden denominators and original data years explicit', () => {
    expect(cities.toronto.burden).toBeUndefined()
    expect(cities.vancouver.burden).toBeUndefined()
    expect(cities.london.burden).toMatchObject({
      year: 2024,
      value: '77% of wages',
      sourceId: 'gla_2024',
    })
    expect(cities.london.burden?.definition).toContain('25–29')
    expect(cities.nyc.burden).toMatchObject({
      year: 2022,
      value: '52.1%',
      sourceId: 'nyc_comptroller_2024',
    })
    expect(cities.nyc.burden?.definition).toContain('renter households')
  })

  it('provides a verifiable link for every displayed statistic', () => {
    for (const c of Object.values(cities)) {
      expect(source(c.ownershipSourceId)?.url).toMatch(/^https:\/\//)
      if (c.burden) expect(source(c.burden.sourceId)?.url).toMatch(/^https:\/\//)
    }
    expect(Object.keys(sources)).not.toContain('linkedin_depression')
    expect(source('social_comparison_2014')?.url).toBe('https://doi.org/10.1037/ppm0000047')
  })
})

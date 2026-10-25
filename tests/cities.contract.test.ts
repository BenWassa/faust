import { describe, expect, it } from 'vitest'
import { cities, cityOrder, ratio } from '../src/data/cities'
import { source } from '../src/data/citations'

// Shape-only integration contract; provenance and exact reported ratios are tested in src/data/cities.test.ts.
describe('Cities source-backed integration contract (#9)', () => {
  it('keeps four distinct city keys, currencies and verifiable source identifiers', () => {
    expect(cityOrder).toHaveLength(4)
    expect(new Set(cityOrder).size).toBe(4)
    for (const key of cityOrder) {
      const city = cities[key]
      expect(city?.key).toBe(key)
      expect(city.name.length).toBeGreaterThan(0)
      expect(['CAD', 'USD', 'GBP']).toContain(city.currency)
      expect(Number.isFinite(ratio(city))).toBe(true)
      expect(ratio(city)).toBeGreaterThan(0)
      expect(ratio(city)).toBe(city.medianMultiple)
      expect(city.ownershipSourceLocation).toMatch(/Table 4/)
      expect(source(city.ownershipSourceId)?.url).toMatch(/^https:\/\//)
      expect(city.market).toContain('market')
    }
  })
})

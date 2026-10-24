import { describe, expect, it } from 'vitest'
import { cities, cityOrder, ratio } from '../src/data/cities'

// Shared shape contract with #9, not a substitute for its source audit.
// Do not pin contested amounts, year or table references in this test.
describe('Cities integration contract (owned by #9)', () => {
  it('keeps four distinct city keys, valid currencies and computable ratios', () => {
    expect(cityOrder).toHaveLength(4)
    expect(new Set(cityOrder).size).toBe(4)
    for (const key of cityOrder) {
      const city = cities[key]
      expect(city?.key).toBe(key)
      expect(city.name.length).toBeGreaterThan(0)
      expect(['CAD', 'USD', 'GBP']).toContain(city.currency)
      expect(city.medianIncome).toBeGreaterThan(0)
      expect(city.medianHomePrice).toBeGreaterThan(0)
      expect(Number.isFinite(ratio(city))).toBe(true)
      expect(ratio(city)).toBeCloseTo(city.medianHomePrice / city.medianIncome, 12)
      expect(city.ownershipSource.trim()).not.toBe('')
      expect(city.rentSource.trim()).not.toBe('')
    }
  })
})

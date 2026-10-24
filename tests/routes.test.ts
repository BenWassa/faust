import { describe, expect, it } from 'vitest'
import { url, asset } from '../src/lib/url'
import { archetypes } from '../src/data/archetypes'

// Vitest exposes '/' as BASE_URL even when the Astro static build uses /faust/.
// Test relative URL semantics here; check-build.mjs asserts the deployed base.
const prefix = import.meta.env.BASE_URL.replace(/\/$/, '')

describe('base-path URL helper contracts', () => {
  it('handles home, local paths and assets without duplicate separators', () => {
    expect(url()).toBe(prefix || '/')
    expect(url('diagnostic')).toBe(`${prefix}/diagnostic`)
    expect(url('/cities')).toBe(`${prefix}/cities`)
    expect(asset('icon_round.png')).toBe(`${prefix}/icon_round.png`)
  })

  it('provides distinct result destinations for every archetype', () => {
    const routes = archetypes.map((a) => url(`archetypes/${a.slug}`))
    expect(new Set(routes).size).toBe(5)
    for (const route of routes) expect(route).toMatch(new RegExp(`^${prefix}/archetypes/[a-z]+$`))
  })
})

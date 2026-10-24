import { describe, expect, it } from 'vitest'
import { url, asset } from '../src/lib/url'
import { archetypes } from '../src/data/archetypes'

describe('GitHub Pages base-path route contracts', () => {
  it('builds local links under /faust without duplicate separators', () => {
    expect(url()).toBe('/faust')
    expect(url('diagnostic')).toBe('/faust/diagnostic')
    expect(url('/cities')).toBe('/faust/cities')
    expect(asset('icon_round.png')).toBe('/faust/icon_round.png')
  })

  it('provides a distinct result destination for every archetype', () => {
    const routes = archetypes.map((a) => url(`archetypes/${a.slug}`))
    expect(new Set(routes).size).toBe(5)
    for (const route of routes) expect(route).toMatch(/^\/faust\/archetypes\/[a-z]+$/)
  })
})

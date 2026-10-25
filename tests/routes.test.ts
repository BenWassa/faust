import { describe, expect, it } from 'vitest'
import { url, asset } from '../src/lib/url'
import { archetypes } from '../src/data/archetypes'

// Vitest exposes '/' as BASE_URL; static smoke checks validate the deployed /faust/ prefix.
const prefix = import.meta.env.BASE_URL.replace(/\/+$/, '')

describe('base-path URL helper contracts', () => {
  it('handles home, directory routes, queries and file assets', () => {
    expect(url()).toBe(`${prefix}/`)
    expect(url('diagnostic')).toBe(`${prefix}/diagnostic/`)
    expect(url('/cities')).toBe(`${prefix}/cities/`)
    expect(url('machines?from=home')).toBe(`${prefix}/machines/?from=home`)
    expect(url('archetypes/watchman#details')).toBe(`${prefix}/archetypes/watchman/#details`)
    expect(asset('icon_round.png')).toBe(`${prefix}/icon_round.png`)
  })

  it('provides distinct result destinations for all five archetypes', () => {
    const routes = archetypes.map((a) => url(`archetypes/${a.slug}`))
    expect(new Set(routes).size).toBe(5)
    for (const route of routes) expect(route).toMatch(new RegExp(`^${prefix}/archetypes/[a-z]+/$`))
  })
})

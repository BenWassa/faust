#!/usr/bin/env node
// Validates the built static artifact without network access or browser tooling.
// Run after "npm run build": node scripts/smoke-pages.mjs.
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const dist = resolve('dist')
const origin = 'https://benwassa.github.io'
const base = '/faust/'
const routes = [
  '',
  'system',
  'cities',
  'machines',
  'casualties',
  'exits',
  'practice',
  'resources',
  'diagnostic',
  'archetypes/watchman',
  'archetypes/visible',
  'archetypes/faithful',
  'archetypes/departed',
  'archetypes/architect',
]
const staticAssets = [
  'icon_round.png',
  'AMBITION_ICON.png',
  'AMBITION_Vector.png',
  'toronto.png',
  'vancouver.png',
  'london.png',
  'nyc.png',
  'manifest.json',
  'robots.txt',
  'sitemap.xml',
]
function file(path) {
  const target = join(dist, path)
  assert.ok(existsSync(target), `Missing build output: ${target}`)
  return readFileSync(target, 'utf8')
}
function attr(html, expression, explanation) {
  const match = html.match(expression)
  assert.ok(match, `Missing ${explanation}`)
  return match[1]
}
function checkLocalHref(value, route) {
  if (/^(https?:|mailto:|tel:|data:|#)/.test(value)) return
  assert.ok(value.startsWith(base), `Base path broken in ${route || 'home'}: ${value}`)
  const pathname = value.split(/[?#]/)[0]
  const relative = pathname.slice(base.length)
  if (!relative) return
  const target = relative.endsWith('/')
    ? join(relative, 'index.html')
    : relative
  assert.ok(existsSync(join(dist, target)), `Link target missing for ${route || 'home'}: ${value}`)
}
for (const asset of staticAssets) file(asset)

for (const route of routes) {
  const label = route || 'home'
  const html = file(route ? join(route, 'index.html') : 'index.html')
  const expected = `${origin}${base}${route ? `${route}/` : ''}`
  const canonical = attr(html, /<link\s+rel="canonical"\s+href="([^"]+)"/, `canonical: ${label}`)
  assert.equal(canonical, expected, `Wrong canonical: ${label}`)
  const ogUrl = attr(html, /<meta\s+property="og:url"\s+content="([^"]+)"/, `og:url: ${label}`)
  assert.equal(ogUrl, canonical, `og:url mismatch: ${label}`)
  const ogImage = attr(html, /<meta\s+property="og:image"\s+content="([^"]+)"/, `og:image: ${label}`)
  const twitterImage = attr(html, /<meta\s+name="twitter:image"\s+content="([^"]+)"/, `twitter:image: ${label}`)
  assert.equal(ogImage, twitterImage, `Social image mismatch: ${label}`)
  assert.ok(ogImage.startsWith(`${origin}${base}`), `Social image must be absolute: ${label}`)
  checkLocalHref(new URL(ogImage).pathname, label)
  const description = attr(html, /<meta\s+name="description"\s+content="([^"]+)"/, `description: ${label}`)
  assert.ok(description.length > 30, `Description too short: ${label}`)
  assert.match(html, /<meta\s+property="og:title"/, `Missing og:title: ${label}`)
  assert.match(html, /<meta\s+name="twitter:card"/, `Missing Twitter card: ${label}`)
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    checkLocalHref(match[1], label)
  }
}
const sitemap = file('sitemap.xml')
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
assert.deepEqual(urls, routes.map((route) => `${origin}${base}${route ? `${route}/` : ''}`), 'Sitemap must match all generated routes')
assert.ok(file('robots.txt').includes(`Sitemap: ${origin}${base}sitemap.xml`), 'robots sitemap mismatch')
const manifest = JSON.parse(file('manifest.json'))
assert.equal(manifest.start_url, base)
assert.equal(manifest.scope, base)
for (const icon of manifest.icons) checkLocalHref(icon.src, 'manifest')
console.log(`PASS: ${routes.length} prerendered pages, links, public assets, canonical URLs, social images, sitemap and manifest`)

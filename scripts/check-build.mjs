// Fail PR CI if required pages or base-path assets are missing in the static build.
import { existsSync, readFileSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'
import assert from 'node:assert/strict'

const dist = resolve('dist')
const base = '/faust/'
const slugs = ['watchman', 'visible', 'faithful', 'departed', 'architect']
const pages = [
  '', 'system', 'cities', 'machines', 'casualties', 'exits',
  'practice', 'resources', 'diagnostic',
  ...slugs.map((slug) => `archetypes/${slug}`),
]
assert(existsSync(dist), 'dist/ missing: run npm run build before check:build')

for (const route of pages) {
  const file = join(dist, route, 'index.html')
  assert(existsSync(file), `Missing built route: /faust/${route}`)
  const html = readFileSync(file, 'utf8')
  assert(html.includes('<html'), `Invalid HTML output for ${route || 'home'}`)

  // Absolute references to project-hosted files must resolve after stripping /faust/.
  const references = html.matchAll(/\b(?:src|href)=(["'])([^"']+)\1/g)
  for (const [, , value] of references) {
    const pathname = new URL(value, 'https://benwassa.github.io').pathname
    if (!pathname.startsWith(base)) continue
    const relative = decodeURIComponent(pathname.slice(base.length))
    if (!/\.(?:js|css|png|jpe?g|webp|svg|gif|ico|json|woff2?)$/i.test(relative)) continue
    const assetFile = join(dist, relative)
    assert(existsSync(assetFile) && statSync(assetFile).isFile(),
      `Broken built asset in ${route || 'home'}: ${pathname}`)
  }
}

const html = readFileSync(join(dist, 'diagnostic', 'index.html'), 'utf8')
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
const payloadTag = scripts.find((match) => match[1].includes('data-result-data'))
assert(payloadTag, 'Diagnostic result payload is missing')
const results = JSON.parse(payloadTag[2])
assert.equal(Object.keys(results).length, slugs.length)
for (const slug of slugs) {
  assert.equal(results[slug]?.href, `/faust/archetypes/${slug}/`,
    `Invalid result URL for ${slug}`)
}

console.log(`Validated ${pages.length} routes, local asset references, and all ${slugs.length} Diagnostic result links.`)

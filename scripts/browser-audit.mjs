// Browser evidence collector for #11/#12. Run from the accessibility-audit workflow.
// Dependencies are installed in CI without changing package.json (owned by #13).
import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

const [baseline, candidate, output = 'audit-output'] = process.argv.slice(2)
if (!baseline || !candidate) throw new Error('Usage: node scripts/browser-audit.mjs BASE_URL CANDIDATE_URL OUTPUT_DIR')
const routes = ['', 'system/', 'cities/', 'machines/', 'casualties/', 'exits/', 'practice/', 'resources/', 'diagnostic/',
  ...['architect', 'departed', 'faithful', 'visible', 'watchman'].map((slug) => `archetypes/${slug}/`)]
const widths = [320, 375, 390, 768, 1024, 1440]
const screenshotRoutes = new Set(['', 'cities/', 'machines/', 'diagnostic/'])
const screenshotWidths = new Set([320, 390, 768, 1440])
const records = []
const violations = []
const smoke = []
const mobile = []
await fs.mkdir(output, { recursive: true })
const browser = await chromium.launch({ headless: true })

const pageData = async (page) => page.evaluate(() => {
  const doc = document.documentElement
  const nav = performance.getEntriesByType('navigation')[0]
  const controls = [...document.querySelectorAll('a[href],button,input,select,textarea,[role="button"]')]
    .filter((e) => {
      const s = getComputedStyle(e)
      return s.visibility !== 'hidden' && s.display !== 'none' && e.getClientRects().length
    })
  const small = controls.map((e) => {
    const r = e.getBoundingClientRect()
    return { label: (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 80), width: Math.round(r.width), height: Math.round(r.height) }
  }).filter((r) => r.width < 24 || r.height < 24)
  return {
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    overflowPx: Math.max(0, doc.scrollWidth - doc.clientWidth),
    smallControls: small.slice(0, 15),
    smallControlCount: small.length,
    dclMs: Math.round(nav?.domContentLoadedEventEnd || 0),
    resourceKb: Math.round(performance.getEntriesByType('resource').reduce((n, x) => n + (x.transferSize || 0), 0) / 1024),
    cls: Math.round((window.__faustCLS || 0) * 1000) / 1000,
    missingAlt: [...document.querySelectorAll('img:not([alt])')].length,
    h1Count: document.querySelectorAll('h1').length,
  }
})

async function openPage(context, site, route) {
  const page = await context.newPage()
  const url = new URL(route, site).href
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
  await page.waitForTimeout(200)
  return page
}

for (const [stage, site] of [['before', baseline], ['after', candidate]]) {
  for (const theme of ['light', 'dark']) {
    for (const width of widths) {
      const context = await browser.newContext({
        viewport: { width, height: 850 },
        colorScheme: theme,
        reducedMotion: 'reduce',
        deviceScaleFactor: 1,
      })
      await context.addInitScript((mode) => {
        try { localStorage.setItem('faust-theme', mode) } catch {}
        window.__faustCLS = 0
        try {
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) window.__faustCLS += entry.value
            }
          }).observe({ type: 'layout-shift', buffered: true })
        } catch {}
      }, theme)
      for (const route of routes) {
        const page = await openPage(context, site, route)
        const measurement = await pageData(page)
        records.push({ stage, theme, width, route: route || 'home', ...measurement })
        if (screenshotRoutes.has(route) && screenshotWidths.has(width)) {
          const name = route ? route.replaceAll('/', '-') : 'home'
          const dest = path.join(output, 'screenshots', stage, theme, `${width}-${name}.png`)
          await fs.mkdir(path.dirname(dest), { recursive: true })
          await page.screenshot({ path: dest, animations: 'disabled' })
        }
        if (stage === 'after' && width === 390) {
          const axe = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze()
          for (const v of axe.violations) {
            violations.push({ route: route || 'home', theme, id: v.id, impact: v.impact, description: v.help, nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })).slice(0, 12) })
          }
        }
        await page.close()
      }
      await context.close()
    }
  }
}

const check = (name, pass, details = '') => {
  smoke.push({ name, pass: Boolean(pass), details })
}
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
let page = await openPage(context, candidate, '')
await page.keyboard.press('Tab')
check('Skip link first in focus order', await page.evaluate(() => document.activeElement?.textContent?.includes('Skip to main content')))
const menu = page.locator('#mobile-menu-btn')
await menu.focus()
await page.keyboard.press('Enter')
check('Keyboard opens menu and updates ARIA', await menu.getAttribute('aria-expanded') === 'true')
await page.keyboard.press('Escape')
check('Escape closes menu and restores focus', await menu.getAttribute('aria-expanded') === 'false' && await menu.evaluate((el) => document.activeElement === el))
const theme = page.locator('#theme-toggle')
await theme.click()
check('Theme button has toggle state', await theme.getAttribute('aria-pressed') === 'true')
await page.reload({ waitUntil: 'domcontentloaded' })
check('Theme choice persists on reload', await page.locator('#theme-toggle').getAttribute('aria-pressed') === 'true')
await page.close()

page = await openPage(context, candidate, 'machines/')
const trap = page.locator('[data-trap-toggle]').first()
await trap.focus()
await page.keyboard.press('Enter')
check('Machines trap opens from keyboard with ARIA', await trap.getAttribute('aria-expanded') === 'true')
await trap.press('Enter')
check('Machines trap closes with ARIA', await trap.getAttribute('aria-expanded') === 'false')
await page.locator('[data-feed-trap]').first().click()
check('Machines feed click transfers focus to disclosure', await page.evaluate(() => document.activeElement?.hasAttribute('data-trap-toggle')))
await page.close()

page = await openPage(context, candidate, 'diagnostic/')
try {
  await page.locator('[data-quiz-start]').focus()
  await page.keyboard.press('Enter')
  for (let i = 0; i < 10; i++) {
    const option = page.locator(`[data-question="${i}"] [data-option]`).first()
    await option.waitFor({ state: 'visible', timeout: 3500 })
    await option.focus()
    await page.keyboard.press('Enter')
  }
  await page.locator('[data-quiz-result]').waitFor({ state: 'visible', timeout: 3500 })
  check('Diagnostic keyboard completion (feature owned by #10)', true)
} catch (err) {
  check('Diagnostic keyboard completion (feature owned by #10)', false, String(err))
}
await page.close()
await context.close()

// Text resize is an additional proxy, not a substitute for manual browser zoom testing.
const resize = await browser.newContext({ viewport: { width: 390, height: 844 } })
for (const route of ['', 'machines/', 'cities/', 'diagnostic/']) {
  const p = await openPage(resize, candidate, route)
  await p.evaluate(() => { document.documentElement.style.fontSize = '200%' })
  const measurement = await pageData(p)
  const protrusions = measurement.overflowPx > 0 ? await p.evaluate(() => {
    const width = document.documentElement.clientWidth
    return [...document.querySelectorAll('body *')]
      .filter((el) => !el.closest('.overflow-x-auto'))
      .map((el) => {
        const r = el.getBoundingClientRect()
        return { tag: el.tagName.toLowerCase(), className: typeof el.className === 'string' ? el.className.slice(0, 140) : '', text: (el.textContent || '').trim().slice(0, 35), right: Math.round(r.right), left: Math.round(r.left) }
      })
      .filter((r) => r.right > width + 2 || r.left < -2)
      .sort((a,b) => b.right-a.right).slice(0, 12)
  }) : []
  smoke.push({ name: `200% root-font simulation: ${route || 'home'}`, pass: measurement.overflowPx === 0, details: `${measurement.overflowPx}px horizontal overflow` + (protrusions.length ? '; offending bounds: ' + JSON.stringify(protrusions) : '') })
  await p.close()
}
await resize.close()

// Representative synthetic midrange mobile performance: 4x CPU, 150ms latency, ~1.6Mbps.
const perfContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
const perfPage = await perfContext.newPage()
const session = await perfContext.newCDPSession(perfPage)
await session.send('Emulation.setCPUThrottlingRate', { rate: 4 })
await session.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 75000 })
for (const route of ['', 'cities/', 'machines/', 'diagnostic/']) {
  await perfPage.goto(new URL(route, candidate).href, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await perfPage.waitForTimeout(300)
  mobile.push({ route: route || 'home', ...await pageData(perfPage) })
}
await perfContext.close()
await browser.close()

const pairs = records.filter((r) => r.stage === 'after').map((r) => {
  const previous = records.find((p) => p.stage === 'before' && p.theme === r.theme && p.width === r.width && p.route === r.route)
  return { route: r.route, theme: r.theme, width: r.width, before: previous?.overflowPx ?? null, after: r.overflowPx, increased: r.overflowPx > (previous?.overflowPx ?? 0) }
})
const overflow = pairs.filter((x) => x.after > 1)
const newOverflow = pairs.filter((x) => x.increased && x.after > 1)
const report = { configuration: { widths, themes: ['light','dark'], routes, reducedMotion: 'reduce', screenshots: 'viewport, before and after', axe: 'WCAG 2/2.1/2.2 A/AA sampled pages at 390px', mobileThrottle: '4x CPU; 150ms RTT; 1.6Mbps' }, records, overflow, newOverflow, violations, smoke, mobile }
await fs.writeFile(path.join(output, 'results.json'), JSON.stringify(report, null, 2))
const md = [
  '# Faust accessibility and responsive browser run',
  '',
  `Viewports: ${widths.join(', ')}px; 14 routes; light/dark; reduced motion. Screenshots in \`screenshots/before\` and \`screenshots/after\`.`,
  `Measured states: ${records.length}. Remaining horizontal overflow states: ${overflow.length}; regressions: ${newOverflow.length}.`,
  `Sampled axe violations: ${violations.length} across 14 routes and 2 themes (may repeat across pages).`,
  '',
  '## Keyboard smoke',
  ...smoke.map((x) => `- ${x.pass ? 'PASS' : 'FAIL'} — ${x.name}${x.details ? ': ' + x.details : ''}`),
  '',
  '## Overflow',
  ...(overflow.length ? overflow.map((x) => `- ${x.route}, ${x.width}px, ${x.theme}: ${x.before}px before → ${x.after}px after`) : ['- None measured']),
  '',
  '## Simulated mobile (4x CPU, 1.6 Mbps, 150ms latency)',
  ...mobile.map((x) => `- ${x.route}: DOMContentLoaded ${x.dclMs}ms; transferred resource ${x.resourceKb} KiB; overflow ${x.overflowPx}px; CLS ${x.cls}`),
  '',
  '## Boundaries',
  'Axe is not a substitute for manual screen-reader, keyboard focus-order, high-contrast, real device and 200% browser zoom tests. Text scaling check is a proxy. Local preview timing is not production Lighthouse.',
]
await fs.writeFile(path.join(output, 'summary.md'), md.join('\n') + '\n')
process.stdout.write(md.join('\n') + '\n')
if (newOverflow.length || smoke.some((x) => !x.pass && !x.name.includes('Diagnostic'))) process.exitCode = 1

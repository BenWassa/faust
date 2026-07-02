// One-shot generator: wraps the confrontational archetype markdown in
// frontmatter for the Astro content collection. Safe to re-run.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const outDir = resolve(root, 'src/content/archetypes')
mkdirSync(outDir, { recursive: true })

const meta = {
  watchman: {
    num: '01', order: 1, icon: 'visibility',
    tagline: 'Vigilant defense against uncertainty',
    coreLogic: 'If I don’t stay vigilant, I’ll lose ground I can’t get back.',
    medicine: 'The floor is much closer than you think. What if falling isn’t fatal?',
  },
  visible: {
    num: '02', order: 2, icon: 'person',
    tagline: 'Performance as identity',
    coreLogic: 'If I’m not visible, I don’t exist professionally.',
    medicine: 'You’ve built a stadium of strangers who applaud when you score but disappear when the game ends.',
  },
  faithful: {
    num: '03', order: 3, icon: 'church',
    tagline: 'Work as calling',
    coreLogic: 'Work is the architecture of meaning. Without it, I’m just… here.',
    medicine: 'The work won’t love you back.',
  },
  departed: {
    num: '04', order: 4, icon: 'person_off',
    tagline: 'Quiet withdrawal',
    coreLogic: 'If the system is broken, participation is self-harm.',
    medicine: 'The injury has healed. You’re protecting the scar now.',
  },
  architect: {
    num: '05', order: 5, icon: 'architecture',
    tagline: 'Strategic detachment',
    coreLogic: 'Work is one domain of a larger life, not the measure of it.',
    medicine: 'You’re not free. You’re just working harder to maintain the appearance of freedom.',
  },
}

const titleMap = {
  watchman: 'The Watchman',
  visible: 'The Visible',
  faithful: 'The Faithful',
  departed: 'The Departed',
  architect: 'The Architect',
}

const esc = (s) => s.replace(/"/g, '\\"')

for (const slug of Object.keys(meta)) {
  const raw = readFileSync(resolve(root, `archetypes/${slug}.md`), 'utf8')
  // Drop the leading "# The X" heading — the layout renders the title.
  const body = raw.replace(/^#\s+.*\n+/, '')
  const m = meta[slug]
  const fm = [
    '---',
    `title: "${esc(titleMap[slug])}"`,
    `num: "${m.num}"`,
    `order: ${m.order}`,
    `icon: "${m.icon}"`,
    `tagline: "${esc(m.tagline)}"`,
    `coreLogic: "${esc(m.coreLogic)}"`,
    `medicine: "${esc(m.medicine)}"`,
    '---',
    '',
  ].join('\n')
  writeFileSync(resolve(outDir, `${slug}.md`), fm + body)
  console.log(`wrote src/content/archetypes/${slug}.md`)
}

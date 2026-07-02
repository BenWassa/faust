// Archetype metadata used by cards, cross-links, and the diagnostic result.
// Long-form content lives in src/content/archetypes/*.md.
export interface ArchetypeMeta {
  slug: string
  num: string
  title: string
  icon: string
  tagline: string
  coreLogic: string
  medicine: string
}

export const archetypes: ArchetypeMeta[] = [
  {
    slug: 'watchman',
    num: '01',
    title: 'The Watchman',
    icon: 'visibility',
    tagline: 'Vigilant defense against uncertainty',
    coreLogic: 'If I don’t stay vigilant, I’ll lose ground I can’t get back.',
    medicine: 'The floor is much closer than you think. What if falling isn’t fatal?',
  },
  {
    slug: 'visible',
    num: '02',
    title: 'The Visible',
    icon: 'person',
    tagline: 'Performance as identity',
    coreLogic: 'If I’m not visible, I don’t exist professionally.',
    medicine:
      'You’ve built a stadium of strangers who applaud when you score but disappear when the game ends.',
  },
  {
    slug: 'faithful',
    num: '03',
    title: 'The Faithful',
    icon: 'church',
    tagline: 'Work as calling',
    coreLogic: 'Work is the architecture of meaning. Without it, I’m just… here.',
    medicine: 'The work won’t love you back.',
  },
  {
    slug: 'departed',
    num: '04',
    title: 'The Departed',
    icon: 'person_off',
    tagline: 'Quiet withdrawal',
    coreLogic: 'If the system is broken, participation is self-harm.',
    medicine: 'The injury has healed. You’re protecting the scar now.',
  },
  {
    slug: 'architect',
    num: '05',
    title: 'The Architect',
    icon: 'architecture',
    tagline: 'Strategic detachment',
    coreLogic: 'Work is one domain of a larger life, not the measure of it.',
    medicine: 'You’re not free. You’re just working harder to maintain the appearance of freedom.',
  },
]

export const archetypeBySlug = Object.fromEntries(archetypes.map((a) => [a.slug, a]))

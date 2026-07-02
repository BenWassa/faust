// Canonical chapter order + metadata for nav, progress, and cross-links.
export interface Chapter {
  num: string
  slug: string
  title: string
  sub: string
  icon: string
}

export const chapters: Chapter[] = [
  { num: '01', slug: 'system', title: 'The System', sub: 'The Tyranny of Merit', icon: 'grid_view' },
  { num: '02', slug: 'cities', title: 'The Cities', sub: 'Where ambition pays rent', icon: 'location_city' },
  { num: '03', slug: 'machines', title: 'The Machines', sub: 'Engines of envy', icon: 'devices' },
  { num: '04', slug: 'casualties', title: 'The Casualties', sub: 'Five defense mechanisms', icon: 'psychology' },
  { num: '05', slug: 'exits', title: 'The Exits', sub: 'Alternative frameworks', icon: 'door_open' },
  { num: '06', slug: 'practice', title: 'The Practice', sub: 'Living differently', icon: 'communities' },
  { num: '07', slug: 'resources', title: 'Resources', sub: 'Tools for resistance', icon: 'library_books' },
]

// Primary nav is a trimmed subset; progress is computed over all chapters.
export const navChapters = chapters

export function chapterProgress(slug: string): number {
  const idx = chapters.findIndex((c) => c.slug === slug)
  if (idx < 0) return 0
  return Math.round(((idx + 1) / (chapters.length + 1)) * 100)
}

export function nextChapter(slug: string): Chapter | null {
  const idx = chapters.findIndex((c) => c.slug === slug)
  if (idx < 0 || idx >= chapters.length - 1) return null
  return chapters[idx + 1]
}

export function prevChapter(slug: string): Chapter | null {
  const idx = chapters.findIndex((c) => c.slug === slug)
  if (idx <= 0) return null
  return chapters[idx - 1]
}

// Base-aware routes are directories in Astro's static GitHub Pages build.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '')

export function url(path = ''): string {
  const [, pathname = '', suffix = ''] = path.match(/^([^?#]*)(.*)$/) ?? []
  const route = pathname.replace(/^\/+|\/+$/g, '')
  return `${BASE}/${route ? `${route}/` : ''}${suffix}`
}

// Public assets are files, not routes: never append a directory slash.
export function asset(file: string): string {
  return `${BASE}/${file.replace(/^\/+/, '')}`
}

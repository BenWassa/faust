// Base-path aware URL helper for GitHub Pages project-site deploys.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export function url(path = ''): string {
  if (!path) return BASE || '/'
  return `${BASE}/${path.replace(/^\//, '')}`
}

export function asset(file: string): string {
  return url(file)
}

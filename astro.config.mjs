// @ts-check
import { defineConfig } from 'astro/config'

// Project Faust — The Architecture of Ambition
// Deployed as a GitHub Pages project site at benwassa.github.io/faust/
// Tailwind v3 is processed via postcss.config.js (no framework integration needed).
export default defineConfig({
  site: 'https://benwassa.github.io',
  base: '/faust',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
})

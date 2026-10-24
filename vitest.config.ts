import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Match the Astro GitHub Pages project base when testing URL helpers.
  base: '/faust/',
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
  },
})

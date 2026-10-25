import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Vitest uses '/' for BASE_URL; the built /faust/ prefix is checked after Astro build.
  test: {
    include: ['tests/**/*.test.ts', 'src/data/**/*.test.ts'],
    environment: 'node',
    environmentOptions: { jsdom: { url: 'https://example.test/faust/diagnostic' } },
    clearMocks: true,
    restoreMocks: true,
  },
})

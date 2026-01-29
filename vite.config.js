import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        watchman: resolve(__dirname, 'archetypes/watchman.html'),
        visible: resolve(__dirname, 'archetypes/visible.html'),
        faithful: resolve(__dirname, 'archetypes/faithful.html'),
        departed: resolve(__dirname, 'archetypes/departed.html'),
        architect: resolve(__dirname, 'archetypes/architect.html')
      }
    }
  }
})

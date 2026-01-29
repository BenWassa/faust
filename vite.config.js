import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        watchman: resolve(__dirname, 'src/archetypes/watchman.html'),
        visible: resolve(__dirname, 'src/archetypes/visible.html'),
        faithful: resolve(__dirname, 'src/archetypes/faithful.html'),
        departed: resolve(__dirname, 'src/archetypes/departed.html'),
        architect: resolve(__dirname, 'src/archetypes/architect.html')
      }
    }
  }
})

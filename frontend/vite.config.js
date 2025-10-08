import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.', // current folder is frontend root
  base: '/', // served base path
  build: {
    outDir: '../assets/src/public',  // <-- your target folder
    emptyOutDir: false,              // keep existing static files
    manifest: true,                  // optional, for hashed filenames
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './randomax',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
})

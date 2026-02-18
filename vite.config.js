import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  base: '/qwik/',
  plugins: [
    qwikVite({
      csr: true,
    }),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})

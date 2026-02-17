import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  // El secreto: Usar './' hace que Qwik busque sus archivos relativamente
  base: './', 
  plugins: [
    qwikVite({
      csr: true,
    }),
  ],
  build: {
    outDir: 'dist',
    // Esto ayuda a GitHub Pages a no confundirse con carpetas ocultas
    emptyOutDir: true,
  }
})

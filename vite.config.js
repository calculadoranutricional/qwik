import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  // Base para Vite (activos estáticos)
  base: '/qwik/', 
  plugins: [
    qwikVite({
      csr: true,
      // Forzamos a Qwik a usar la ruta completa para el build
      base: '/qwik/build/',
    }),
  ],
  build: {
    // Aseguramos que los assets se generen en la carpeta correcta
    outDir: 'dist',
  }
})

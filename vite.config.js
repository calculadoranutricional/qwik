import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  base: '/qwik/', 
  plugins: [
    qwikVite({
      csr: true,
      // Esta es la ruta exacta donde GitHub Pages guardará los trozos del contador
      base: '/qwik/build/', 
    }),
  ],
})

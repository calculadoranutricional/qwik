import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'

export default defineConfig({
  base: '/qwik/',
  plugins: [
    qwikVite({
      csr: true,
      // Indispensable para que los chunks del contador carguen en subdirectorios
      vendorRoots: [],
      qwikCity: false,
      base: '/qwik/build/',
    }),
  ],
})

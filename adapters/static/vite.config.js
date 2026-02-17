import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig(() => {
  return {
    plugins: [
      qwikVite({
        base: '/qwik/', // Forzamos la base aquí también
      }),
    ],
  };
});

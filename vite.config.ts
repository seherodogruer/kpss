import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/kpss/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@core': resolve(__dirname, 'src/core'),
      '@content': resolve(__dirname, 'src/content'),
      '@features': resolve(__dirname, 'src/features'),
      '@drawing': resolve(__dirname, 'src/drawing'),
      '@ui': resolve(__dirname, 'src/ui'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: true,
  },
  server: {
    port: 5173,
  },
});

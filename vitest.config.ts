import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.ts', 'tests/integration/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/content/data/**'],
    },
  },
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
});

import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    isolate: true,
    environment: 'jsdom',
    setupFiles: './app/__tests__/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['**/*.tsx'],
      exclude: [
        '**/node_modules/**',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        'app/__tests__/setup.ts',
      ],
      provider: 'istanbul',
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 70,
        lines: 70,
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
    },
  },
});

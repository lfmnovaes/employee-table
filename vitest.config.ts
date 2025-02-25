import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/libs': path.resolve(__dirname, './src/libs'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/enums': path.resolve(__dirname, './src/enums'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
});

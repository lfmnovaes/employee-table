import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 5173,
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

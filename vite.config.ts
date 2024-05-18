import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, './'),
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, './src/index.tsx'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  publicDir: path.resolve(__dirname, './public'),
});
/// <reference types="vitest" />

import * as path from 'path';

import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), reactRefresh({
    exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
    include: ['**/*.tsx']
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});

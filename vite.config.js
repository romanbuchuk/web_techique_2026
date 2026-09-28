import react from '@vitejs/plugin-react';
import process from 'node:process';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: process.env.CYPRESS_COVERAGE === 'true',
  },
  server: {
    watch: {
      ignored: ['**/coverage/**', '**/.nyc_output/**'],
    },
  },
  plugins: [
    react(),
    istanbul({
      include: ['src/**/*.js', 'src/**/*.jsx'],
      exclude: ['cypress/**'],
      extension: ['.js', '.jsx'],
      requireEnv: true,
      cypress: true,
      checkProd: true,
    }),
  ],
});

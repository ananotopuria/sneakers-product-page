import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // base: '/sneakers-product-page/starter_project',
  base: '/sneakers-product-page/',
});

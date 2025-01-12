import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://zukaalavidze.github.io/food-trucking/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true
      }
    },
    watch: {
      // The photo review page rewrites this file on every decision; reloading the page
      // each time would lose your place. Restart the dev server to play with new approvals.
      ignored: ['**/src/data/photoManifest.json', '**/data/photo-candidates.json']
    }
  }
});

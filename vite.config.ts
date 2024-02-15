import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => `src/app/assets/[name]-[hash].${assetInfo.name?.split('.')[1]}`,
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust the warning limit as needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example manualChunks configuration
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})

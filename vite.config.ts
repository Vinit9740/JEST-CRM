import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Raise chunk size warning threshold (our JS bundle is ~327 kB, expected for React)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor libs into a separate chunk for better caching
        manualChunks(id) {
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('node_modules/react') || id.includes('react-router')) return 'vendor';
        },
      },
    },
  },
})

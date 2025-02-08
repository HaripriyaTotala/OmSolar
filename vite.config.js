import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
  },
})

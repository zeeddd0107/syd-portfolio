import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Import the tailwind compliler plugin
import path from 'path' // Import Node's path utility to resolve directories

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'), // Map '@' to point to the 'src' directory
    },
  },
  server: {
    open: true, // Automatically open the browser on server start
  },
})

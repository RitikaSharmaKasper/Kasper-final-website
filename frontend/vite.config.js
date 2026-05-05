import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// This replaces __dirname which doesn't work in modern Vite
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{host:true,port:5173},
  resolve: {
    alias: {
      // This tells Vite that "@" means the "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
   
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Frontend-mentor-challenges/QR-component/',
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})

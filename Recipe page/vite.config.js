import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Frontend-mentor-challenges/recipe-page/',
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})

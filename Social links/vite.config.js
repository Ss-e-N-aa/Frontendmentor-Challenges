import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Frontend-mentor-challenges/social-links/',
  build: {
    outDir: "dist",
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Frontendmentor-Challenges/article-preview-component/',
  plugins: [react()],
})

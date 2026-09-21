import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@designcodeio/threeui/style.css': path.resolve(import.meta.dirname, 'src/shaders/threeui.css'),
      '@designcodeio/threeui': path.resolve(import.meta.dirname, 'src/shaders/sylva-living-world/SylvaLivingWorldScene.tsx'),
    },
  },
})

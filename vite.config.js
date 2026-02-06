import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tet-2026/', // <--- Tên repo của bạn phải nằm giữa 2 dấu gạch chéo
})
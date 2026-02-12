import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MyPortflio/', // مهم جداً عشان الـ CSS والـ JS يشتغلوا
})
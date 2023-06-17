import serverOption from './serverOption'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : serverOption,
  plugins: [react()]
})

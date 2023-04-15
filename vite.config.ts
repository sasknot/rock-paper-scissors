import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import eslint from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    eslint({
      eslintOptions: {
        cache: true,
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        cwd: path.resolve(__dirname, 'src')
      }
    })
  ],

  server: {
    port: 8080,
    open: false
  }
})

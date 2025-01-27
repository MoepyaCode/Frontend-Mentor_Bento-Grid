import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@app-components': resolve(root, 'components'),
      '@app-components/*': resolve(root, 'components/*'),
    },
  },
})
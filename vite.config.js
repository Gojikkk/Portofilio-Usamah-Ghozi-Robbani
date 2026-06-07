import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const root = process.cwd().replace(/\\/g, '/').replace(/^([A-Z]):/, (drive) => drive.toLowerCase())

export default defineConfig({
  root,
  plugins: [
    react(), tailwindcss(),
  ],
})

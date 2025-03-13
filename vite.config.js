import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from '@rollup/plugin-terser'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600, // Increase the warning limit (default is 500 KB)
    rollupOptions: {
      plugins: [terser()], // Ensure the correct Rollup plugin is used
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  plugins: [react()],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600, // Increase the warning limit (default is 500 KB)
    rollupOptions: {
      external: [
        'fsevents', 
        'os', 
        'node:fs', 
        'node:path', 
        'node:module', 
        'node:process', 
        'node:perf_hooks', 
        'node:fs/promises', 
        'node:crypto', 
        'node:dns', 
        'node:readline', 
        'node:buffer', 
        'node:events', 
        'node:v8', 
        'node:worker_threads', 
        'zlib', 
        'https', 
        'tls', 
        'assert', 
        'node:querystring', 
        'node:zlib', 
        'node:http', 
        'node:https', 
        'node:http2', 
        'node:os', 
        'node:crypto', 
        'node:util', 
        'node:vm', 
        'node:url', 
        'node:assert', 
        'node:process', 
        'node:module', 
        'node:perf_hooks', 
        'node:fs/promises', 
        'node:child_process', 
        'node:net', 
        'node:stream'
      ],
      plugins: [terser()], // Ensure the correct Rollup plugin is used
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
      onwarn(warning, warn) {
        // Ignore eval warnings for specific modules
        if (warning.code === 'EVAL' && (
          warning.id?.includes('three-stdlib') ||
          warning.id?.includes('@mediapipe')
        )) {
          return
        }
        // Ignore missing source map warnings for specific modules
        if (warning.code === 'SOURCEMAP_ERROR' && (
          warning.id?.includes('@mediapipe')
        )) {
          return
        }
        warn(warning)
      }
    },
    terserOptions: {
      compress: {
        // Remove console.logs in production
        drop_console: true,
        // Remove debugger statements
        drop_debugger: true
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    // Split chunks more effectively
    minify: 'terser',
    sourcemap: false
  },
  optimizeDeps: {
    exclude: [
      'three-stdlib',
      '@mediapipe/tasks-vision'
    ]
  },
  plugins: [react()],
  server: {
    port: 5179,
    open: true
  }
})
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      external: [/node_modules/, '/node_modules/carbon-components-svelte/css/all.css']
    }
  }
})

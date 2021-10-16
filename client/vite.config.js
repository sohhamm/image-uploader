import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import reactSvgPlugin from 'vite-plugin-react-svg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      // Default behavior when importing `.svg` files, possible options are: 'url' and `component`
      defaultExport: 'component',
    }),
  ],
})

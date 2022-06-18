import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'pages', replacement: '../pages' },
      { find: 'components', replacement: '/src/components' },
      { find: 'configs', replacement: '/src/configs' },
      { find: 'contexts', replacement: '/src/contexts' },
      { find: 'hooks', replacement: '/src/hooks' },
      { find: 'services', replacement: '/src/services' },
      { find: 'themes', replacement: '/src/themes' },
      { find: 'types', replacement: '/src/types' },
      { find: 'utils', replacement: '/src/utils' },
      { find: 'src', replacement: '/src' },
    ],
  },
})

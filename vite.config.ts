import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as ImportMetaEnv

  return {
    base: env.BASE_URL ?? '/',
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/apps/styles/additionals',
            dest: 'styles',
          },
          {
            src: 'src/apps/styles/*.scss',
            dest: 'styles',
          },
        ],
      }),
    ],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
        '/ws': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/ws/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#apps': fileURLToPath(new URL('./src/apps', import.meta.url)),
        '#pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '#widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
        '#features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '#entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
        '#shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/apps/styles/additionals" as *;',
        },
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        name: 'VueUIKit',
        fileName: 'vue-uikit',
        formats: ['es', 'cjs', 'umd', 'iife'],
      },
    },
  }
})

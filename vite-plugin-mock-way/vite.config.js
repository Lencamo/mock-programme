import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 注意：不同于mock-server，此处必须要通过代理去掉 VITE_BASE_API（大大的无语）
    proxy: {
      '/mock-api': {
        target: 'http://127.0.0.1:5174/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock\-api/, '')
      }
    }
  },
  plugins: [
    vue(),
    // 开启：【本地】vite-plugin-mock模拟
    viteMockServe({
      mockPath: 'mock',
      enable: process.env.NODE_ENV === 'development',
      watchFiles: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

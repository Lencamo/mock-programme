import { createApp } from 'vue'
import App from './App.vue'

// 开启：【线上】使用mock.js模拟
import { mockXHR } from '../mock/mock-core/mock-XHR'
if (import.meta.env.PROD) {
  mockXHR()
}

createApp(App).mount('#app')

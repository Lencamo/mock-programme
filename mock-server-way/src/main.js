import Vue from 'vue'
import App from './App.vue'

// 开启：【线上】使用mock.js模拟
import { mockXHR } from '../mock/mock-core/mock-XHR.js'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

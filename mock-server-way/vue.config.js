const { defineConfig } = require('@vue/cli-service')

const port = process.env.port || process.env.npm_config_port || 9527 // dev port

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: port,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true
      }
    },
    // 开启：【本地】mock-server模拟
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://localhost:${port}/mock`,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // },
    onBeforeSetupMiddleware: require('./mock/mock-core/mock-server.js')
  }
})

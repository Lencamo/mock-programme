## 一、mock-server-way

> 这个示例项目，可以用于`webpack5`环境下的数据模拟（mock），是一个不错的选择.

### 1、简介

&emsp;&emsp;mock server是我在 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 中看到的一种用于模拟数据的 [新方案](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#%E6%96%B0%E6%96%B9%E6%A1%88)

&emsp;&emsp;mock 是完全基于 [webpack-dev-serve](https://github.com/webpack/webpack-dev-server) 来实现的，所以在你启动前端服务的同时，mock-server 就会自动启动，而且这里还通过 [chokidar](https://github.com/paulmillr/chokidar) 来观察 mock 文件夹内容的变化。在发生变化时会清除之前注册的 mock-api 接口，重新动态挂载新的接口，从而支持<span style="background-color:yellow;color:black;">热更新</span>。

&emsp;&emsp;由于是一个真正的 server，所以你可以通过控制台中的 network，清楚的知道接口返回的数据结构。并且同时解决了之前 mockjs 会重写 XMLHttpRequest 对象，导致很多第三方库失效的问题。

### 2、文件分析

&emsp;&emsp;对原mock server内容进行的模块化划分，并将版本从`webpack4`升级到了`webpack5`

```sh
├── mock
    ├── index.js
    ├── mock-core # 核心代码
    │   ├── utils.js
    │   ├── mock-XHR.js # --> mock.js封装
    │   └── mock-server.js # --> mock-server封装
    └── modules  # api管理
        ├── cart.js
        └── products.js
```

### 3、安装使用

- 安装

```sh
npm install mockjs chokidar@2.1.5 chalk@2.4.2 -D
npm install axios
```

- 使用

```sh
npm run serve
```

### 4、注意事项

&emsp;&emsp;webpack5 和 webpack4 相比，webpack5：

- 将 [devServer.before](https://v4.webpack.js.org/configuration/dev-server/#devserverbefore) 改为了 [devServer.onBeforeSetupMiddleware](https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware)
- 将 [devServer.overlay](https://v4.webpack.js.org/configuration/dev-server/#devserveroverlay) 改为了 [devServer.client.overlay](https://webpack.js.org/configuration/dev-server/#overlay)

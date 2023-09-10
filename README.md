## 一、mock-server-way

> 这个示例项目，可以用于`webpack5`环境下的数据模拟（mock），是一个不错的选择.

### 1、简介

&emsp;&emsp;mock server 是我在 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 中看到的一种用于模拟数据的 [新方案](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#%E6%96%B0%E6%96%B9%E6%A1%88)

&emsp;&emsp;mock 是完全基于 [webpack-dev-serve](https://github.com/webpack/webpack-dev-server) 来实现的，所以在你启动前端服务的同时，mock-server 就会自动启动，而且这里还通过 [chokidar](https://github.com/paulmillr/chokidar) 来观察 mock 文件夹内容的变化。在发生变化时会清除之前注册的 mock-api 接口，重新动态挂载新的接口，从而支持<span style="background-color:yellow;color:black;">热更新</span>。

&emsp;&emsp;由于是一个真正的 server，所以你可以通过控制台中的 network，清楚的知道接口返回的数据结构。并且同时解决了之前 mockjs 会重写 XMLHttpRequest 对象，导致很多第三方库失效的问题。

### 2、文件分析

&emsp;&emsp;对原 mock server 内容进行的模块化划分，并将版本从`webpack4`升级到了`webpack5`

> [!WARNING]
> webpack5 和 webpack4 相比做了一些调整：将 [devServer.before](https://v4.webpack.js.org/configuration/dev-server/#devserverbefore) 改为了 [devServer.onBeforeSetupMiddleware](https://webpack.js.org/configuration/dev-server/#devserveronbeforesetupmiddleware)、将 [devServer.overlay](https://v4.webpack.js.org/configuration/dev-server/#devserveroverlay) 改为了 [devServer.client.overlay](https://webpack.js.org/configuration/dev-server/#overlay)

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

## 二、vite-plugin-mock-way

> 这个示例项目，可以用于`vite`环境下的数据模拟（mock）

### 1、简介

&emsp;&emsp;vite-plugin-mock 是我在 [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin) 中看到的一种用于模拟数据的方案。

&emsp;&emsp;根据[vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)的描述，它支持本地环境和生产环境，Connect 服务中间件在本地使用，mockjs 在生产环境中使用。

> [!WARNING]
> 经过我的亲身测试，vite-plugin-mock 在开发环境下可以到达 mock-server 一样的效果。但生产环境下表现并不如意，官方自己也说了，生产环境下不支持 header 的获取、RESTful 格式参数获取、mock 文件不要使用 node 模块等。除此之外，vite-plugin-mock 在使用时还不可以设置全局的 baseURL（得用代理解决）。并且关于生产环境的相关 issues，官方也没有进行相关 fix。

### 2、文件分析

&emsp;&emsp;vite-plugin-mock 和前面的 mock-server 使用基本一致，没有什么大的变动。

> 开发环境使用 vite-plugin-mock、生产环境使用 mockjs

```sh
├── mock
    ├── index.js
    ├── mock-core # （用于生产环境）
    │   ├── utils.js
    │   ├── mock-XHR.js
    └── modules  # api管理
        ├── cart.js
        └── products.js
```

### 3、安装使用

- 安装

```sh
npm install mockjs vite-plugin-mock -D
npm install axios
```

- 使用

```sh
npm run dev
```

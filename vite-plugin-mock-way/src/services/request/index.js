import axios from 'axios'

class RenRequest {
  constructor(config) {
    this.instance = axios.create(config)

    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        return error
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default RenRequest

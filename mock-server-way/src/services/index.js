import RenRequest from './request/index.js'
import { BASE_URL, TIMEOUT } from './request/config.js'

export const mockRequest = new RenRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export * from './modules/users.js'

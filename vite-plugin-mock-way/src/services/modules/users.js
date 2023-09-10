import { mockRequest } from '../index.js'

export function getUserList(page = 1, size = 5) {
  return mockRequest.get({
    url: '/user/userList',
    params: {
      page,
      size
    }
  })
}

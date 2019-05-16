// const app = getApp()

const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${process.env.VUE_APP_API_URL}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      success (request) {
        if (request.data.errcode === 0) {
          resolve(request.data)
        } else {
          reject(request.data)
        }
      },
      fail (error) {
        reject(error.data)
      }
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options) => {
  return request(url, { method: 'PUT', data: options })
}

// 不能声明DELETE（关键字）
const remove = (url, options) => {
  return request(url, { method: 'DELETE', data: options })
}

export default {
  get,
  post,
  put,
  remove
}

import request from '@/utils/request'

export default {
  test () {
    return request['get']('/test')
  }
}

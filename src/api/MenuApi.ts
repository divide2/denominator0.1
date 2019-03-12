import Api from './Api'

export default {
  tree() {
    return Api.get(`/api/v1/menu/tree`)
  }
}

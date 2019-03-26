import Api from './Api'
import store from '@/store/index'

export default {
  list() {
    return Api.get(`/api/v1/team/${store.getters.teamId}/stocks`)
  },
  inStock(params: any) {
    return Api.post('/api/v1/stock/in', params);
  },
  outStock(params: any) {
    return Api.post('/api/v1/stock/out', params);
  }
}

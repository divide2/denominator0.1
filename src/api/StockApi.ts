import Api from './Api'
import store from '@/store/index'

export default {
  list() {
    return Api.get(`/api/v1/team/${store.getters.teamId}/stocks`)
  }
}

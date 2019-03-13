import Api from './Api'
import {Warehouse} from '@/views/types/warehouse';
import store from '@/store/index'
import {Delete} from '@/views/types';

export default {
  list() {
    return Api.get(`/api/v1/team/${store.state.team.currTeam.id}/warehouses`)
  },
  add(data: Warehouse) {
    data.teamId = store.state.team.currTeam.id
    return Api.post('/api/v1/warehouse', data)
  },
  detail(id: string) {
    return Api.get(`/api/v1/warehouse/${id}`)
  },
  delete(data: Delete) {
    return Api.delete('/v1/warehouse', data)
  }
}

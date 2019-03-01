import Api from './Api'
import { ListParam, Product, ProductUpdate } from "@/views/types/product";
import { Delete } from "@/views/types";
import store from '@/store/index'

export default {
  add (data: Product) {
    return Api.post('/api/v1/product', data)
  },
  update (data: ProductUpdate) {
    return Api.put('/api/v1/product', data)
  },
  delete (data: Delete) {
    return Api.delete(`/api/v1/product`, data)
  },
  getDetail (id: number | string) {
    return Api.get(`/api/v1/product/${id}`)
  },
  list (data: ListParam) {
    return Api.get(`/api/v1/team/${store.state.team.currTeam.id}/products`, data)
  }

}
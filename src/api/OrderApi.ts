import Api from './Api'
import store from '@/store/index'
import { Delete } from "@/views/types";
import { Order, Search } from "@/views/types/order";

export default {
  list (data: Search) {
    return Api.get(`/api/v1/team/${store.state.team.currTeam.id}/order/receive`, data)
  },
  add (data: Order) {
    data.productSpecPrices = store.state.order.shopping_cart
    return Api.post('/api/v1/order', data)
  },
  detail (id: string) {
    return Api.get(`/api/v1/warehouse/${id}`)
  },
  delete (data: Delete) {
    return Api.delete('/v1/warehouse', data)
  }
}

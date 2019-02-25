import Api from './Api'
import { Product, ProductUpdate } from "@/views/types/product";
import { Delete, PageList } from "@/views/types";

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
  list (data: PageList) {
    return Api.get('/api/v1/product/find', data)
  }

}
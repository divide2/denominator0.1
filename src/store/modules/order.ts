import { ProductSpecPrice } from "@/views/types/order";

const state = {
  shopping_cart: []
}
const getters = {}
const actions = {}
const mutations = {
  setShoppingCart (state, data: ProductSpecPrice[]) {
    state.shopping_cart = state.shopping_cart.concat(data)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
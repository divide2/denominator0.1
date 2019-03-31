export class warehouseState {
  id: ''
  name: ''
  remarks: ''
}

const state = {
  warehouse: new warehouseState(),
  warehouseList: new Array<warehouseState>()
}
const getter = {}
const mutations = {
  setWarehouseList (state, list: warehouseState[]) {
    state.warehouseList = list
    console.log(state)
  }
}

export default {
  state,
  mutations
}
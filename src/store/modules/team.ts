import storage from "@/util/storage";

const state = {
  // team: JSON.parse(sessionStorage.getItem('team') ? sessionStorage.getItem('team') : null)
  currTeam: JSON.parse(localStorage.getItem('currTeam'))
}
const getters = {}
const actions = {}
const mutations = {
  // setGroup (state: any, data: any) {
  //   state.team = data
  //   sessionStorage.setItem('team', data)
  // }
  setCurrTeam (state: any, data) {
    state.currTeam = data
    storage.save('currTeam', data)
  },
  removeCurrTeam () {
    localStorage.removeItem('currTeam')
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
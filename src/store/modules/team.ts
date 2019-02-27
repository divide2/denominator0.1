import { Team } from "@/views/types/team";

const state = {
  // team: JSON.parse(sessionStorage.getItem('team') ? sessionStorage.getItem('team') : null)
  currTeam: new Team()
}
const getters = {}
const actions = {}
const mutations = {
  // setGroup (state: any, data: any) {
  //   state.team = data
  //   sessionStorage.setItem('team', data)
  // }
  setCurrTeam (state: any, data:Team) {
    state.currTeam = data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
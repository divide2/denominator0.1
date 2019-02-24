const state = {
  // team: JSON.parse(sessionStorage.getItem('team') ? sessionStorage.getItem('team') : null)
  groupId: sessionStorage.getItem('groupId')
}
const getters = {}
const actions = {}
const mutations = {
  // setGroup (state: any, data: any) {
  //   state.team = data
  //   sessionStorage.setItem('team', data)
  // }
  setGroupId (state: any, id: string) {
    state.groupId = id
    sessionStorage.setItem('groupId', id)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
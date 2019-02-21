const state = {
  // group: JSON.parse(sessionStorage.getItem('group') ? sessionStorage.getItem('group') : null)
  groupId: sessionStorage.getItem('groupId')
}
const getters = {}
const actions = {}
const mutations = {
  // setGroup (state: any, data: any) {
  //   state.group = data
  //   sessionStorage.setItem('group', data)
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
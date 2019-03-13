import Api from '@/api/Api'
import {ConfirmForm, CooperationApply, Team, TeamApply} from '@/views/types/team';
import {SearchQuery} from '@/views/types';
import store from '@/store/index'


export default {
  add(data: Team) {
    return Api.post('/api/v1/team', data)
  },
  getTeam(id: string) {
    return Api.get(`/api/v1/team/${id}`)
  },
  /**
   * @deprecated
   * @param id
   */
  getUsers(id: string) {
    return Api.get(`/api/v1/team/${id}/users`)
  },
  getMembers() {
    return Api.get(`/api/v1/team/${store.getters.teamId}/users`)
  },
  search(data: SearchQuery) {
    return Api.get('/api/v1/team/search', data)
  },
  apply(data: TeamApply) {
    return Api.post('/api/v1/team/apply', data)
  },
  getApplication(id: string) {
    return Api.get(`/api/v1/team/${id}/applications`)
  },
  confirm(data: ConfirmForm) {
    return Api.post('/api/v1/team/confirm', data)
  },
  // 合作团队

  // 申请合作
  cooperationApply(data: CooperationApply) {
    data.fromTeamId = store.state.team.currTeam.id
    return Api.post('/api/v1/team/cooperation/apply', data)
  },
  cooperationConfirm(data: any) {
    return Api.post('/api/v1/team/cooperation/confirm', data)
  },
  getCooApplications(id: string) {
    return Api.get(`/api/v1/team/${id}/cooperation/applications`)
  },
  deleteCooApplication(id: string) {
    // return Api.delete(`/api/v1/team/cooperation/applications/${id}`)
  },
  cooperationList() {
    return Api.get(`/api/v1/team/${store.state.team.currTeam.id}/cooperations`)
  }
}

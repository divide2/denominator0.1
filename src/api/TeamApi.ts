import Api from '@/api/Api'
import { ConfirmForm, CooperationApply, Team, TeamApply } from "@/views/types/team";
import { SearchQuery } from "@/views/types";

export default {
  add (data: Team) {
    return Api.post('/api/v1/team', data)
  },
  getTeam (id: string) {
    return Api.get(`/api/v1/team/${id}`)
  },
  getUsers (id: string) {
    return Api.get(`/api/v1/team/${id}/users`)
  },
  search (data: SearchQuery) {
    return Api.get('/api/v1/team/search', data)
  },
  apply (data: TeamApply) {
    return Api.post('/api/v1/team/apply', data)
  },
  getApplication (id: string) {
    return Api.get(`/api/v1/team/${id}/applications`)
  },
  confirm (data: ConfirmForm) {
    return Api.post('/api/v1/team/confirm', data)
  },
  // 合作团队

  // 申请合作
  cooperationApply (data: CooperationApply) {
    return Api.post('/api/v1/team/cooperation/apply', data)
  },
  cooperationConfirm(data: any){
    return Api.post('/api/v1/team/cooperation/confirm', data)
  },
  getCooApplications(id:string){
    return Api.get(`/api/v1/team/${id}/cooperation/applications`)
  },
  deleteCooApplication(id:string){
    // return Api.delete(`/api/v1/team/cooperation/applications/${id}`)
  }
}
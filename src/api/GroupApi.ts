import Api from '@/api/Api'
import { ConfirmForm, CooperationApply, Group, GroupApply } from "@/views/types/group";
import { SearchQuery } from "@/views/types";

export default {
  add (data: Group) {
    return Api.post('/api/v1/group', data)
  },
  getGroup (id: string) {
    return Api.get(`/api/v1/group/${id}`)
  },
  getUsers (id: string) {
    return Api.get(`/api/v1/group/${id}/users`)
  },
  search (data: SearchQuery) {
    return Api.get('/api/v1/group/search', data)
  },
  apply (data: GroupApply) {
    return Api.post('/api/v1/group/apply', data)
  },
  getApplication (id: string) {
    return Api.get(`/api/v1/group/${id}/applications`)
  },
  confirm (data: ConfirmForm) {
    return Api.post('/api/v1/group/confirm', data)
  },
  // 合作团队

  // 申请合作
  cooperationApply (data: CooperationApply) {
    return Api.post('/api/v1/group/cooperation/apply', data)
  },
  cooperationConfirm(data: any){
    return Api.post('/api/v1/group/cooperation/confirm', data)
  },
  getCooApplications(id:string){
    return Api.get(`/api/v1/group/${id}/cooperation/applications`)
  },
  deleteCooApplication(id:string){
    // return Api.delete(`/api/v1/group/cooperation/applications/${id}`)
  }
}
import Api from '@/api/Api'
import { Group, GroupApply } from "@/views/types/group";
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
  getApplication(id:string){
    return Api.get(`/api/v1/group/${id}/applications`)
  }
}
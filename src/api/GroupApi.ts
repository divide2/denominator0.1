import Api from '@/api/Api'
import { Group } from "@/views/types/group";

export default {
  add (data: Group) {
    return Api.post('/api/v1/group', data)
  },
  getGroup(id: string){
    return Api.get(`/api/v1/group/${id}`)
  },
  getUsers(id:string){
    return Api.get(`/api/v1/group/${id}/users`)
  }
}
import Api from '@/api/Api'
import { UserSearchQuery } from "@/views/types";


export default  {
  // todo any to type
  search(data: UserSearchQuery) {
    return Api.get('/api/v1/user/search', data)
  },
  getDetail(id: string){
    return Api.get(`/api/v1/user/${id}`)
  }
}
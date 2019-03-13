import Api from '@/api/Api'
import {SearchQuery} from '@/views/types';


export default {
  // todo any to type
  search(data: SearchQuery) {
    return Api.get('/api/v1/user/search', data)
  },
  getDetail(id: string) {
    return Api.get(`/api/v2/user/${id}`)
  }
}

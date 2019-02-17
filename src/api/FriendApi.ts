import Api from '@/api/Api'
import { ApplyForm, Confirm } from "@/views/types/friend";

export default {
  apply (data: ApplyForm) {
    return Api.post('/api/v1/friend/apply', data)
  },
  getApplication () {
    return Api.get('/api/v1/friend/applications')
  },
  confirm (data: Confirm) {
    return Api.post('/api/v1/friend/confirm',data)
  }
}
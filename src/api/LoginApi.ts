import qs from 'qs'
import Api from '@/api/Api'
import { JoinForm, LoginForm } from '@/views/types'

// todo 添加返回类型
export default {
  loginByUsername(form: LoginForm) {

    const headers = {
      Authorization: 'Basic ' + btoa(`aiNzsAXE8tkOFJN6:12345678`)
    }
    return Api.post('/api/oauth/token', qs.stringify(form), headers)
  },
  logout() {
    return Api.post('/api/v1/logout', {});
  },
  getUserInfo() {
    return Api.get('/api/v1/user')
  },
  join(data: JoinForm) {
    return Api.post('/api/join', data)
  },
  sendVerifyCode(phone: string) {
    return Api.post('/api/v1/verify/code', { phoneNumber: phone })
  }
}

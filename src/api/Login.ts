import qs from 'qs'
import Api from './Api'
import {LoginForm} from '@/views/types'

export function loginByUsername (form: LoginForm) {

  const headers = {
    Authorization: 'Basic ' + btoa(`aiNzsAXE8tkOFJN6:12345678`)
  }
  return Api.post('/api/oauth/token', qs.stringify(form), headers)
}

export function logout (token:string) {
  const headers = {
    Authorization: `bearer ${token}`
  }
  return Api.post('/api/v1/logout', {}, headers)
}

export function getUserInfo (token: string) {
  const headers = {
    Authorization: `bearer ${token}`
  }
  return Api.get('/api/v1/user', {}, headers)
}


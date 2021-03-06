import axios from 'axios'
import store from '@/store'

export const Method = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PUT: 'put'
}

// 请求拦截器加上token
axios.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers = {
      Authorization: 'Bearer ' + store.getters.token
    }
  }
  return config
}, (error) => {
  Promise.reject(error)
})

const Api = {
  post: (url: string, data: any, headers?: any) => request(url, data, Method.POST, headers),
  get: (url: string, params?: any, headers?: any) => request(url, params, Method.GET, headers),
  delete: (url: string, data: any) => request(url, data, Method.DELETE),
  put: (url: string, data: any) => request(url, data, Method.PUT)
}

const request = async function (url: string, data: any, method: string = 'get', headers?: any) {
    // url = url.replace('/api', 'http://120.77.153.225:8080/');
  try {
    const response = await axios({
      url,
      method,
      params: method === 'get' ? data : {},
      data,
      headers
    });
    if (response.status <= 200) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (e) {
    throw e
  }
}

export default Api

import axios from 'axios';
import { getToken } from '@/route/Token';
export const Method = {
    POST: 'post',
    GET: 'get',
    DELETE: 'delete',
    PUT: 'put'
};
// 请求拦截器加上token
axios.interceptors.request.use(config => {
    if (getToken()) {
        config.headers = {
            Authorization: 'Bearer ' + getToken()
        };
    }
    return config;
}, error => {
    Promise.reject(error);
});
const Api = {
    post: (url, data, headers) => request(url, data, Method.POST, headers),
    get: (url, params, headers) => request(url, params, Method.GET, headers),
    delete: (url, data) => request(url, data, Method.DELETE),
    put: (url, data) => request(url, data, Method.PUT)
};
const request = async function (url, data, method = 'get', headers) {
    try {
        let response = await axios({
            url,
            method,
            params: method === 'get' ? data : {},
            data,
            headers
        });
        if (response.status <= 200) {
            return response.data;
        }
        else {
            return response.data;
        }
    }
    catch (e) {
        throw e;
    }
};
export default Api;

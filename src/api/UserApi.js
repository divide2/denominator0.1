import Api from '@/api/Api';
export default {
    // todo any to type
    search(data) {
        return Api.get('/api/v1/user/search', data);
    },
    getDetail(id) {
        debugger;
        return Api.get(`/api/v1/user/${id}`);
    }
};

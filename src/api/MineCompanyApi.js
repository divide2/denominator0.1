import Api from '@/api/Api';
export default {
    listProducts(data) {
        return Api.get('/api/v1/mine/products', data);
    }
};
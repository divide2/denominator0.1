import Api from '@/api/Api'

export default  {
  // todo any to type
  listProducts(data: any) {
    return Api.get('/api/v1/mine/products', data)
  },
  listGroups() {
    return Api.get('/api/v1/mine/groups')
  },
  listFriends() {
    return Api.get('/api/v1/mine/friends')
  }
}
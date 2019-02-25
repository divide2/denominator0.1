import Api from '@/api/Api'

export default  {
  // todo any to type
  listGroups() {
    return Api.get('/api/v1/mine/teams')
  },
  listFriends() {
    return Api.get('/api/v1/mine/friends')
  }
}
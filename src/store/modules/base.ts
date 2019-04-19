import storage from '@/util/storage';
import { LoginForm, User } from '@/views/types'
import LoginApi from '@/api/LoginApi'

const TOKEN_STATE = 'TOKEN';

export class BaseState {
  public token = storage.get(TOKEN_STATE);
  public userInfo: User | null = null
}

const baseState = new BaseState();

const mutations = {
  setToken (state: BaseState, token: string) {
    state.token = token;
    storage.save(TOKEN_STATE, token);
  },
  removeToken (state: BaseState) {
    state.token = '';
    storage.remove(TOKEN_STATE);
  },
  setUserInfo (state: BaseState, userInfo: User) {
    state.userInfo = userInfo
  },
  removeCurrTeam (state: BaseState) {
    state.tecurrTeam = '';
    storage.remove(TOKEN_STATE);
  },
};

const actions = {
  async getUserInfo ({ commit }) {
    // todo 后台用户返回数据太多
    const userinfo = await LoginApi.getUserInfo()
    commit('setUserInfo', userinfo.principal)
    return userinfo.principal
  },
  async loginByUsername ({ commit }, loginForm: LoginForm) {
    const data = await LoginApi.loginByUsername(loginForm)
    commit('setToken', data.access_token)
    return data;
  },
  async logout ({ commit, rootState }) {
    await LoginApi.logout()
    commit('removeToken')
    commit('removeCurrTeam')
  }
}
export default {
  state: baseState,
  actions,
  mutations
};

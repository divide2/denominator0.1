import storage from '@/util/storage';

const TOKEN_STATE = 'token';

class BaseState {
  public token = storage.get(TOKEN_STATE);
}

const baseState = new BaseState();

const mutations = {
  setToken(state: BaseState, token: string) {
    state.token = token;
    storage.save(TOKEN_STATE, token);
  },
  removeToken(state: BaseState) {
    state.token = '';
    storage.remove(TOKEN_STATE);
  }
};
export default {
  baseState,
  mutations
}

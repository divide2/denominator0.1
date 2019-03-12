import Vue from 'vue';
import Vuex from 'vuex';
import team from '@/store/modules/team';
import base from '@/store/modules/base';

Vue.use(Vuex);


// todo 使用getters取不出数据?
export default new Vuex.Store({
  getters: {
    teamId: (state) => state.team.currTeam.id,
    token: (state) => state.base.token,
    teams: (state) => state.team.teams,
    userInfo: (state) => state.base.userInfo
  },
  modules: {
    team,
    base
  }
});

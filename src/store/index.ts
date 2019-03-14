import Vue from 'vue';
import Vuex from 'vuex';
import team from '@/store/modules/team';
import base from '@/store/modules/base';
import order from "@/store/modules/order";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    teamId: (state) => state.team.currTeam.id,
    token: (state) => {
      console.log(state.base);
      return state.base.token
    },
    teams: (state) => state.team.teams,
    userInfo: (state) => state.base.userInfo
  },
  modules: {
    team,
    base,
    order
  }
});

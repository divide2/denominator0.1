import Vue from 'vue';
import Vuex from 'vuex';
import order from "@/store/modules/order";
import team from '@/store/modules/team';
import base from '@/store/modules/base';

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
    base,
    team,
    order
  }
});

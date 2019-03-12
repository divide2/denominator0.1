import Vue from 'vue';
import Vuex from 'vuex';
import team from '@/store/modules/team';
import base from '@/store/modules/base';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    teamId() {
      return team.teamState.currTeam && team.teamState.currTeam.id;
    },
    token() {
      return base.baseState.token;
    }
  },
  modules: {
    team,
    base
  }
});

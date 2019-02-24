import Vue from 'vue';
import Vuex from 'vuex';
import MineApi from '@/api/MineApi'
import group from "@/store/modules/group";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groups: [],
    group: {},
    resCode: []
  },
  mutations: {
    setGroup (state, group) {
      state.group = group
    },
    setGroups (state, groups) {
      state.groups = groups
    },
    setResCode (state, resCode) {
      state.resCode = resCode
    }
  },
  actions: {
    async setGroups ({ commit }) {
      const groups = await MineApi.listGroups()
      commit('setGroups', groups)
    }
  },
  modules: {
    group
  }
});

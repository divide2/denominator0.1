import storage from '@/util/storage';
import MineApi from '@/api/MineApi';
import {Team} from '@/views/types/team';

const CURR_TEAM_STATE = 'CURR_TEAM';

class TeamState {
  public currTeam: Team | null = storage.get(CURR_TEAM_STATE);
  public teams: Team[] = [];
}

const teamState = new TeamState();

const getters = {};
const actions = {
  async listUserTeams({commit, state}) {
    const teams = await MineApi.listTeams();
    if (teams.length && !state.currTeam) {
      commit('setCurrTeam', teams[0]);
    }
    commit('setTeams', teams);
  }
};
const mutations = {
  setCurrTeam(state: TeamState, data: Team) {
    state.currTeam = data;
    storage.save(CURR_TEAM_STATE, data)
  },
  removeCurrTeam(state: TeamState) {
    state.currTeam = null;
    storage.remove(CURR_TEAM_STATE);
  },
  setTeams(state: TeamState, teams: Team[]) {
    state.teams = teams;
  }
};
export default {
  teamState,
  getters,
  actions,
  mutations
}

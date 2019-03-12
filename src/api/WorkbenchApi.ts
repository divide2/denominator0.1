import Api from './Api'
import store from '@/store/index'
import {GroupMenu, MenuGroup, MenuGroupDelete} from '@/views/types/workbench';

export default {
  get() {
    return Api.get(`/api/v1/team/${store.state.team.currTeam.id}/workbench`)
  },
  getMenuTree(menuGroupId: string) {
    return Api.get(`/api/v1/workbench/${menuGroupId}/menus`)
  },
  addGroup(group: MenuGroup) {
    return Api.post('/api/v1/workbench/group', group);
  },
  deleteMenuGroup(del: MenuGroupDelete) {
    return Api.delete('/api/v1/workbench/group', del);
  },
  addGroupMenu(groupMenu: GroupMenu) {
    return Api.post('/api/v1/workbench/group/menu', groupMenu);
  },
  deleteGroupMenu(groupMenu: GroupMenu) {
    return Api.delete('/api/v1/workbench/group/menu', groupMenu);
  }
}

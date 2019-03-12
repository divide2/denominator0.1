<template>
  <v-card>
    <v-list subheader v-for="t in tree" :key="t.id">
      <v-subheader>
        <v-icon>{{t.icon}}</v-icon>
        {{t.name}}
        <v-spacer></v-spacer>
        <v-btn v-if="!t.exist" flat icon color="primary" @click="addGroupMenu(t.id)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-icon v-else color="success">mdi-check</v-icon>
      </v-subheader>
      <v-list-tile
          v-for="tc in t.children"
          :key="tc.id"
          avatar
      >
        <v-list-tile-avatar>
          <v-icon>{{tc.icon}}</v-icon>
        </v-list-tile-avatar>


        <v-list-tile-content>
          <v-list-tile-title>{{tc.name}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn v-if="!tc.exist" flat icon color="primary" @click="addGroupMenu(tc.id)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-icon v-else color="success">mdi-check</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </v-card>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import WorkbenchApi from '../../api/WorkbenchApi'
import { GroupMenu } from '../types/workbench'


@Component({})
export default class List extends Vue {

  menuGroupId = "";
  sels = [];
  tree = [];

  created() {
    this.menuGroupId = this.$route.params.menuGroupId;
    this.getTree();
  }

  async getTree() {
    this.tree = await WorkbenchApi.getMenuTree(this.menuGroupId);
  }

  async addGroupMenu(menuId: string) {
    const groupMenu = new GroupMenu(
      this.$store.state.team.currTeam.id,
      this.menuGroupId,
      menuId
    );
    await WorkbenchApi.addGroupMenu(groupMenu);
    await this.getTree();
  }

}
</script>
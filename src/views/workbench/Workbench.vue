<template>
  <page hasBack>
    <v-card>
      <v-list two-line subheader v-for="w in workbench" :key="w.menuGroup.id">
        <v-subheader>
          {{w.menuGroup.name}}
          <v-icon color="primary">mdi-square-edit-outline</v-icon>
          <v-spacer></v-spacer>
          <v-icon @click="deleteMenuGroup(w.menuGroup.id)" color="error">mdi-delete</v-icon>
        </v-subheader>
        <v-layout text-xs-center row wrap>
          <v-flex v-for="menu in w.menus" :key="menu.id" xs3>
            <v-badge color="red">
              <template slot="badge">
                <v-icon color="white" @click="deleteGroupMenu(w.menuGroup.id,menu.id)">mdi-minus</v-icon>
              </template>
              <v-icon>{{menu.icon}}</v-icon>
            </v-badge>
            <p style="font-size: 12px">{{menu.name}}</p>
          </v-flex>
          <v-flex xs3>
            <v-icon @click="addGroupMenu(w.menuGroup.id)" style="border: 1px dashed #ddd">mdi-plus</v-icon>
            <p style="font-size: 12px">添加</p>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-list>
      <v-subheader @click="dialogGroupVisible = true">
        <v-icon color="success">mdi-plus-circle</v-icon>
        添加分组
      </v-subheader>
    </v-card>

    <v-dialog v-model="dialogGroupVisible" max-width="500px">
      <v-card>
        <v-card-title>
          添加组
        </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="menuGroup.name"
              label="组名称"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialogGroupVisible=false">取消</v-btn>
          <v-btn color="primary" flat @click="handleAddGroup()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogGroupUpdateVisible" max-width="500px">
      <v-card>
        <v-card-title>
          修改组
        </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="menuGroup.name"
              label="组名称"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialogGroupUpdateVisible=false">取消</v-btn>
          <v-btn color="primary" flat @click="handleUpdateGroup()">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </page>

</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'
import WorkbenchApi from '../../api/WorkbenchApi'
import {GroupMenu, MenuGroup, MenuGroupDelete, Workbench} from "../types/workbench"


@Component({})
export default class List extends Vue {
    dialogGroupVisible = false;
    dialogGroupUpdateVisible = false;
    workbench: Workbench [] = [];
    menuGroup = new MenuGroup();

    created() {
        this.get();
    }

    async get() {
        this.workbench = await WorkbenchApi.get();
    }

    async handleAddGroup() {
        this.dialogGroupVisible = false;
        this.menuGroup.teamId = this.$store.state.team.currTeam.id;
        await WorkbenchApi.addGroup(this.menuGroup);
        await this.get();
    }

    handleUpdateGroup() {

    }

    async deleteMenuGroup(menuGroupId: string) {
        await this.$confirm('确定要删除么?');
        const del = new MenuGroupDelete(this.$store.state.team.currTeam.id, menuGroupId)
        await WorkbenchApi.deleteMenuGroup(del);
        await this.get();
    }

    addGroupMenu(menuGroupId: string) {
        this.$router.push({name: 'workbenchMenu', params: {menuGroupId}})
    }

    async deleteGroupMenu(groupId: string, menuId: string) {
        const groupMenu = new GroupMenu(
            this.$store.state.team.currTeam.id,
            groupId,
            menuId
        );
        await WorkbenchApi.deleteGroupMenu(groupMenu);
        await this.get();
    }
}
</script>
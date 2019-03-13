<template>
  <page>
    <div slot="headerLeft">
      <v-toolbar-title class="company-select">
        <v-select
            :value="currTeam"
            :items="teams"
            item-text="name"
            item-value="id"
            @change="changeTeam"></v-select>
      </v-toolbar-title>
    </div>
    <div slot="headerRight">
      <v-toolbar-items>
        <v-btn flat icon>
          <v-icon size="30">search</v-icon>
        </v-btn>
      </v-toolbar-items>
    </div>

    <v-card>
      <v-list two-line subheader v-for="w in workbench" :key="w.menuGroup.id">
        <v-subheader>
          {{w.menuGroup.name}}
        </v-subheader>
        <v-layout text-xs-center row wrap>
          <v-flex v-for="menu in w.menus" :key="menu.id" xs3 @click="$router.push({name: menu.path})">
            <v-icon :color="menu.color">{{menu.icon}}</v-icon>
            <p style="font-size: 12px">{{menu.name}}</p>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </page>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Page from '@/components/Page.vue'
import PageHeader from '@/components/PageHeader.vue'
import {Mutation, State} from 'vuex-class';
import WorkbenchApi from '../../api/WorkbenchApi'
import {Workbench} from '../types/workbench'

@Component({components: {Page, PageHeader}})
export default class Work extends Vue {

  workbench: Workbench [] = [];

  @State(state => state.team.currTeam) currTeam
  @Mutation('setCurrTeam') setCurrTeam
  @State(state => state.team.teams) teams

  async created() {
    this.get();
  }

  async get() {
    this.workbench = await WorkbenchApi.get();
  }

  changeTeam(id: string) {
    let team = this.teams.find(item => item.id === id)
    this.setCurrTeam(team)
    this.get()
  }
}
</script>
<style scoped lang="stylus">
  .company-select {
    width: 200px;
  }
</style>
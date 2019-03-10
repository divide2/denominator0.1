<template>
  <page>
    <div slot="headerLeft">
      <v-toolbar-title class="company-select">
        <v-select
                v-model="currTeam"
                :items="groups"
                :item-text="'name'"
                :item-value="'id'"
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
          <v-flex v-for="menu in w.menus" :key="menu.id" xs3 @click="$router.push(menu.path)">
              <v-icon>{{menu.icon}}</v-icon>
            <p style="font-size: 12px">{{menu.name}}</p>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'
import PageHeader from '@/components/PageHeader.vue'
import MineApi from '../../api/MineApi'
import { Team } from '../types/team'
import { mapState } from 'vuex'
import { Mutation, State } from 'vuex-class';
import WorkbenchApi from "../../api/WorkbenchApi"
import {Workbench} from "../types/workbench"

@Component({ components: { Page, PageHeader } })
export default class Work extends Vue {

  public groups: Team [] = []
  workbench: Workbench [] = [];

  public toPurchase () {
    this.$router.push('/purchase')
  }

  public toProduct () {
    this.$router.push('/product')
  }

  @State(state => state.team.currTeam) currTeam
  @Mutation('setCurrTeam') setCurrTeam

  async created () {
    const test = new Team()
//    this.$store.commit('setCurrTeam', this.groups[0])
    await MineApi.listGroups().then(data => {
      this.groups = data
      if (!this.currTeam) {
        this.setCurrTeam(this.groups[0])
      }
    })
    this.get();

  }
  async get() {
      this.workbench = await WorkbenchApi.get();
  }
  changeTeam (id) {
    let team = this.groups.find(item => item.id === id)
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
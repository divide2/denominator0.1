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

    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex column @click="$router.push({name:'orderAdd'})" xs3>
            <v-icon large color="green darken-2">add_shopping_cart</v-icon>
            <p>采购</p>
          </v-flex>

          <v-flex column @click="toProduct" xs3>
            <v-icon large color="orange darken-2">redeem</v-icon>
            <p>商品</p>
          </v-flex>
          <v-flex column xs3>
            <v-icon large color="purple darken-2">store</v-icon>
            <p>库存</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'warehouse'})">
            <v-icon large color="purple darken-2">store</v-icon>
            <p>仓库</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'orderList'})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>订单</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'teamApplications',params:{id:groups[0].id}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>团队申请</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'cooperationSearch'})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>申请合作</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'cooperationConfirm',params:{id:currTeam.id}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>确认合作</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'cooperationList',params:{id:currTeam.id}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>合作伙伴</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'workbench',params:{id:currTeam.id}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>工作台</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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

@Component({ components: { Page, PageHeader } })
export default class Work extends Vue {

  public groups: Array<Team> = []

  public toPurchase () {
    this.$router.push('/purchase')
  }

  public toProduct () {
    this.$router.push('/product')
  }

  @State(state => state.team.currTeam) currTeam
  @Mutation('setCurrTeam') setCurrTeam

  created () {
    const test = new Team()
//    this.$store.commit('setCurrTeam', this.groups[0])
    MineApi.listGroups().then(data => {
      this.groups = data
      if (!this.currTeam) {
        this.setCurrTeam(this.groups[0])
      }
    })
  }

  changeTeam (id) {
    let team = this.groups.find(item => item.id === id)
    this.setCurrTeam(team)
  }
}
</script>
<style scoped lang="stylus">
  .company-select {
    width: 200px;
  }
</style>
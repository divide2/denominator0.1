<template>
  <div>
    <page-header>
      <v-toolbar-title>除以二</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat icon>
          <v-icon size="30">search</v-icon>
        </v-btn>
      </v-toolbar-items>
    </page-header>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex column @click="toPurchase" xs3>
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
          <v-flex column xs3>
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>订单</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'createTeam'})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>创建团队</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'groupApplications',params:{id:groups[0].id}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>团队申请</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'cooperationSearch'})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>申请合作</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'cooperationConfirm',params:{id:groupId}})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>确认合作</p>
          </v-flex>
        </v-layout>
        {{groupId}}
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'
import PageHeader from '@/components/PageHeader.vue'
import MineApi from '../../api/MineApi'
import { Group } from '../types/group'
import { mapState } from 'vuex'

@Component({ components: { Page, PageHeader } })
export default class Work extends Vue {

  public groups: Array<Group> = []
  public myGroups: Array<Group> = []

  public toPurchase () {
    this.$router.push('/purchase')
  }

  public toProduct () {
    this.$router.push('/product')
  }

  created () {
    MineApi.listGroups().then(data => {
      this.groups = data
      this.$store.commit('setGroupId', this.groups[0].id)
    })
  }

  get groupId () {
    return this.$store.state.groupId
  }
}
</script>
<style scoped></style>
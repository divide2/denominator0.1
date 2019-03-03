<template>
  <page :title="'采购'" :hasBack="true">
    <v-container>
      <v-tabs>
        <v-tab>选择供应商</v-tab>
        <v-tab>选择商品</v-tab>
        <v-tab>其他信息</v-tab>
        <v-tab-item>
          <v-select
                  v-model="cooperation"
                  :items="cooperations"
                  :item-text="'name'"
                  :item-value="'id'"
                  @change="changeTeam">
          </v-select>
        </v-tab-item>
        <v-tab-item>2</v-tab-item>
        <v-tab-item>3</v-tab-item>
      </v-tabs>

    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Order } from '../types/order';
import OrderApi from '../../api/OrderApi';
import TeamApi from '../../api/TeamApi';
import { Team } from '../types/team';
import ProductApi from '../../api/ProductApi';
import { Page } from '../types/index';

@Component({ components: {} })
export default class WarehouseAdd extends Vue {
  public order = new Order()
  public ifAdd = true
  public cooperations = new Array<Team>()
  public cooperation = new Team()
  public page=new Page()

  save () {
    OrderApi.add(this.order).then(data => {
      this.$router.back()
    })
  }

  created () {
    TeamApi.cooperationList().then(data => {
      this.cooperations = data
    })
  }

  getProducts(){
    ProductApi.list(this.page).then(data=>{

    })
  }
}
</script>
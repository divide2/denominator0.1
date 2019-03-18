<template>
  <page :title="'订单'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="$router.push({name:'orderAdd'})"></option-btn>
    <v-container>
      <v-tabs centered>
        <v-tab v-for="(item,index) in orderStatus" @click="getData">{{item.name}}</v-tab>
        <v-tab-item>

        </v-tab-item>
        <v-tab-item>
          发货
        </v-tab-item>
        <v-tab-item>
          收货
        </v-tab-item>
      </v-tabs>

    </v-container>

  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import OptionBtn from '@/components/OptionBtn'
import { Page } from '../types/index';
import { Warehouse } from '../types/warehouse';
import { Order, Search } from '../types/order';
import { ORDER_STATUS } from '../../const/index';
import OrderApi from '../../api/OrderApi';

@Component({ components: { OptionBtn } })
export default class File extends Vue {
  public page = new Page()
  public orders: Array<Order> = []
  orderStatus = ORDER_STATUS
  orderSearchParams = new Search()

  created () {
    this.getData(this.orderStatus[0].value)
  }

  getData (status) {
    this.orderSearchParams.status = status
    OrderApi.list(this.orderSearchParams).then(data => {
      this.orders = data
    })
  }

//  del (id) {
//    OrderApi.delete(id).then(data => {
//      this.list(this.orderStatus[0])
//    })
//  }

}
</script>
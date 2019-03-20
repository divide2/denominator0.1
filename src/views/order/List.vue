<template>
  <page :title="'订单'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="$router.push({name:'orderAdd'})"></option-btn>
    <v-container>
      <v-tabs centered>
        <v-tab v-for="(item,index) in orderStatus" @click="getData(item.value)">{{item.name}}</v-tab>
        <v-tab-item>
          <order-list :orders="orders" @confirm="confirm"></order-list>
        </v-tab-item>
        <v-tab-item>
          <order-list :orders="orders" @deliver="deliver"></order-list>
        </v-tab-item>
        <v-tab-item>
          <order-list :orders="orders" @receive="receive"></order-list>
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
import OrderList from './components/orderList'

@Component({ components: { OptionBtn, OrderList } })
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
      this.orders = data.content
    })
  }

//  del (id) {
//    OrderApi.delete(id).then(data => {
//      this.list(this.orderStatus[0])
//    })
//  }
  confirm (id) {
    OrderApi.confirm({ id: id }).then((res) => {
      console.log(res)
      this.getData(this.orderStatus[0].value)
    })
  }

  deliver (id) {
    OrderApi.confirm({ id: id }).then((res) => {
      console.log(res)
      this.getData(this.orderStatus[0].value)
    })
  }

  receive (id) {
    OrderApi.confirm({ id: id }).then((res) => {
      console.log(res)
      this.getData(this.orderStatus[0].value)
    })
  }



}
</script>
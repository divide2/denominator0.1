<template>
  <page :title="'订单'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="$router.push({name:'orderAdd'})"></option-btn>
    <v-container>
      <v-tabs centered>
        <v-tab @click="getData('waiting_confirm')">待确认</v-tab>
        <v-tab @click="getData('waiting_deliver')">待发货</v-tab>
        <v-tab @click="getData('waiting_receive')">待收货</v-tab>
        <v-tab></v-tab>
        <v-tab></v-tab>
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
import OrderApi from '../../api/OrderApi';
import OrderList from './components/orderList'
import { waiting_confirm, waiting_deliver, waiting_receive } from '@/const/index';

@Component({ components: { OptionBtn, OrderList } })
export default class File extends Vue {
  public page = new Page()
  public orders: Array<Order> = []
  orderSearchParams = new Search()
  waiting_confirm = waiting_confirm
  waiting_deliver = waiting_deliver
  waiting_receive = waiting_receive

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

  deliver (data) {
    OrderApi.deliver(data).then((res) => {
      console.log(res)
//      this.getData(this.orderStatus[0].value)
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
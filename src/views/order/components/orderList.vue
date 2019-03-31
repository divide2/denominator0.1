<template>
  <div>
    <v-list two-line>
      <div v-for="(item, index) in orders" :key="index">
        <v-list-tile
                avatar
                ripple
        >
          <v-list-tile-content>
            <v-list-tile-title>
              订单号:{{item.orderNo}}
            </v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">来自{{ item.team.name }}·{{item.fromName }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>总金额:¥{{ item.earnestMoney + item.balancePayment}}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn v-if="item.status===waiting_confirm" color="primary" dark small
                   @click="$emit('confirm',item.id)">确认订单
            </v-btn>
            <v-btn v-if="item.status===waiting_deliver" color="primary" dark small @click="selectOrder(item.orderId)">
              确认发货
            </v-btn>
            <v-btn v-if="item.status===waiting_receive" color="primary" dark small
                   @click="$emit('receive',item.id)">确认收货
            </v-btn>
          </v-list-tile-action>

        </v-list-tile>
        <v-divider></v-divider>
      </div>
    </v-list>
    <!--选择仓库-->
    <v-dialog v-model="show">
      <v-select
              :items="warehouseList"
              item-text="name"
              item-value="id"
              @change="select"></v-select>
      <v-btn @click="$emit('deliver', {warehouseId:warehouse_id,orderId:order_id})">确定</v-btn>
    </v-dialog>
  </div>

</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Order } from '../../types/order';
import OrderApi from '../../../api/OrderApi';
import { waiting_confirm, waiting_deliver, waiting_receive } from '@/const/index';
import { State } from 'vuex-class';


@Component({ components: {} })
export default class File extends Vue {
  waiting_confirm = waiting_confirm
  waiting_deliver = waiting_deliver
  waiting_receive = waiting_receive
  warehouse_id = ''
  order_id = ''
  show = false
  @Prop()
  orders: Order

  @State(state => state.warehouse.warehouseList) warehouseList

  created () {
  }

  select (id) {
    this.warehouse_id = id
  }

  selectOrder (id) {
    this.order_id = id
    this.show = true
  }
}
</script>
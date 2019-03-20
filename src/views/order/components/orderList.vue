<template>
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
          <v-btn v-if="item.status===ORDER_STATUS[0].value" color="primary" dark small @click="$emit('confirm',item.id)">确认订单</v-btn>
          <v-btn v-else-if="item.status===ORDER_STATUS[1].value" color="primary" dark small @click="$emit('deliver',item.id)">确认发货</v-btn>
          <v-btn v-eles-if="item.status===ORDER_STATUS[2].value" color="primary" dark small @click="$emit('receive',item.id)">确认收货</v-btn>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider></v-divider>
    </div>

  </v-list>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Order } from '../../types/order';
import OrderApi from '../../../api/OrderApi';
import { ORDER_STATUS } from '@/const/index';


@Component({ components: {} })
export default class File extends Vue {
  @Prop({ default: [{ title: '订单1', fromName: 'ctt' }] })
  orders: Order

}
</script>
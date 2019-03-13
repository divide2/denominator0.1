<template>
  <page :title="'订单'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="$router.push({name:'orderAdd'})"></option-btn>
    <v-container>
      <v-tabs centered>
        <v-tab>待确认</v-tab>
        <v-tab>待发货</v-tab>
        <v-tab>待收货</v-tab>
        <v-tab-item>
          确认
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
import WarehouseApi from '../../api/WarehouseApi';
import { Warehouse } from '../types/warehouse';

@Component({ components: { OptionBtn } })
export default class File extends Vue {
  public page = new Page()
  public warehouses: Array<Warehouse> = []

  created () {
    this.list()
  }

  list () {
    WarehouseApi.list().then(data => {
      this.warehouses = data
    })
  }

  del (id) {
    WarehouseApi.delete(id).then(data => {
      this.list()
    })
  }

}
</script>
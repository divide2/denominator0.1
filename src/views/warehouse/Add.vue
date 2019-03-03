<template>
  <page :title="ifAdd?'添加仓库':'修改仓库'" :hasBack="true">
    <v-container>
      <v-text-field :label="'仓库名称'" v-model="warehouse.name"></v-text-field>
      <v-text-field :label="'备注'" v-model="warehouse.remarks"></v-text-field>
      <v-btn block :color="'primary'" @click="save">保存</v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Warehouse } from '../types/warehouse';
import WarehouseApi from '../../api/WarehouseApi';

@Component({ components: {} })
export default class WarehouseAdd extends Vue {
  public warehouse = new Warehouse()
  public ifAdd = true

  save () {
    WarehouseApi.add(this.warehouse).then(data => {
      this.$router.back()
    })
  }

  created () {
    this.ifAdd = this.$route.name === 'warehouseAdd' ? true : false
    if (!this.ifAdd) {
      WarehouseApi.detail(this.$route.params.id).then(data => {
        this.warehouse = data
      })
    }
  }
}
</script>
<template>
  <page :title="'仓库'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="$router.push({name:'warehouseAdd'})"></option-btn>
    <v-container>
      <v-list>
        <div
                v-for="(item, index) in warehouses"
                :key="index"
                @click="$router.push({name:'warehouseUpdate',params:{id:item.id}})">
          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.remarks }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-title-action @click.stop="del(item.id)">
              <v-icon>delete</v-icon>
            </v-list-title-action>

          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
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
<template>
  <page :hasBack="true">

    <v-card>
      <v-container>
        <v-autocomplete
            :items="products"
            item-value="id"
            item-text="name"
            label="商品"
            :search-input.sync="search">
          <template slot="item" slot-scope="data">
            <template>
              <v-list-tile-avatar>
                <img :src="data.item.image && data.item.image[0]">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{data.item.name}}</v-list-tile-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>
      </v-container>
    </v-card>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductApi from '../../api/ProductApi'
import { ListParam } from '../types/product'

@Component({ components: {} })
export default class Users extends Vue {
  products = [];

  public created() {
    this.search();
  }

  search() {
    const param = new ListParam();
    param.size = 20;
    ProductApi.list(param).then(data => {
      this.products = data.content;
    });
  }
}
</script>
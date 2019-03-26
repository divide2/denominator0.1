<template>
  <page :hasBack="true">

    <v-card>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 >
            <v-autocomplete

                :items="products"
                item-value="id"
                item-text="name"
                label="商品"
                @input="onProductChange"
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
          </v-flex>
          <v-flex xs12  v-for="(spec,index) in specs" :key="spec.id">
            <v-card flat class="px-0">
              <v-layout row  justify-center  align-center>
                <v-flex xs6>
                  <v-list-tile-avatar>
                    <v-img :src="spec.image && spec.image[0]"></v-img>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{spec.name}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-flex>
                <v-flex xs6>
                  <v-text-field v-model="spec.amount" label="数量" type="number"></v-text-field>
                </v-flex>
              </v-layout>

            </v-card>
          </v-flex>
        </v-layout>
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
  specs = [];

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

  onProductChange(productId) {

    let specs = this.products.find(item => item.id === productId).specs
    console.log(specs)
    this.specs = specs.map(item => Object.assign({}, item, { amount: 0 }))
    console.log('xxxxx');
  }
}
</script>
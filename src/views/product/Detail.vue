<template>
  <page :title="product.name" :hasBack="true">
    <v-container>
      <v-carousel :height="200">
        <v-carousel-item v-for="(item,index) in product.image" :key="index" :src="item">
        </v-carousel-item>
      </v-carousel>
      <v-subheader>规格</v-subheader>
      <v-list>
        <div v-for="(item, index) in product.specs" :key="index">
          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <span>{{ item.price }}</span>
            </v-list-tile-content>

            <v-list-title-action>
              <v-icon>add</v-icon>
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
import { Product } from '../types/product';
import ProductApi from '../../api/ProductApi';

@Component({ components: {} })
export default class Detail extends Vue {
  public product = new Product()

  created () {
    ProductApi.getDetail(this.$route.params.id).then(data => {
      this.product = data
    })
  }

}
</script>
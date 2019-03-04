<template>
  <page :title="product.name" :hasBack="true">
    <v-container>
      <v-carousel :height="200">
        <v-carousel-item v-for="(item,index) in product.image" :key="index" :src="item">
        </v-carousel-item>
      </v-carousel>
      <v-layout>
      </v-layout>
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
  public product=new Product()

  created(){
    ProductApi.getDetail(this.$route.params.id).then(data=>{
      this.product=data
    })
  }

}
</script>
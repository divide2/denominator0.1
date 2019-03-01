<template>
  <page :title="product.name" :hasBack="true">

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
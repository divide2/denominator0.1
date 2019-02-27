<template>
  <page :title="'商品'" :hasBack="true">
    <div slot="headerRight">
      <v-toolbar-items>
        <v-btn flat icon @click="clickAdd">
          <v-icon size="30">add</v-icon>
        </v-btn>
        <v-btn flat icon v-if="clickEdit">
          <v-icon size="25">edit</v-icon>
        </v-btn>
      </v-toolbar-items>
    </div>

    <v-list two-line class="product">
      <template v-for="(item, index) in products">
        <v-list-tile
                :key="item.id"
                avatar
        >
          <v-list-tile-avatar>
            <img :src="item.image">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.remarks"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </template>
    </v-list>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductApi from '../../api/ProductApi';
import { ListParam } from '../types/product';

@Component({})
export default class Work extends Vue {

  public products = []
  public listParam = new ListParam()

  public iconArr = {
    add: true,
    clickAdd: this.clickAdd,
    edit: true
  }

  public created () {
//    const { content, totalElements } = await ProductApi.list(this.listParam)
//    this.products = content
    ProductApi.list(this.listParam).then(data=>{
      console.log(data)
    })
  }

  public clickAdd () {
    this.$router.push({ name: 'addProduct' })
  }

  public clickEdit () {
    this.$router.push({ name: 'addProduct' })
  }

}
</script>
<style scoped lang="stylus">
  .product {
    .btn-add {
      bottom: 30px
      right: 30px
    }
  }
</style>
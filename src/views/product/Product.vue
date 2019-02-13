<template>
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
    <v-btn color="info" fixed block class="btn-add">增加商品</v-btn>

  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MineCompanyApi from '../../api/MineCompanyApi'

@Component({})
export default class Work extends Vue {

  public products = []

  public async created () {
    const { content, totalElements } = await MineCompanyApi.listProducts({})
    this.products = content
  }

}
</script>
<style scoped lang="stylus">
  .product {
    .btn-add {
      bottom: 0
      left:0
    }
  }
</style>
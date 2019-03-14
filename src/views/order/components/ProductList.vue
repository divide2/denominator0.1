<template>
  <v-list class="product-list">
    <div v-for="(item, index) in specArr" :key="index">
      <v-list-tile
              avatar
              @click=""
      >
        <v-list-tile-avatar :tile="true">
          <img v-if="item.image.length>0" :src="item.image[0]">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title v-html="item.price"></v-list-tile-sub-title>
        </v-list-tile-content>
        <div class="purchase">
          <v-icon @click="removeOne(item)">remove_circle</v-icon>
          <input type="number" class="purchase-input" v-model="item.amount">
          <v-icon @click="addOne(item)">add_circle</v-icon>
        </div>
      </v-list-tile>

      <v-divider></v-divider>
    </div>
  </v-list>
</template>

<style scoped lang='stylus'>
  .purchase {
    display: flex;
    .purchase-input {
      text-align center
      width 50px
    }
  }

</style>

<script lang="ts">
import { Vue, Component, Model } from 'vue-property-decorator'
import { ProductSpecPrice } from '../../types/order';

@Component({ components: {} })
export default class File extends Vue {
  @Model('change')
  specArr: ProductSpecPrice[]

  removeOne (obj) {
    if (obj.amount) {
      obj.amount--
    }
  }

  addOne (obj) {
    obj.amount++
  }

}
</script>
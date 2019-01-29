<template>
    <v-layout row wrap>

        <v-layout column @click="toPurchase">
            <v-icon large color="green darken-2">add_shopping_cart</v-icon>
            <span>采购</span>
        </v-layout>

        <v-layout column @click="toProduct">
            <v-icon large color="orange darken-2">redeem</v-icon>
            <span>商品</span>
        </v-layout>
        <v-layout column>
            <v-icon large color="purple darken-2">store</v-icon>
            <span>库存</span>
        </v-layout>
        <v-layout column>
            <v-icon large color="blue darken-2">assignment</v-icon>
            <span>订单</span>
        </v-layout>
    </v-layout>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class Work extends Vue {

  public toPurchase() {
    this.$router.push('/purchase')
  }

  public toProduct() {
    this.$router.push('/product')
  }

}
</script>
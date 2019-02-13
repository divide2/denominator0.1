<template>
    <page :hasHeader="true">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex column @click="toPurchase" xs3>
            <v-icon large color="green darken-2">add_shopping_cart</v-icon>
            <p>采购</p>
          </v-flex>

          <v-flex column @click="toProduct" xs3>
            <v-icon large color="orange darken-2">redeem</v-icon>
            <p>商品</p>
          </v-flex>
          <v-flex column xs3>
            <v-icon large color="purple darken-2">store</v-icon>
            <p>库存</p>
          </v-flex>
          <v-flex column xs3>
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>订单</p>
          </v-flex>
          <v-flex column xs3 @click="$router.push({name:'createTeam'})">
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>创建团队</p>
          </v-flex>
          <v-flex column xs3>
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>创建团队</p>
          </v-flex>
          <v-flex column xs3>
            <v-icon large color="blue darken-2">assignment</v-icon>
            <p>创建团队</p>
          </v-flex>
        </v-layout>
      </v-container>
      <v-btn color="info">11</v-btn>
    </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'

@Component({ components: { Page } })
export default class Work extends Vue {

  public toPurchase () {
    this.$router.push('/purchase')
  }

  public toProduct () {
    this.$router.push('/product')
  }

}
</script>
<style scoped></style>
<template>
  <page :title="'添加商品'" class="add-product">
    <v-container grid-list-xs class="white">
      <v-text-field label="商品名称"></v-text-field>
    </v-container>

    <v-subheader>规格</v-subheader>
    <v-container grid-list-xs class="white">

      <v-layout>
        <v-flex xs12 md4>
          <v-text-field label="规格名称"></v-text-field>
        </v-flex>
        <v-flex xs12 md4 ml-5>
          <v-text-field label="规格价格"></v-text-field>
        </v-flex>
      </v-layout>
      <v-upload></v-upload>
      <v-btn fab small>
        <v-icon>add</v-icon>
      </v-btn>
    </v-container>
  </page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({ components: {} })
export default class AddProduct extends Vue {

}
</script>
<style scoped lang="stylus">
  .add-product {
    .wrap-white {
      background-color: #fff;
    }
  }
</style>
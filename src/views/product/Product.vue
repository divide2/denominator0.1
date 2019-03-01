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
      <div v-for="(item, index) in products" @click="$router.push({name:'productDetail',params:{id:item.id}})">
        <!--<v-list-tile-->
                <!--:key="item.id"-->
                <!--avatar-->
        <!--&gt;-->
          <!--<v-list-tile-avatar>-->
            <!--<img :src="item.image">-->
          <!--</v-list-tile-avatar>-->

          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-html="item.name"></v-list-tile-title>-->
            <!--<v-list-tile-sub-title v-html="item.remarks"></v-list-tile-sub-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->

        <v-flex>
          <v-card>
            <v-layout>
              <v-flex xs5>
                <v-img :src="item.image">

                </v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>

                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-divider></v-divider>
      </div>
    </v-list>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductApi from '../../api/ProductApi';
import { ListParam, Product } from '../types/product';
import { State } from 'vuex-class';

@Component({})
export default class Work extends Vue {
  @State(state=> state.team.currTeam) currTeam

  public products = new Product()
  public listParam = new ListParam()

  public iconArr = {
    add: true,
    clickAdd: this.clickAdd,
    edit: true
  }

  public created () {
    console.log(this.listParam)
//    const { content, totalElements } = await ProductApi.list(this.listParam)
//    this.products = content
    ProductApi.list(this.listParam).then(data=>{
      this.products=data.content
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
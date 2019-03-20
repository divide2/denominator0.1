<template>
  <page :title="'商品'" :hasBack="true">
    <option-btn :icon="'add'" @click.native="clickAdd"></option-btn>

    <v-list two-line class="product">
      <div v-for="(item, index) in products" @click="$router.push({name:'productUpdate',params:{id:item.id}})">
        <v-flex>
          <v-card>
            <v-layout class="pa-2">
              <c-image :src="item.image[0]" :width="100" :height="100">

              </c-image>
              <v-flex>
                <v-card-title primary-title>
                  <div>
                    {{item.name}}
                  </div>
                </v-card-title>
              </v-flex>
              <v-btn flat icon color="pink" @click.stop="del(item.id)">
                <v-icon>delete</v-icon>
                删除
              </v-btn>
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
import { Delete } from '../types/index';
import OptionBtn from '@/components/OptionBtn'

@Component({components:{
  OptionBtn
}})
export default class Work extends Vue {
  @State(state => state.team.currTeam) currTeam

  public products = new Array<Product>()
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
    this.list()
  }
  public list(){
    ProductApi.list(this.listParam).then(data => {
      this.products = data.content
    })
  }

  public clickAdd () {
    this.$router.push({ name: 'productAdd' })
  }

  public clickEdit () {
    this.$router.push({ name: 'productUpdate' })
  }

  public del(id){
    let params=new Delete(id)
    ProductApi.delete(params).then(data=>{
      this.list()
    })
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
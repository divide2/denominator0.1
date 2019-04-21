<template>
  <v-bottom-sheet v-model="sheet" class="detail-modal">
    <div :slot="'activator'">
      <v-flex>
        <v-card>
          <v-layout class="pa-2">
            <c-image :src="product.image[0]" class="product-img">

            </c-image>
            <v-flex>
              <v-card-title primary-title>
                <div>
                  {{product.name}}
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </div>
    <v-container class="detail">
      <v-subheader>{{product.name}}</v-subheader>
      <product-list v-model="specArr"></product-list>
      <v-btn block color="primary" @click="sure">确定</v-btn>
    </v-container>

  </v-bottom-sheet>

</template>

<style scoped lang='stylus'>
  .detail-modal {
    width: 100%;
    .product-img {
      width: 100px;
      height: 100px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
    }
  }
  .detail {
    background-color: #fff;
    .purchase {
      display: flex;
      .purchase-input {
        text-align center
        width 50px
      }
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'
import { Product } from '../../types/product';
import { Mutation, State } from 'vuex-class';
import { ProductSpecPrice } from '../../types/order';
import ProductList from './ProductList.vue'

@Component({ components: { ProductList } })
export default class File extends Vue {
  sheet = false
  specArr = new Array<ProductSpecPrice>()

  @Prop()
  product: Product

  @State(state => state.order.shopping_cart) shopping_cart

  @Mutation('setShoppingCart') setShoppingCart

  created () {
    // todo unit，amount数据结构需要更换
    this.specArr = this.product.specs.map(item => {
      return {
        amount: 0,
        productSpecId: item.id,
        productId: item.productId,
        price: item.price,
        unit: this.product.unit,
        image: item.image,
        name: item.name
      }
    })
    console.log(this.specArr, '========')
  }

  removeOne (obj) {
    if (obj.amount) {
      obj.amount--
    }
  }

  addOne (obj) {
    obj.amount++
  }

  sure () {
    const arr = this.specArr.filter(item => item.amount > 0).map(item => Object.assign({}, item))
    this.setShoppingCart(arr)
    this.sheet = false
    this.clear()
  }

  clear () {
    this.specArr.map(item => {
      item.amount = 0
      return Object.assign({}, item)
    })
  }

}
</script>
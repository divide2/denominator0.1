<template>
  <page :title="'采购'" :hasBack="true">
    <v-container>
      <v-stepper v-model="currStep">
        <v-stepper-header>
          <v-stepper-step :complete="currStep > 1" step="1">Name of step 1</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="currStep > 2" step="2">Name of step 2</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-select
                    v-model="order.toTeamId"
                    :items="cooperations"
                    :item-text="'name'"
                    :item-value="'id'"
                    @change="changeTeam">
            </v-select>
            <v-btn color="primary" @click="currStep = 2">下一步</v-btn>
            <v-btn flat @click="currStep = 1">上一步</v-btn>

          </v-stepper-content>

          <v-stepper-content step="2">

            <v-list two-line class="product">
              <detail-modal v-for="(item, index) in products" :product="item"></detail-modal>
            </v-list>


            <v-bottom-sheet v-model="sheet" class="d-inline-block">
              <template slot="activator">
                <v-btn fab>
                  <v-icon>shopping_cart</v-icon>
                </v-btn>
              </template>

              <product-list :specArr="shopping_cart"></product-list>
            </v-bottom-sheet>
            <v-btn color="primary" @click="currStep = 3">下一步</v-btn>
            <v-btn color="primary" @click="currStep = 1">上一步</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-form>
              <v-text-field label="定金" v-model="order.earnestMoney"></v-text-field>
              <v-text-field label="尾款" v-model="order.balancePayment"></v-text-field>
              <v-text-field label="附件" v-model="order.attachment"></v-text-field>
              <label for="">交付时间:</label> <input type="date" v-model="order.deliverDate">
              <v-divider></v-divider>
              <v-text-field label="备注" v-model="order.remarks"></v-text-field>
            </v-form>

            <v-btn color="primary" @click="save">保存</v-btn>

            <v-btn flat @click="currStep = 2">上一步</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Order } from '../types/order';
import OrderApi from '../../api/OrderApi';
import TeamApi from '../../api/TeamApi';
import { Team } from '../types/team';
import ProductApi from '../../api/ProductApi';
import { Page } from '../types/index';
import { Product } from '../types/product';
import DetailModal from './components/DetailModal.vue'
import { State } from 'vuex-class';
import ProductList from './components/ProductList.vue'

@Component({ components: { DetailModal, ProductList } })
export default class WarehouseAdd extends Vue {
  public order = new Order()
  public ifAdd = true
  public cooperations = new Array<Team>()
  public page = new Page()
  public currStep = 1// 当前步骤
  public products = new Array<Product>()
  public sheet = false
  public time = ''

  @State(state => state.order.shopping_cart) shopping_cart

  save () {
    OrderApi.add(this.order).then(data => {
      this.$router.back()
    })
  }

  created () {
    TeamApi.cooperationList().then(data => {
      this.cooperations = data
    })
  }

  getProducts () {
    ProductApi.list(this.page).then(data => {

    })
  }

  nextStep () {
    this.currStep = this.currStep === 2 ? this.currStep++ : 0
  }

  //todo 想变成是computed属性的products

  changeTeam (id) {
    if (!id) {
      return
    } else {
      ProductApi.list(this.page, id).then(data => {
        this.products = data.content
      })
    }
  }
}
</script>
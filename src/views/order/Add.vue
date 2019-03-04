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
                    v-model="cooperationId"
                    :items="cooperations"
                    :item-text="'name'"
                    :item-value="'id'"
                    @change="changeTeam">
            </v-select>
            <v-btn color="primary" @click="currStep = 2">下一步</v-btn>

          </v-stepper-content>

          <v-stepper-content step="2">

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
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-divider></v-divider>
              </div>
            </v-list>
            <v-btn color="primary" @click="currStep = 3">下一步</v-btn>

            <v-btn flat @click="currStep = 1">上一步</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
                    class="mb-5"
                    color="grey lighten-1"
                    height="200px"
            ></v-card>

            <v-btn color="primary" @click="">保存</v-btn>

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

@Component({ components: {} })
export default class WarehouseAdd extends Vue {
  public order = new Order()
  public ifAdd = true
  public cooperations = new Array<Team>()
  public cooperationId = ''
  public page = new Page()
  public currStep = 1// 当前步骤
  public products = new Array<Product>()

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
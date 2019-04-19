<template>
  <page :title="'添加商品'" class="add-product" :hasBack="true">
    <div class="white">
      <!--基本信息-->
      <form-group class="base-info" title="基本信息">
        <v-text-field label="商品名称" placeholder="请输入商品名称" v-model="product.name"></v-text-field>
        <v-layout class="img-list" wrap grid-list-md>
          <!--图片-->
          <v-flex xs4 class="img-item" v-for="(item,index) in product.image" :key="index">
            <c-image :src="item" :width="100" :height="100"></c-image>
          </v-flex>

          <!--添加图片按钮-->
          <v-flex xs4 class="img-item">
            <div class="img-item-add">
              <upload-image @getFile="getFile" class="file-upload-btn" name="productUploadFile"></upload-image>
            </div>
          </v-flex>
        </v-layout>
      </form-group>
      <v-divider></v-divider>

      <!--单位-->
      <form-group class="unit">
        <div slot="title" class="form-group-title">
          <span>单位</span>
          <v-btn class="ma-0 pa-0 btn-height" round color="primary" @click="addUnit">
            <v-icon size="20">add_circle</v-icon>
            <span>添加单位</span>
          </v-btn>
        </div>
        <units-component :units.sync="product.units" ref="units"></units-component>
      </form-group>
      <v-divider></v-divider>


      <!--规格-->
      <form-group class="specs">
        <div slot="title" class="form-group-title">
          <span>规格</span>
          <v-btn class="ma-0 pa-0 btn-height" round color="primary" @click="addSpecs">
            <v-icon size="20">add_circle</v-icon>
            <span>添加规格</span>
          </v-btn>
        </div>
        <!--规格输入-->
        <specs-component :specs="product.specs" ref="spec"></specs-component>
      </form-group>
      <v-divider></v-divider>
    </div>

    <v-container>
      <v-btn block @click="save" color="primary">添加</v-btn>
    </v-container>
  </page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'
import { Product, Specs } from '../types/product';
import ProductApi from '../../api/ProductApi';
import { Getter } from 'vuex-class';
import { Unit } from '../types/index';
import UnitsComponent from './component/unit'
import SpecsComponent from './component/specs'
import UploadImage from '@/components/form/UploadImage'

@Component({ components: { FileUpload, UnitsComponent, SpecsComponent, UploadImage } })
export default class AddProduct extends Vue {
  product = new Product()

  @Getter('token') token

  getFile (newFile) {
    this.product.image.push(newFile)
  }

  addSpecs () {
    const units = this.$refs.specs as any
    units.add()
  }

  add () {
    ProductApi.add(this.product).then(data => {
      this.$router.back()
    }).then(() => {
      console.log(111)
      this.$message({ message: this.$t('action.add') + this.$t('status.success'), type: 'success' })
    })
  }

  update () {
    ProductApi.update(this.product).then(data => {
      this.$router.back()
    })
  }

  save () {
    if (this.$route.name === 'productUpdate') {
      this.update()
    } else {
      this.add()
    }
  }

  created () {
    if (this.$route.name === 'productUpdate') {
      ProductApi.getDetail(this.$route.params.id).then(data => {
        this.product = data
      })
    }
  }

  addUnit () {
    const units = this.$refs.units as any
    units.add()
  }
}
</script>
<style scoped lang="stylus">
  .add-product {
    .btn-height {
      height: 25px;
    }
    .wrap-white {
      background-color: #fff;
    }
    .img-list {
      margin-right: -5px;
      margin-bottom: -5px;
      .img-item {
        padding-right: 5px;
        padding-bottom: 5px;
        text-align: center
        height: 100px;
        overflow: hidden;
        .img-box {
          height: 100%;
        }
      }
      .img-item-add {
        background-color: #ddd;
        width: 100%;
        height: 100%;
      }
      .file-upload-btn {
        width: 100%;
        height: 100%;
        display: flex;
        align-items center
        justify-content center
      }
    }
    .form-group-title {
      display flex
      justify-content space-between
      width 100%
      align-items center
      .add-icon {
        display flex
        align-items center
        height fit-height !important
      }
    }
  }
</style>
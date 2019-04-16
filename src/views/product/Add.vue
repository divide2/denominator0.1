<template>
  <page :title="'添加商品'" class="add-product" :hasBack="true">
    <div class="white">
      <!--基本信息-->
      <form-group class="base-info" title="基本信息">
        <v-text-field label="商品名称" placeholder="请输入商品名称" v-model="product.name"></v-text-field>
        <v-layout class="img-list">
          <!--图片-->
          <v-flex xs4 class="img-item" v-for="(item,index) in product.image" :key="index">
            <div class="img-box">
              <c-image :src="item" :width="100" :height="100"></c-image>
            </div>
          </v-flex>

          <!--添加图片按钮-->
          <v-flex xs4 class="img-item">
            <upload-image @getFile="getFile" class="file-upload-btn" name="productUploadFile"></upload-image>
          </v-flex>
        </v-layout>
      </form-group>

      <!--单位-->
      <form-group class="unit">
        <div slot="title" class="form-group-title">
          <span>单位</span>
          <v-icon size="20" color="green" @click="addUnit">add_circle</v-icon>
        </div>
        <units-component :units.sync="units" ref="units"></units-component>
      </form-group>

      <!--规格-->
      <form-group class="specs">
        <div slot="title" class="form-group-title">
          <span>规格</span>
          <v-icon size="20" color="green" @click="addSpecs">add_circle</v-icon>
        </div>
        <specs-component :specs="product.specs"></specs-component>
        <!--<v-layout column>-->
        <!--<v-layout v-for="(item,index) in product.specs" :key="index" row>-->
        <!--<v-flex>-->
        <!--<v-text-field label="规格名称" v-model="item.name"></v-text-field>-->
        <!--<v-text-field label="规格价格" v-model="item.price"></v-text-field>-->
        <!--<v-layout class="img-list">-->
        <!--<v-flex xs4 class="img-item" v-for="(it,index) in item.image" :key="index">-->
        <!--<div class="img-box">-->
        <!--<c-image :src="it" :width="100" :height="100"></c-image>-->
        <!--</div>-->
        <!--</v-flex>-->
        <!--{{item.image}}-->
        <!--<v-flex xs4 class="img-item">-->
        <!--<file-upload-->
        <!--class="img-box"-->
        <!--ref="specUpload"-->
        <!--v-model="specFiles"-->
        <!--:post-action="'/api/v1/upload/image'"-->
        <!--:headers="headers"-->
        <!--@input-file="specFile"-->
        <!--@input-filter="inputFilter"-->
        <!--&gt;-->
        <!--<v-btn flat block>-->
        <!--<v-icon>-->
        <!--add-->
        <!--</v-icon>-->
        <!--</v-btn>-->
        <!--</file-upload>-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <!--</v-flex>-->

        <!--<div class="d-flex align-center">-->
        <!--&lt;!&ndash;<v-icon>delete</v-icon>&ndash;&gt;-->
        <!--<v-btn flat icon color="pink">-->
        <!--<v-icon>delete</v-icon>-->
        <!--</v-btn>-->
        <!--</div>-->
        <!--</v-layout>-->
        <!--</v-layout>-->
        <v-layout class="img-list" wrap align-content-space-around>
        </v-layout>
      </form-group>
    </div>

    <v-btn block @click="save">添加</v-btn>
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
  public units = [new Unit()]

  @Getter('token') token

  getFile (newFile) {
    this.product.image.push(newFile)
  }

  /**
   * Pretreatment
   * @param  Object|undefined   newFile   读写
   * @param  Object|undefined   oldFile   只读
   * @param  Function           prevent   阻止回调
   * @return undefined
   */
//  public inputFilter (newFile: any, oldFile: any, prevent: any) {
//    if (newFile && !oldFile) {
//      // 过滤不是图片后缀的文件
//      if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
//        return prevent()
//      }
//    }
//
//    // 创建 blob 字段 用于图片预览
//    newFile.blob = ''
//    let URL = window.URL
//    if (URL && URL.createObjectURL) {
//      newFile.blob = URL.createObjectURL(newFile.file)
//    }
//  }

  addSpecs () {
    const specs = new Specs()
    this.product.specs.push(specs)
  }

  add () {
    ProductApi.add(this.product).then(data => {
      this.$router.back()
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
    .wrap-white {
      background-color: #fff;
    }
    .img-list {
      .img-item {
        text-align: center
        padding: 2px
        height: 100px;
        overflow: hidden;
        background-color: #ddd;
        .img-box {
          /*border: 1px dashed gray*/
        }
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
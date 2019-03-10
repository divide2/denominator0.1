<template>
  <page :title="'添加商品'" class="add-product" :hasBack="true">
    <!--<file-upload-->
    <!--ref="upload"-->
    <!--v-model="files"-->
    <!--:post-action="'/api/v1/upload/image'"-->
    <!--:headers="headers"-->
    <!--@input-file="inputFile"-->
    <!--@input-filter="inputFilter"-->
    <!--&gt;上传文件-->
    <!--</file-upload>-->

    <v-container grid-list-xs class="white">

      <v-text-field label="商品名称" v-model="product.name"></v-text-field>
      <v-layout class="img-list">
        <v-flex xs4 class="img-item" v-for="(item,index) in product.image" :key="index">
          <div class="img-box">
            <c-image :src="item" :width="100" :height="100"></c-image>
          </div>
        </v-flex>
        <v-flex xs4 class="img-item">
          <div class="img-box">
            <file-upload
                    ref="upload"
                    v-model="files"
                    :post-action="'/api/v1/upload/image'"
                    :headers="headers"
                    @input-file="inputFile"
                    @input-filter="inputFilter"
            >
              <v-btn flat block>
                <v-icon>
                  add
                </v-icon>
              </v-btn>
            </file-upload>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-subheader>
      规格
      <v-btn samll color="primary" @click="addSpecs">添加</v-btn>
    </v-subheader>
    <v-container grid-list-xs class="white">

      <v-layout column>
        <v-layout v-for="(item,index) in product.specs" :key="index" row>
          <v-flex>
            <v-text-field label="规格名称" v-model="item.name"></v-text-field>
            <v-text-field label="规格价格" v-model="item.price"></v-text-field>
            <!--<v-flex xs4 class="img-item">-->
              <!--<div class="img-box">-->
                <!--<v-btn flat block class="mt-0 mb-0">-->
                  <!--<v-icon>-->
                    <!--add-->
                  <!--</v-icon>-->
                <!--</v-btn>-->
              <!--</div>-->
            <!--</v-flex>-->
            <v-layout class="img-list">
              <v-flex xs4 class="img-item" v-for="(it,index) in item.image" :key="index">
                <div class="img-box">
                  <c-image :src="it" :width="100" :height="100"></c-image>
                </div>
              </v-flex>
              {{item.image}}
              <v-flex xs4 class="img-item">
                <div class="img-box">
                  <file-upload
                          ref="specUpload"
                          v-model="specFiles"
                          :post-action="'/api/v1/upload/image'"
                          :headers="headers"
                          @input-file="specFile"
                          @input-filter="inputFilter"
                  >
                    <v-btn flat block>
                      <v-icon>
                        add
                      </v-icon>
                    </v-btn>
                  </file-upload>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>

          <div class="d-flex align-center">
            <!--<v-icon>delete</v-icon>-->
            <v-btn flat icon color="pink">
              <v-icon>delete</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-layout>
      <v-layout class="img-list" wrap align-content-space-around>
      </v-layout>

    </v-container>

    <v-btn block @click="save">添加</v-btn>
  </page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'
import { Product, Specs } from '../types/product';
import ProductApi from '../../api/ProductApi';
import { getToken } from '@/route/Token'

@Component({ components: { FileUpload } })
export default class AddProduct extends Vue {
  product = new Product()
  public files = []
  public specFiles = []
  public headers = { Authorization: 'Bearer ' + getToken() }

  public inputFile (newFile: any, oldFile: any) {
    if (newFile && !oldFile) {
        this.$refs.upload.active = true
    }


    if (newFile && oldFile && !newFile.active && oldFile.active) {
      // 获得相应数据
      console.log('response', newFile.response)
      if(arr){
        arr.push(newFile.response.url)
      }else{
        this.product.image.push(newFile.response.url)
      }

      if (newFile.xhr) {
        //  获得响应状态码
        console.log('status', newFile.xhr.status)
      }
    }
  }

  public specFile (newFile: any, oldFile: any) {
    if (newFile && !oldFile) {
      this.$refs.upload.active = true
    }


    if (newFile && oldFile && !newFile.active && oldFile.active) {
      // 获得相应数据
      console.log('response', newFile.response)
      if(arr){
        arr.push(newFile.response.url)
      }else{
        this.product.image.push(newFile.response.url)
      }

      if (newFile.xhr) {
        //  获得响应状态码
        console.log('status', newFile.xhr.status)
      }
    }
  }

  /**
   * Pretreatment
   * @param  Object|undefined   newFile   读写
   * @param  Object|undefined   oldFile   只读
   * @param  Function           prevent   阻止回调
   * @return undefined
   */
  public inputFilter (newFile: any, oldFile: any, prevent: any) {
    if (newFile && !oldFile) {
      // 过滤不是图片后缀的文件
      if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
        return prevent()
      }
    }

    // 创建 blob 字段 用于图片预览
    newFile.blob = ''
    let URL = window.URL
    if (URL && URL.createObjectURL) {
      newFile.blob = URL.createObjectURL(newFile.file)
    }
  }

  addSpecs () {
    const specs = new Specs()
    this.product.specs.push(specs)
  }

  add () {
    ProductApi.add(this.product).then(data => {
      this.$router.back()
    })
  }

  update(){
    ProductApi.update(this.product).then(data => {
      this.$router.back()
    })
  }

  save(){
    if(this.$route.name === 'productUpdate'){
      this.update()
    }else{
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
        .img-box {
          border: 1px dashed gray
        }
      }
    }
  }
</style>
<template>
  <page :title="'添加商品'" class="add-product">
    <file-upload
            ref="upload"
            v-model="files"
            post-action="/v1/upload/image"
            @input-file="inputFile"
            @input-filter="inputFilter"
    >上传文件</file-upload>

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
      <v-btn fab small>
        <v-icon>add</v-icon>
      </v-btn>

    </v-container>
  </page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'

@Component({ components: { FileUpload } })
export default class AddProduct extends Vue {
  public files = []

  public inputFile(newFile:any, oldFile:any) {
    if (newFile && oldFile && !newFile.active && oldFile.active) {
      // 获得相应数据
      console.log('response', newFile.response)
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
  public inputFilter(newFile:any, oldFile:any, prevent:any) {
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
}
</script>
<style scoped lang="stylus">
  .add-product {
    .wrap-white {
      background-color: #fff;
    }
  }
</style>
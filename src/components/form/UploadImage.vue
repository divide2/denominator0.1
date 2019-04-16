<template>
  <div class="upload-image">
    <file-upload
            ref="upload"
            :input-id="name"
            v-model="files"
            :headers="headers"
            post-action="/api/v1/upload/image"
            @input-file="inputFile"
            @input-filter="inputFilter"
    >
      <slot>
        <div class="update-icon">
          <v-icon medium>
            add
          </v-icon>
        </div>
      </slot>
    </file-upload>
  </div>

</template>

<style scoped lang='stylus'>
  .update-image {
    width: 100%;
    height: 100%;
    .update-icon {
      width: 100%;
      height: 100%;
      background-color: #ddd;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class';
import FileUpload from 'vue-upload-component'

@Component({ components: { FileUpload } })
export default class UploadImage extends Vue {
  files = []
  @Getter('token') token

  @Prop()
  name: string

  get headers () {
    return { Authorization: 'Bearer ' + this.token }
  }

  inputFile (newFile, oldFile) {
    if (newFile && !oldFile) {
      this.$refs.upload.active = true
    }


    if (newFile && oldFile && !newFile.active && oldFile.active) {
      // 获得相应数据
      this.$emit('getFile', newFile.response.url)

      if (newFile.xhr) {
        //  获得响应状态码
        console.log('status', newFile.xhr.status)
      }
    }
  }

  inputFilter (newFile, oldFile, prevent) {
    if (newFile && !oldFile) {
      // 过滤不是图片后缀的文件
      if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
        return prevent()
      }
    }

    // 创建 blob 字段 用于图片预览
    newFile.blob = ''
    let URL = window.URL || window.webkitURL
    if (URL && URL.createObjectURL) {
      newFile.blob = URL.createObjectURL(newFile.file)
    }
  }

}
</script>
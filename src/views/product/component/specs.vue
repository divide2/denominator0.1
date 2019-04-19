<template>
  <div class="specs">
    <div v-for="(item,index) in specs" :key="index" class="spec">
      <v-layout row wrap>
        <v-flex xs7>
          <v-text-field
                  label="名称"
                  v-model="item.name"
                  placeholder="请输入名称"
          ></v-text-field>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-text-field
                  label="价格"
                  v-model="item.price"
                  placeholder="请输入价格"
          ></v-text-field>
        </v-flex>
        <v-layout wrap class="img-list">
          <v-flex xs4 class="img-item" v-for="(it,index) in item.image" :key="index">
            <c-image :src="it"></c-image>
          </v-flex>
          <v-flex xs4 class="img-item d-flex align-center">
            <upload-image @getFile="getNewFile(arguments,item)" class="file-upload-btn"
                          name="specsUploadFile"></upload-image>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout class="delete align-center">
        <v-btn small flat color="error" icon>
          <v-icon>
            mdi-minus-circle
          </v-icon>
        </v-btn>
      </v-layout>
    </div>
  </div>
</template>

<style scoped lang='stylus'>
  .specs {
    .spec {
      display: flex;
      .img-list {
        margin-right: -5px;
        margin-bottom: -5px;
      }
      .img-item {
        text-align: center
        height: 100px;
        overflow: hidden;
        padding-right: 5px;
        padding-bottom: 5px;
        .file-upload-btn {
          width: 100%;
          height: 100%;
          background-color: #ddd;
          display: flex;
          justify-content center
          align-items center
        }

      }
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'
import UploadImage from '@/components/form/UploadImage'
import { Specs } from '../../types/product';

@Component({ components: { FileUpload, UploadImage } })
export default class File extends Vue {
  public specFiles = []
  public headers = { Authorization: 'Bearer ' + this.token }

  @Prop()
  specs: any

  getNewFile () {
    arguments[1].image.push(arguments[0][0])
  }

  add () {
    const specs = new Specs()
    this.specs.push(specs)
  }
}
</script>
<template>
  <div class="specs">
    <div v-for="(item,index) in specs" :key="index" class="spec">
      <v-layout row wrap>
        <v-flex xs7>
          <v-text-field
                  label="名称"
                  outline
          ></v-text-field>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-text-field
                  label="价格"
                  outline
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-flex xs4 class="img-item" v-for="(it,index) in item.image" :key="index">
            <div class="img-box">
              <c-image :src="it" :width="100" :height="100"></c-image>
            </div>
          </v-flex>
          <v-flex xs4 class="img-item">
            <upload-image @getFile="getNewFile(arguments,item)" class="file-upload-btn"
                          name="specsUploadFile"></upload-image>
          </v-flex>
        </v-flex>
      </v-layout>
      <div class="delete pl-2">
        <v-icon size="20" @click="del(index)">delete</v-icon>
      </div>
    </div>
  </div>
</template>

<style scoped lang='stylus'>
  .specs {
    .spec {
      display: flex;
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import FileUpload from 'vue-upload-component'
import UploadImage from '@/components/form/UploadImage'

@Component({ components: { FileUpload, UploadImage } })
export default class File extends Vue {
  public specFiles = []
  public headers = { Authorization: 'Bearer ' + this.token }

  @Prop()
  specs: any

  getNewFile () {
    debugger
    arguments[1].image.push(arguments[0][0])
  }
}
</script>
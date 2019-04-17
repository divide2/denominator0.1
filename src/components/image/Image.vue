<template>
  <img class="image" :src="img_src" ref="image">
</template>

<style scoped lang='stylus'>
  .image {
    width: 100%;
    height: 100%;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
export default class File extends Vue {
  img_width = ''
  img_height = ''

  @Prop()
  src: string
  @Prop()
  width: number
  @Prop()
  height: number

//  get img_width () {
//    return this.width ? this.width : this.$refs.image.offsetWidth
//  }
//
//  get img_height () {
//    console.log(this.$refs.image.offsetHeight, 'get')
//    return this.height ? this.height : this.$refs.image.offsetHeight
//  }

  mounted () {
    this.img_width = this.width ? this.width : this.$refs.image.offsetWidth
    this.img_height = this.height ? this.height : this.$refs.image.offsetHeight
    console.log(this.$refs.image.offsetWidth)
    console.log(this.$refs.image.offsetHeight)
  }

  get img_src () {
    return this.src + `?imageView2/1/w/${this.img_width}/h/${this.img_height}`
  }
}
</script>
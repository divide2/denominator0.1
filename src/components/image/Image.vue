<template>
  <img :src="src + `?imageView2/1/w/${this.width}/h/${this.height}`" ref="image">
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
export default class File extends Vue {
  @Prop()
  src: string
  @Prop()
  width: number
  @Prop()
  height: number
}
</script>
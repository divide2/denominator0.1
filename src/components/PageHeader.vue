<template>
  <div>
    <v-toolbar color="indigo" dark fixed app>
     <slot></slot>
    </v-toolbar>
  </div>

</template>

<style>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// Todo 把整个pageHeader的属性弄成一个对象传进来
@Component({})
export default class PageHeader extends Vue {

  @Prop({default: false }) public drawer!: boolean

  @Prop({default: false }) public hasDrawer!: boolean

  @Prop({default: '除以二'}) public title!: string

  @Prop({default: false}) public hasBack!: boolean

  @Prop({default: () => ({})}) public iconArr!: object
}
</script>
<template>
  <div class="page">
    <v-toolbar light fixed app>
      <!--头部左边-->
      <slot name="headerLeft"></slot>
      <v-btn icon v-if="hasBack" @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <!--头部中间-->
      <slot name="headerMiddle"></slot>

      <v-spacer></v-spacer>

      <!--头部右边-->
      <slot name="headerRight"></slot>

    </v-toolbar>
    <v-content>
      <slot>
      </slot>
    </v-content>

    <slot name="footer">
    </slot>
  </div>
</template>

<style scoped>
.page {
  background-color: #e1e4e8;
  padding-bottom: 60px;
  min-height:100%;
}
</style>

<script lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    PageHeader
  }
})
export default class Page extends Vue {
  @Prop({ default: true })
  hasHeader!: boolean

  @Prop({ default: false })
  hasFooter!: boolean

  @Prop()
  title!: string

  @Prop({ default: false })
  hasBack!: boolean


  @Prop({ default: () => ({}) })
  iconArr!: object
}
</script>
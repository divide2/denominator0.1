<template>
  <div class="page">
    <slot name="header">
    </slot>
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
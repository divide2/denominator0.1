<template>
  <div class="page">
    <page-header v-if="hasHeader" :title="title"></page-header>

    <v-content>
      <v-container grid-list-md text-xs-center>
        <slot>
        </slot>
      </v-container>
    </v-content>

    <footer v-if="hasFooter">
    </footer>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    PageHeader
  }
})
export default class Page extends Vue {
  @Prop({ default: false })
  hasHeader!: boolean

  @Prop({ default: false })
  hasFooter!: boolean

  @Prop( )
  title!: string
}
</script>
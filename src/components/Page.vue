<template>
  <div class="page">
    <page-header v-if="hasHeader" :title="title" :hasBack="hasBack" :iconArr="iconArr"></page-header>

    <v-content>
      <!--<v-container grid-list-md text-xs-center>-->
        <slot>
        </slot>
      <!--</v-container>-->
    </v-content>

    <footer v-if="hasFooter">
    </footer>
  </div>
</template>

<style scoped>
  .page{
    background-color: #e1e4e8;
    padding-bottom:60px;
  }
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
  @Prop({ default: true })
  hasHeader!: boolean

  @Prop({ default: false })
  hasFooter!: boolean

  @Prop( )
  title!: string

  @Prop({default: false})
  hasBack!: boolean


  @Prop({default: () => ({})})
  iconArr!: object
}
</script>
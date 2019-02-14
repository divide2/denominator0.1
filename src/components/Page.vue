<template>
  <div class="page">
<!--    <div v-if="hasHeader">
      &lt;!&ndash;<v-toolbar color="indigo" dark fixed app>
        &lt;!&ndash;头部左边&ndash;&gt;
        <slot name="headerLeft"></slot>
        <v-btn icon v-if="hasBack" @click="$router.back()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>

        &lt;!&ndash;头部中间&ndash;&gt;
        <slot name="headerMiddle"></slot>

        <v-spacer></v-spacer>

        &lt;!&ndash;头部右边&ndash;&gt;
        <slot name="headerRight"></slot>

      </v-toolbar>&ndash;&gt;
    </div>-->

    <slot name="header">
      <form-page-header></form-page-header>

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
import FormPageHeader from './FormPageHeader'

@Component({
  components: {
    FormPageHeader,
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
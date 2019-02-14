<template>
  <page-header>
    <v-btn icon @click="$router.back()">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{title}}</v-toolbar-title>
  </page-header>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageHeader from './PageHeader'

@Component({
  components: { PageHeader }
})
export default class FormPageHeader extends Vue {

  @Prop({ default: '' }) title: string

}
</script>
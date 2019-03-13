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
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class PageHeader extends Vue {

}
</script>
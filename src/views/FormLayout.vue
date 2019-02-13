<template>
  <page :title="'商品'" :hasBack="true">
      <router-view>
      </router-view>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'

@Component({ components: { Page } })
export default class Work extends Vue {

}
</script>
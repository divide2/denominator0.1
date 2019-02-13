<template>
  <page :title="'商品'">
    <v-container>
      <router-view>
      </router-view>
    </v-container>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'

@Component({ components: { Page } })
export default class Work extends Vue {

}
</script>
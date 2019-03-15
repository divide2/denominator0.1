<template>
  <page>
    <v-card>
      去创建
    </v-card>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'
import PageHeader from '@/components/PageHeader.vue'

@Component({ components: { Page, PageHeader } })
export default class WithoutTeam extends Vue {


}
</script>
<style scoped>

</style>
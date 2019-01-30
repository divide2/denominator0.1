<template>
  <page :hasHeader="true" :title="'消息'">

  </page>
</template>

<style>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Page from '@/components/Page.vue'
@Component({components:{Page}})
export default class Message extends Vue {

}
</script>
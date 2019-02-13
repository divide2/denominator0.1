<template>
      <router-view>
      </router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page from '@/components/Page.vue'

@Component({ components: { Page } })
export default class Work extends Vue {

}
</script>
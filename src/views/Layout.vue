<template>
  <router-view>
  </router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomBar from '@/components/BottomBar.vue'
import PageHeader from '@/components/PageHeader.vue'

@Component({
  components: {
    BottomBar, PageHeader
  },
})
export default class Layout extends Vue {
}
</script>

<style scoped>

</style>
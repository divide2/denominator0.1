<template>
  <div>
    <transition>
        <router-view>
        </router-view>
    </transition>
    <bottom-bar></bottom-bar>
  </div>
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
export default class Home extends Vue {
  public drawer = null
  public hasDrawer = null
}
</script>

<style scoped>

</style>
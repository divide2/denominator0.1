<template>
  <v-app id="inspire">
    <transition>
      <keep-alive>
        <router-view>
        </router-view>
      </keep-alive>
    </transition>
    <bottom-bar></bottom-bar>
  </v-app>

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
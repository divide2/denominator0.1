<template>
  <v-app id="inspire">
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </v-app>

</template>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  input {
    outline: none;
  }
</style>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import BottomBar from '@/components/BottomBar.vue'

@Component({
  components: {
    BottomBar
  }
})
export default class App extends Vue {

}
</script>
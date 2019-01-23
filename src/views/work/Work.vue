<template>
  <div>
    <v-btn color="info" v-for="(item,index) in funcs">
      <v-iocn light>

      </v-iocn>
    </v-btn>
  </div>
</template>
<style>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Work extends Vue {
  private funcs=[{
    name: '采购'
  }]
}
</script>
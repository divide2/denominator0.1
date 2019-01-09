<template>
  <div class="about">
    <h1 @click="addCount">{{count}}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class About extends Vue {
  count = 0


  public addCount() {
    this.count++;
  }
}
</script>
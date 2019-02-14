<template>
  <page>
    <v-container grid-list-xs>
      <v-layout column>
        <v-text-field label="团队名称" required></v-text-field>
        <v-text-field label="人员规模" required></v-text-field>
        <v-text-field label="我的职位" required></v-text-field>
      </v-layout>
    </v-container>
  </page>
</template>

<style scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
export default class CreateTeam extends Vue {

}
</script>
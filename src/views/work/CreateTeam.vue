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
import { Vue, Component } from 'vue-property-decorator'
import FormPageHeader from '../../components/FormPageHeader'

@Component({ components: { FormPageHeader } })
export default class CreateTeam extends Vue {

}
</script>
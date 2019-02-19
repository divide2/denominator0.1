<template>
  <page :hasBack="true" :title="'审核团队申请人'">
    <v-container>
      <v-list>

      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GroupApi from '../../api/GroupApi';

@Component({ components: {} })
export default class Applications extends Vue {
  applications: Array<Applications> = []

  created () {
    GroupApi.getApplication(this.$route.params.id).then(data => {
      this.applications = data
    })
  }
}
</script>
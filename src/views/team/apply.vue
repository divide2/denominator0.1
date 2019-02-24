<template>
  <page :hasBack="true" :title="'申请团队'">
    <v-container grid-list-md text-xs-center class="white">
      <v-text-field label="我在团队的昵称" v-model="groupApply.memoName">

      </v-text-field>
      <v-btn block @click="apply">申请团队</v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TeamApply } from '../types/team';
import TeamApi from '../../api/TeamApi';

@Component({ components: {} })
export default class File extends Vue {
  groupApply = new TeamApply()

  created () {
    this.groupApply.toGroupId = this.$route.params.id
  }

  apply(){
    TeamApi.apply(this.groupApply).then(data=>{
      this.$router.back()
    })
  }

}
</script>
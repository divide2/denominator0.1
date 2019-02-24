<template>
  <page :hasBack="true" :title="'申请合作'">
    <v-container grid-list-md text-xs-center class="white">
      <v-textarea
              label="验证信息"
              v-model="cooperationApply.remarks">
      </v-textarea>
      <v-btn block @click="apply">申请团队</v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CooperationApply } from '../../types/team';
import TeamApi from '../../../api/TeamApi';

@Component({ components: {} })
export default class File extends Vue {
  cooperationApply = new CooperationApply()

  created () {
    this.cooperationApply.toGroupId = this.$route.params.id
    this.cooperationApply.fromGroupId = this.$store.state.group.groupId
  }

  apply () {
    TeamApi.cooperationApply(this.cooperationApply).then(data=> {
      this.$router.back()
    })
  }

}
</script>
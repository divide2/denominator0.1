<template>
  <page :hasBack="ture">
    <v-container>
      <v-text-field label="团队名称" v-model="group.name">

      </v-text-field>
      <v-btn block @click="add">
        立即创建团队
      </v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Team } from '../types/team';
import TeamApi from '../../api/TeamApi';

@Component({ components: {} })
export default class Add extends Vue {
  group=new Team()
  add(){
    TeamApi.add(this.group).then(data=>{
      this.$router.back()
    })
  }
}
</script>
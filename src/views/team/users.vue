<template>
  <page :hasBack="true">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex column @click="toPurchase" xs3 v-for="(item,index) in users">
          <v-img :src="item.user.avatar"></v-img>
          <p class="text-xs-center mb-1 mt-1">{{item.user.username}}</p>
          <p class="text-xs-center">{{item.role.name}}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TeamApi from '../../api/TeamApi';
import { TeamUser } from '../types/team';

@Component({ components: {} })
export default class Users extends Vue {
  users = new Array<TeamUser>()

  public created () {
    TeamApi.getUsers(this.$route.params.id).then(data => {
      this.users=data
    })
  }

}
</script>
<template>
  <page :hasBack="true" :title="'申请合作'">
    <v-container grid-list-md text-xs-center class="white">
      <v-layout wrap>
        <v-flex>
          <v-input
                  hide-details
                  append-icon="close"
                  prepend-icon="search"
          >
            <input type="search" class="pt-1" placeholder="输入手机号查找好友" v-model="query.query" @search="search">
          </v-input>
        </v-flex>
      </v-layout>

    </v-container>

    <v-container class="mt-5 white">
      <v-subheader>
        团队
      </v-subheader>
      <v-list>
        <div @click="$router.push({name:'teamDetail',params:{id:group.id}})">
          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <img :src="group.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ group.name }}</v-list-tile-title>
              <v-divider></v-divider>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-btn color="success" small @click.stop="$router.push({name:'cooperationApply',params:{id:group.id}})">
              申请合作
            </v-btn>
          </v-list-tile>
        </div>
      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SearchQuery } from '../../types/index';
import TeamApi from '../../../api/TeamApi';
import { Team } from '../../types/team';

@Component({ components: {} })
export default class cooperationApply extends Vue {
  query = new SearchQuery()
  group = new Team()

  search () {
    TeamApi.search(this.query).then(data => {
      this.group = data
    })
  }
}
</script>
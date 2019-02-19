<template>
  <page :hasBack="true">
    <v-container grid-list-md text-xs-center class="white">
      <v-layout wrap>
        <v-flex>
          <v-input
                  hide-details
                  append-icon="close"
                  prepend-icon="search"
          >
            <input type="search" class="pt-1" placeholder="输入团队名称查询" v-model="query.query" @search="search">
          </v-input>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="mt-5 white">
      <v-subheader>
        团队
      </v-subheader>
      <v-list>
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

            <v-btn color="success" @click="$router.push({name:'applyGroup',params:{id:group.id}})">
              申请
            </v-btn>
          </v-list-tile>
      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SearchQuery } from '../types/index';
import GroupApi from '../../api/GroupApi';
import { Group } from '../types/group';

@Component({ components: {} })
export default class File extends Vue {
  query=new SearchQuery()

  group=new Group()

  search(){
    GroupApi.search(this.query).then(data=>{
      // todo alert
      this.group=data
    })
  }
}
</script>
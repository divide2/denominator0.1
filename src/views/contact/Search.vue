<template>
  <page>
    <form-page-header slot="header" title="新的朋友"></form-page-header>
    <v-container grid-list-md text-xs-center class="white">
      <v-layout wrap>
        <v-flex>
          <v-input
                  hide-details="true"
                  append-icon="close"
                  prepend-icon="search"
          >
            <input type="search" class="pt-1" placeholder="输入手机号查找好友" v-model="query.query" @search="search">
          </v-input>
        </v-flex>
      </v-layout>

    </v-container>

    <v-container class="mt-5 white">
      <v-list>
        <div>
          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <img :src="user.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ user.username }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </div>
      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang="stylus">
  .contact-search {
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserApi from '../../api/UserApi';
import { UserSearchQuery } from '../types/index';
import FormPageHeader from '../../components/FormPageHeader'

@Component({ components: { FormPageHeader } })
export default class File extends Vue {
  query = new UserSearchQuery()
  user = {}

  search () {
    UserApi.search(this.query).then(data => {this.user = data}
    )
  }
}
</script>
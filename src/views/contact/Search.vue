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
            <input type="search" class="pt-1" placeholder="输入手机号查找好友" v-model="query.query" @search="search">
          </v-input>
        </v-flex>
      </v-layout>

    </v-container>

    <v-container class="mt-5 white">
      <v-subheader>
        新的朋友
      </v-subheader>
      <v-list>
        <div @click="confirm(item)" v-for="(item,index) in applications" :key="index">
          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.user.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.user.username }}</v-list-tile-title>
              <v-divider></v-divider>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <span v-if="item.status==='finish'">
              已通过
            </span>
            <v-btn color="success" small v-else-if="!item.selfApply">
              接受
            </v-btn>
            <span v-else>等待验证</span>
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
//todo 把application的状态写在常量文件
import { Vue, Component } from 'vue-property-decorator'
import UserApi from '../../api/UserApi';
import { UserSearchQuery } from '../types/index';
import FriendApi from '../../api/FriendApi';
import { Application } from '../types/friend';

@Component({ components: {} })
export default class File extends Vue {
  query = new UserSearchQuery()
  applications = new Array<Application>()

  public created () {
    FriendApi.getApplication().then(data => {
      this.applications = data
    })
  }

  search () {
    UserApi.search(this.query).then(data => {
        this.$router.push({ name: 'userDetail', params: { id: data.userId } })
      }
    )
  }

  confirm (item:Application) {
    if(item.status==='finish'||item.selfApply){
      this.$router.push({name:'userDetail',params:{id: item.user.userId}})
    }else if(!item.selfApply){
      this.$router.push({name:'confirmFriend',params:{id: item.user.userId}})
    }else {
      this.$router.push({name:'userDetail',params:{id: item.user.userId}})
    }
  }
}
</script>
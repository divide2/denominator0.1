<template>
  <page :hasBack="true">
    <v-card color="cyan darken-2" class="white--text">
      <v-layout class="pt-3 pb-3">
        <v-flex xs5>
          <v-img
                  :src="user.avatar"
                  height="125px"
                  contain
          ></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{user.username}}</div>
              <div v-if="user.friend">昵称：{{user.memoName}}</div>
              <div>性别：{{user.gender||'未知'}}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        信用值
        <v-spacer></v-spacer>
        <v-icon>star_border</v-icon>
      </v-card-actions>
    </v-card>
    <v-layout class="mt-2" column>
      <v-divider light></v-divider>
      <div v-if="user.friend">
      <v-flex class="pa-3 white text-xs-center">
        <v-icon size="15">message</v-icon><span class="ml-1">发消息</span>
      </v-flex>
      <v-divider light></v-divider>

      <v-flex class="pa-3 white text-xs-center">
        <v-icon size="15">settings</v-icon><span class="ml-1">设置备注昵称</span>
      </v-flex>
      <v-divider light></v-divider>

      <v-flex class="pa-3 white text-xs-center">
        <v-icon size="15">delete</v-icon><span class="ml-1">删除好友</span>
      </v-flex>
      <v-divider light></v-divider>

      <v-flex class="pa-3 white text-xs-center">
        <v-icon size="15">info</v-icon><span class="ml-1">投诉</span>
      </v-flex>
      </div>
      <div v-else>
        <v-flex class="pa-3 white text-xs-center" @click="$router.push({name:'applyFriend',params:{id:$route.params.id}})">
          <v-icon size="15">add</v-icon><span class="ml-1">添加好友</span>
        </v-flex>
      </div>
      <v-divider light></v-divider>
    </v-layout>
  </page>
</template>

<style scoped>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserApi from '../../api/UserApi';
import { User } from '../types/index';
// TODO 添加loading

@Component({ components: {} })
export default class UserDetail extends Vue {
  friends=[]
  user = new User()
  created () {
    UserApi.getDetail(this.$route.params.id).then(data => {
      this.user=data
    })
  }
}
</script>
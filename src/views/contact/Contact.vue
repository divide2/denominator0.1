<template>
  <page :hasHeader="true" :title="'联系'" class="mine">
    <div class="option">
      <v-list class="pt-0 pb-0">
        <div @click="$router.push({name:'searchFriend'})">
          <v-list-tile
              avatar=""
              @click="">
            <v-list-tile-avatar>
              <v-icon color="green">person_add</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>新的好友</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </div>

        <div @click="$router.push({name:'addTeam'})">
          <v-list-tile
              avatar=""
              @click="">
            <v-list-tile-avatar>
              <v-icon color="orange">group_add</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>创建团队</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </div>

        <div @click="$router.push({name:'searchTeam'})">
          <v-list-tile
              avatar=""
              @click="">
            <v-list-tile-avatar>
              <v-icon color="orange">group_add</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>申请团队</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </div>

      </v-list>
    </div>

    <div class="team-list">
      <v-subheader>
        我的团队
      </v-subheader>
      <v-list class="pt-0 pb-0">
        <div v-for="(item, index) in groups" :key="index" @click="$router.push({name:'teamDetail',params:{id:item.id}})">

          <v-list-tile
              avatar
              @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider></v-divider>
        </div>

      </v-list>
    </div>
    <div class="mine-info">
      <v-subheader>
        我的好友
      </v-subheader>
      <v-list class="pt-0 pb-0">
        <div v-for="(item, index) in friends" :key="index">

          <v-list-tile
              avatar
              @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.memoName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


          <v-divider></v-divider>
        </div>

      </v-list>
    </div>
  </page>
</template>

<style scoped lang="stylus">
  .mine {
    .mine-info {
      .user-name {
        margin-left: 20px;
      }
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MineApi from '../../api/MineApi'
import FriendApi from '../../api/FriendApi';

@Component({ components: {} })
export default class Contact extends Vue {
  public friends = []
  public groups = []
  public user = { name: '陈晓芭', avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png', company: '玩途自由行' }

  created() {
    MineApi.listFriends().then((data) => {
      this.friends = data
    })
    MineApi.listTeams().then((data) => {
      this.groups = data
    })
  }

  public items = [
    {
      action: 'local_activity',
      title: 'Attractions',
    },
    {
      action: 'restaurant',
      title: 'Dining',
    },
    {
      action: 'school',
      title: 'Education'
    },
    {
      action: 'school',
      title: 'Education'
    },
    {
      action: 'school',
      title: 'Education'
    }
  ]
}
</script>
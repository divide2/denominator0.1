<template>
  <page :title="'我的'" class="mine">
    <div class="mine-info">
      <v-card>
        <v-card-title>
          <v-avatar
              :size="'50'"
              color="grey lighten-4"
          >
            <img :src="user.avatar" alt="avatar">
          </v-avatar>
          <span class="user-name">{{user.nickname}}</span>
          <div class="company">{{user.username}}</div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">联系我们</v-btn>
        </v-card-actions>
      </v-card>
      <v-list style="padding:0;margin-top:10px;">
        <v-divider></v-divider>
        <v-list-tile
            avatar
            @click="logout"
        >
          <v-list-tile-avatar>
            <v-icon color="error">mdi-exit-to-app</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-title>退出登录</v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>

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
import {Vue, Component} from 'vue-property-decorator'
import {Action, Getter} from 'vuex-class'
import {User} from '../types'

@Component({components: {}})
export default class File extends Vue {
  @Getter('userInfo') user: User;
  @Action('logout') logout;

  logout() {
    this.logout().then(()=> {
      this.$router.push({name: 'login'})
    });
  }
}
</script>
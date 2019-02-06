<template>
  <page :hasHeader="true" :title="'我的'" class="mine">
    <div class="mine-info">
      <v-card>
        <v-card-title>
          <v-avatar
                  :size="'50'"
                  color="grey lighten-4"
          >
            <img :src="user.avatar" alt="avatar">
          </v-avatar>
          <span class="user-name">{{user.name}}</span>
          <div class="company">{{user.company}}</div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">联系我们</v-btn>
        </v-card-actions>
      </v-card>

      <v-list style="padding:0;margin-top:10px;">

        <div v-for="item in items" :key="item.title">

          <v-list-tile
                  avatar
                  @click=""
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.action }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
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

@Component({ components: {} })
export default class File extends Vue {
  public user = { name: '陈晓芭', avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png', company: '玩途自由行' }

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
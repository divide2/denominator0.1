<template>
  <page :hasHeader="true" :title="'联系'" class="mine">
    <div class="mine-info">
      <v-list style="padding:0;margin-top:10px;">
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

@Component({ components: {} })
export default class File extends Vue {
  public friends = []
  public user = { name: '陈晓芭', avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png', company: '玩途自由行' }

  created() {
    MineApi.listFriends().then(data =>{
      this.friends = data
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
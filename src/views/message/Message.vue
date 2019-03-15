<template>
  <page :hasHeader="true" title="消息">
    <v-list two-line>
      <div v-for="(item, index) in chats" :key="index">
        <v-list-tile
                avatar
                @click="$router.push({name:'chatRoom',params:{chatRoomId: item.target}})"
        >
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.content"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider :inset="true"></v-divider>
      </div>
    </v-list>
  </page>
</template>

<style>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Page from '@/components/Page.vue'
import MineApi from '../../api/MineApi'

@Component({ components: { Page } })
export default class Message extends Vue {
  chats = []
  async created() {
    this.chats = await MineApi.listChats()
  }

}
</script>
<template>
  <page :hasHeader="true" :title="'消息1'">
    <v-list two-line>
      <div v-for="(item, index) in items" :key="index">
        <v-list-tile
                avatar
                @click="$router.push({name:'chatRoom',params:{chatRoomId: item.id}})"
        >
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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

@Component({ components: { Page } })
export default class Message extends Vue {

  public items= [
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      id: 1,
      subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      id: 1,
      subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    },
    {
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      id: 1,
      subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
    }
    ]

  beforeRouteEnter (to, from, next) {
    console.log(from)
    next()
  }
}
</script>
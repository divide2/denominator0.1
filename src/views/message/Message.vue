<template>
  <page :hasHeader="true" :title="'消息'">
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile
                :key="item.title"
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
      </template>
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
  public mess = [{
    avator: 'https://timg01.bdimg.com/timg?pacompress&imgtype=0&sec=1439619614&autorotate=1&di=ecc13e4d65c4c800cd469980b725e649&quality=90&size=b200_10071&cut_x=0&cut_y=0&cut_w=200&cut_h=200&src=http%3A%2F%2Ftimg01.bdimg.com%2Ftimg%3Fpacompress%26imgtype%3D0%26sec%3D1439619614%26autorotate%3D1%26di%3D9592ed769bdbbc0a21d98f1db12767bc%26quality%3D90%26size%3Db870_10000%26src%3Dhttp%253A%252F%252Fpic.rmb.bdstatic.com%252F152095037053cbadf3239b8bf7c9bb8ccbc2778e02.png',
    mess: '12312'
  }, {
    avator: 'https://timg01.bdimg.com/timg?pacompress&imgtype=0&sec=1439619614&autorotate=1&di=ecc13e4d65c4c800cd469980b725e649&quality=90&size=b200_10071&cut_x=0&cut_y=0&cut_w=200&cut_h=200&src=http%3A%2F%2Ftimg01.bdimg.com%2Ftimg%3Fpacompress%26imgtype%3D0%26sec%3D1439619614%26autorotate%3D1%26di%3D9592ed769bdbbc0a21d98f1db12767bc%26quality%3D90%26size%3Db870_10000%26src%3Dhttp%253A%252F%252Fpic.rmb.bdstatic.com%252F152095037053cbadf3239b8bf7c9bb8ccbc2778e02.png',
    mess: '12312'
  }, {
    avator: 'https://timg01.bdimg.com/timg?pacompress&imgtype=0&sec=1439619614&autorotate=1&di=ecc13e4d65c4c800cd469980b725e649&quality=90&size=b200_10071&cut_x=0&cut_y=0&cut_w=200&cut_h=200&src=http%3A%2F%2Ftimg01.bdimg.com%2Ftimg%3Fpacompress%26imgtype%3D0%26sec%3D1439619614%26autorotate%3D1%26di%3D9592ed769bdbbc0a21d98f1db12767bc%26quality%3D90%26size%3Db870_10000%26src%3Dhttp%253A%252F%252Fpic.rmb.bdstatic.com%252F152095037053cbadf3239b8bf7c9bb8ccbc2778e02.png',
    mess: '12312'
  }]

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
}
</script>
<template>
  <v-bottom-nav
          :active.sync="bottomNav"
          :color="color"
          :value="true"
          app
          dark
  >
    <v-btn v-for="(item,index) in viewObj">
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<style>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class BottomBar extends Vue {
  viewObj = [{
    name:'消息',
    icon: 'chat',
    url: ''
  },{
    name:'商城',
    icon: 'store_mall_directory',
    url: ''
  },{
    name:'工作',
    icon: 'work',
    url: ''
  },{
    name:'通讯录',
    icon: 'people',
    url: ''
  },{
    name:'我的',
    icon: 'face',
    url: ''
  }]
}
</script>
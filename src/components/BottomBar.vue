<template>
  <v-bottom-nav
          :value="true"
          app
          dark
  >
    <v-btn v-for="(item,index) in viewObj" :key="index" @click="test(item.pathName)">
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
  private viewObj = [{
    name: '消息',
    icon: 'chat',
    pathName: ''
  }, {
    name: '商城',
    icon: 'store_mall_directory',
    pathName: ''
  }, {
    name: '工作',
    icon: 'work',
    pathName: 'work'
  }, {
    name: '通讯录',
    icon: 'people',
    pathName: ''
  }, {
    name: '我的',
    icon: 'face',
    pathName: ''
  }]
  public test (path: string) {
    this.$router.push({ name: path })
  }
}
</script>
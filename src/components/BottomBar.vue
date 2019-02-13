<template>
  <v-bottom-nav
          :value="true"
          app
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
    pathName: 'message'
  }, {
    name: '工作',
    icon: 'work',
    pathName: 'work'
  }, {
    name: '联系',
    icon: 'contacts',
    pathName: 'contact'
  }, {
    name: '我的',
    icon: 'face',
    pathName: 'mine'
  }]

  public test (path: string) {
    this.$router.push({ name: path })
  }
}
</script>
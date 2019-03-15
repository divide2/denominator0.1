<template>
  <page :title="'我的合作伙伴'" :hasBack="true">
    <v-list v-for="(item, index) in cooperations"
            :key="index">
      <v-list-tile
          avatar
          @click="$router.push({name:'warehouseUpdate',params:{id:item.id}})"
      >
        <v-list-tile-avatar>
          <img :src="item.image" alt="">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.remarks }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action @click.stop="del(item.id)">
          <v-icon>delete</v-icon>
        </v-list-tile-action>

      </v-list-tile>
      <v-divider></v-divider>
    </v-list>

  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TeamApi from '../../../api/TeamApi';
import { Team } from '../../types/team';

@Component({ components: {} })
export default class List extends Vue {
  cooperations: Team[] = [];

  created() {
    TeamApi.cooperationList().then(data => {
      this.cooperations = data
    })
  }
}
</script>
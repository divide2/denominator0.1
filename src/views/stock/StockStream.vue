<template>
  <page :hasBack="true">
    <v-card>
      <v-list expand>

        <v-list-tile
            v-for="item in streams"
            :key="item.id"
            @click=""
        >
          <v-list-tile-avatar>
            <v-img :src="item.image && item.image[0]"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>{{ item.productName }}</span>
              --
              <span>{{item.productSpecName}}</span>
            </v-list-tile-title>
            <v-list-tile-sub-title>数量: {{ item.stream}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StockApi from '../../api/StockApi'

@Component({ components: {} })
export default class StockStream extends Vue {
  streams = []

  public created() {
    StockApi.stream().then(data => {
      this.streams = data.content
    })
  }

}
</script>
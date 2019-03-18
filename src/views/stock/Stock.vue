<template>
  <page :hasBack="true">

    <v-card>
      <v-list expand>
        <v-list-group
            v-for="item in stocks"
            :key="item.id"
        >
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-avatar>
                <v-img :src="item.image && item.image[0]"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                <v-list-tile-sub-title>数量: {{ item.amount}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile
              v-for="jtem in item.specs"
              :key="jtem.id"
              @click=""
          >
            <v-list-tile-avatar>
              <v-img :src="jtem.image && jtem.image[0]"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ jtem.name }}</v-list-tile-title>
              <v-list-tile-sub-title>数量: {{ jtem.amount}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
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
export default class Users extends Vue {
  stocks = []

  public created() {
    StockApi.list().then(data => {
      this.stocks = data.content
    })
  }

}
</script>
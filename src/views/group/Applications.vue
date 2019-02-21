<template>
  <page :hasBack="true" :title="'团队申请'">
    <v-container>
      <v-list>
        <v-list-tile
                v-for="(item, index) in applications"
                avatar
                @click.native="$router.push({name:'userDetail',params:{id:item.user.userId}})"
        >
          <v-list-tile-avatar>
            <img :src="item.user.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.memoName }}</v-list-tile-title>
            <v-divider></v-divider>
          </v-list-tile-content>
          <v-spacer></v-spacer>

          <span v-if="item.status==='finish'">
            已通过
          </span>

          <v-btn
                  v-else
                  color="success"
                  @click.stop="$router.push({name:'groupConfirm',params:{id:item.id}})">
            接受
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GroupApi from '../../api/GroupApi';

@Component({ components: {} })
export default class Applications extends Vue {
  applications: Array<Applications> = []

  created () {
    GroupApi.getApplication(this.$route.params.id).then(data => {
      this.applications = data
    })
  }
}
</script>
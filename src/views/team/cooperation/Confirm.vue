<template>
  <page :hasBack="true" :title="'确认合作'">
    <v-container class="mt-5 white">
      <v-subheader>
        团队
      </v-subheader>
      <v-list>
        <div
            v-for="(item,index) in applications" :key="index"
            @click="$router.push({name:'teamDetail',params:{id:group.id}})">
          <v-list-tile
              avatar
              @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.team.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.remarks }}</v-list-tile-title>
              <v-divider></v-divider>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <div v-if="item.status==='waiting_confirm'">
              <span v-if="item.selfApply">
                              正在验证

              </span>
              <v-btn color="success" small @click.stop="confirm(item.id)" v-else>
                通过
              </v-btn>
            </div>
            <div v-else>
              已通过
            </div>

          </v-list-tile>
        </div>
      </v-list>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import TeamApi from '../../../api/TeamApi';
import {CooperationApply} from '../../types/team';

@Component({components: {}})
export default class cooperationApply extends Vue {
  applications: CooperationApply [] = [];

  created() {
    TeamApi.getCooApplications(this.$store.state.team.currTeam.id).then(data => {
      this.applications = data
    })
  }

  confirm(id) {
    let param = {id: id}
    TeamApi.cooperationConfirm(param).then(data => {
      console.log('success')
    })

  }
}
</script>
<template>
  <page :hasBack="true">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
                  :src="group.image"
                  aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{group.name}}</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-list>
      <div @click="goTo">

        <v-list-tile
                avatar
                @click=""
        >
          <v-list-tile-avatar>
            <v-icon>local_activity</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>团队成员</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
      </div>
    </v-list>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import  { Vue, Component } from 'vue-property-decorator'
import { Team } from '../types/team';
import TeamApi from '../../api/TeamApi';

@Component({ components: {} })
export default class Detail extends Vue {
  group=new Team()

  public created(){
    TeamApi.getTeam(this.$route.params.id).then(data=>{
      this.group=data
    })
  }

  goTo(){
    this.$router.push({name:'teamUsers',params:{id:this.$route.params.id}})
  }
}
</script>
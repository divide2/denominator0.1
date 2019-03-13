<template>
  <page :hasBack="true">

    <v-card>
      <v-list>
        <v-list-group
            v-for="member in members"
            :key="member.squad.id"
            :value="true"
        >
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ member.squad.name }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat color="warning" icon @click.stop="setAuth('squad', member.squad.id)">
                  <v-icon>mdi-lock</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </template>

          <v-list-tile
              v-for="user in member.user"
              :key="user.userId"
              @click=""
          >
            <v-list-tile-avatar>
              <v-img :src="user.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ user.username }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon color="warning" flat @click.stop="setAuth('user',user.userId)">
                <v-icon>mdi-lock</v-icon>
              </v-btn>
            </v-list-tile-action>
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
import TeamApi from '../../api/TeamApi';

@Component({ components: {} })
export default class Users extends Vue {
  members = []

  public created() {
    TeamApi.getMembers().then(data => {
      this.members = data
    })
  }

  setAuth(type: string, id) {
    this.$router.push({ name: 'memberAuth', params: { type, id} })
  }

}
</script>
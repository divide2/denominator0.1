<template>
  <page hasBack>
    <v-card>
      <v-list two-line subheader>
        <v-subheader>团队</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Show your status</v-list-tile-title>
            <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list
          subheader
          two-line
      >
        <v-subheader dark>产品</v-subheader>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-tile-action>

          <v-list-tile-content @click="notifications = !notifications">
            <v-list-tile-title>Notifications</v-list-tile-title>
            <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </page>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component()
export default class Workbench extends Vue {

}
</script>
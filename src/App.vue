<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            fixed
            app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>


    <v-content>
      <v-container fluid fill-height>
        <v-layout
                justify-center
                align-center
        >
          <transition>
            <keep-alive>
              <router-view>
              </router-view>
            </keep-alive>
          </transition>
          <!--<v-flex text-xs-center>-->
            <!--<v-tooltip left>-->
              <!--<v-btn slot="activator" :href="source" icon large target="_blank">-->
                <!--<v-icon large>code</v-icon>-->
                <!--dsfhodfi-->
              <!--</v-btn>-->
              <!--<span>Source</span>-->
            <!--</v-tooltip>-->
            <!--<v-tooltip right>-->
              <!--<v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">-->
                <!--<v-icon large>mdi-codepen</v-icon>-->
              <!--</v-btn>-->
              <!--<span>Codepen</span>-->
            <!--</v-tooltip>-->
          <!--</v-flex>-->

        </v-layout>
      </v-container>
    </v-content>

    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BottomBar from '@/components/BottomBar.vue'

@Component({
  components: {
    BottomBar
  }
})
export default class App extends Vue {
  public drawer = null
}
</script>
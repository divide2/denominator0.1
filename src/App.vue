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
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
                dsfhodfi
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-bottom-nav
            :active.sync="bottomNav"
            :color="color"
            :value="true"
            app
            dark
    >
      <v-btn dark>
        <span>消息</span>
        <v-icon :color="'darken-2'">chat</v-icon>
      </v-btn>

      <v-btn dark>
        <span>商城</span>
        <v-icon>store_mall_directory</v-icon>
      </v-btn>

      <v-btn dark>
        <span>工作</span>
        <v-icon>work</v-icon>
      </v-btn>


      <v-btn dark>
        <span>通讯录</span>
        <v-icon>people</v-icon>
      </v-btn>

      <v-btn dark>
        <span>我的</span>
        <v-icon>face</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
}
</script>
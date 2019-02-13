<template>
  <div>
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
      <v-toolbar-side-icon v-if="hasDrawer" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon v-if="hasBack" @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat icon v-if="iconArr.add" @click="iconArr.clickAdd">
          <v-icon size="30">add</v-icon>
        </v-btn>
        <v-btn flat icon v-if="iconArr.edit">
          <v-icon size="25">edit</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>

</template>

<style>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// Todo 把整个pageHeader的属性弄成一个对象传进来
@Component({})
export default class PageHeader extends Vue {

  @Prop({default: false }) public drawer!: boolean

  @Prop({default: false }) public hasDrawer!: boolean

  @Prop({default: '除以二'}) public title!: string

  @Prop({default: false}) public hasBack!: boolean

  @Prop({default: () => ({})}) public iconArr!: object
}
</script>
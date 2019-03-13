<template>
  <page :hasBack="true">
  <v-card>
    <v-card-text>
      <v-treeview
          :items="menus"
          activatable
          active-class="grey lighten-4 indigo--text"
          selected-color="indigo"
          open-on-click
          selectable
          expand-icon="mdi-chevron-down"
      >
      </v-treeview>
    </v-card-text>
  </v-card>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MenuApi from '../../api/MenuApi'
import { MenuTree } from '../types/workbench'

@Component({ components: {} })
export default class Users extends Vue {

  menus: MenuTree[] = []

  async created() {
    this.menus = await MenuApi.tree()
  }
}
</script>
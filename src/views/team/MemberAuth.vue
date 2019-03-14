<template>
  <page :hasBack="true">
  <v-card>
    <v-card-text>
      <v-treeview
          :items="menus"
          v-model="tree"
          activatable
          active-class="grey lighten-4 indigo--text"
          selected-color="indigo"
          open-on-click
          selectable
          expand-icon="mdi-chevron-down"
      >
      </v-treeview>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="save" color="success">保存</v-btn>
    </v-card-actions>
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

  tree = [];
  menus: MenuTree[] = []

  get leafs() {
    let leaf = [];
    this.menus.forEach(p => {
      p.children.forEach(c => {
        if (this.tree.includes(c.id)) {
          leaf.push(c.id);
        }
      })
    });
    return leaf;
  }
  async created() {
    this.menus = await MenuApi.tree()
  }

  save() {
    console.log(this.leafs);
  }
}
</script>
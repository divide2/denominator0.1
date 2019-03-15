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
import TeamApi from '../../api/TeamApi'
import { Auth } from '../types/team'

@Component({ components: {} })
export default class Users extends Vue {

  tree = [];
  menus: MenuTree[] = []
  auth = new Auth()

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
    this.tree = await TeamApi.listTeamUserMenus(this.$route.params.type, this.$route.params.id)
  }

  async save() {
    this.auth.principleId = this.$route.params.id
    this.auth.principleType = this.$route.params.type
    this.auth.teamId = this.$store.getters.teamId
    this.auth.menuIds = this.leafs
    await TeamApi.setAuth(this.auth)
    this.$router.back()
  }
}
</script>
<template>
  <page :hasBack="true">
    <v-container>
      <v-text-field label="设置昵称" v-model="confirmForm.memoName">

      </v-text-field>
      <v-btn block @click="confirm">
        确定
      </v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FriendApi from '../../api/FriendApi';
import { Confirm } from '../types/friend';

@Component({ components: {} })
export default class File extends Vue {
  public confirmForm = new Confirm()

  created () {
    this.confirmForm.toId = this.$route.params.id
  }

  public confirm () {
    FriendApi.confirm(this.confirmForm).then(data => {
      this.$router.back()
    })
  }
}
</script>
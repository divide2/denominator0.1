<template>
  <page :hasBack="true">
    <v-container>
      <v-text-field label="备注名" v-model="confirmForm.memoName">
      </v-text-field>
      <v-btn block @click="confirm">确定</v-btn>
    </v-container>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ConfirmForm } from '../types/team';
import TeamApi from '../../api/TeamApi';

// todo 1.把memoName从上一页记住在state中穿过来 2.弹出框
@Component({ components: {} })
export default class Confirm extends Vue {
  confirmForm = new ConfirmForm()

  created () {
    this.confirmForm.groupApplicationId = this.$route.params.id
  }

  confirm(){
    TeamApi.confirm(this.confirmForm).then(data=>{
      console.log('seccess')
      this.$router.back()
    })
  }

}
</script>
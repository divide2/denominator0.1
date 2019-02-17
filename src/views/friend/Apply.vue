<template>
  <page class="friend-apply" :title="'添加好友'" :hasBack="true">
    <v-container class="white">
      <div class="alert">
        <v-alert
                class="mt-0"
                block
                :value="showAlert"
                type="success"
                transition="scale-transition"
        >
          发送成功
        </v-alert>
      </div>

      <v-textarea
              label="验证信息"
              v-model="applyForm.remarks"
      ></v-textarea>
      <v-text-field label="设置昵称" v-model="applyForm.memoName">

      </v-text-field>
      <v-btn block @click="apply">发送</v-btn>
    </v-container>
  </page>
</template>

<style scoped lang="stylus">
  .friend-apply {
    .alert {
      position: fixed
      top: 0
      left: 0
      right: 0
      z-index: 999
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FriendApi from '../../api/FriendApi';
import { ApplyForm } from '../types/friend';
// todo 把我的信息存在vuex中，验证信息中初始值为：我是'xxx'
@Component({ components: {} })
export default class Apply extends Vue {
  public applyForm: any
  public showAlert = false

  public created () {
    this.applyForm = new ApplyForm(parseFloat(this.$route.params.id))
  }

  public apply () {
    //todo 不知道为啥会报错
    FriendApi.apply(this.applyForm).then(data => {
      this.showAlert = true
      // todo 把alert包裹成一个组件
      setTimeout(() => {
        this.showAlert = false
        this.$router.back()
      }, 1000)
    })
  }
}
</script>k
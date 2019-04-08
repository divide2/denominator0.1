<template>
  <v-container>
    <v-content>
      <h1 style="margin-top: 50px;">新用户注册</h1>
      <v-form ref="form" v-model="valid">
        <v-text-field
            v-model="joinForm.account"
            label="手机号"
            :rules="phoneRules"
            required
        ></v-text-field>
        <v-input>
          <v-text-field
              v-model="joinForm.verifyCode"
              label="验证码"
              required
          ></v-text-field>
          <v-btn slot="append" color="primary" @click="sendVerifyCode">获取验证码</v-btn>
        </v-input>

        <v-btn @click="join()" round block color="primary">注册</v-btn>
      </v-form>
    </v-content>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { JoinForm } from '../types'
import LoginApi from '@/api/LoginApi'

@Component({})
export default class Register extends Vue {
  public valid = false

  public joinForm = new JoinForm()
  phoneRules = [
    v => !!v || '必填'
  ]

  public join() {
    LoginApi.join(this.joinForm).then(data => {
      this.$router.push('/')
    })
  }

  public sendVerifyCode() {
    LoginApi.sendVerifyCode(this.joinForm.account).then(() => {

    })
  }
}
</script>

<style scoped>

</style>
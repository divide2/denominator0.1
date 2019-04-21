<template>
  <v-container>
    <v-content>
      <h1 style="margin-top: 50px;">找回密码</h1>
      <v-form>
        <v-text-field
            v-model="joinForm.account"
            label="手机号"
            v-validate="'required'"
            data-vv-name="joinForm.account"
            :error-messages="errors.collect('joinForm.account')"
            required
        ></v-text-field>
        <v-input>
          <v-text-field
              v-model="joinForm.verifyCode"
              label="验证码"
              v-validate="'required|length:6'"
              data-vv-name="joinForm.verifyCode"
              :error-messages="errors.collect('joinForm.verifyCode')"
          >
          </v-text-field>
          <v-btn slot="append" color="primary" @click="sendVerifyCode">获取验证码</v-btn>
        </v-input>


        <v-text-field
            v-model="joinForm.password"
            type="password"
            label="密码"
            v-validate="'required|min:6|max:30'"
            data-vv-name="password"
            :error-messages="errors.collect('password')"
        >
        </v-text-field>
        <v-text-field
            v-model="joinForm.rePassword"
            type="password"
            label="确认密码"
            v-validate="'required|confirmed:password'"
            data-vv-name="joinForm.rePassword"
            :error-messages="errors.collect('joinForm.rePassword')"
        >
        </v-text-field>

        <v-btn @click="join()" round block color="primary">{{$t('action.findPwd')}}</v-btn>
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

  public joinForm = new JoinForm()


  public async join() {
    console.log(this.errors)
    const valid = await this.$validator.validateAll()
    if (valid) {
      LoginApi.join(this.joinForm).then(data => {
        this.$router.push('/')
      });
    }
  }

  public sendVerifyCode() {
    LoginApi.sendVerifyCode(this.joinForm.account).then(() => {

    })
  }
}
</script>

<style scoped>

</style>
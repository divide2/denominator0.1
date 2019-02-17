<template>
  <v-container>
    <v-content>
      <v-form v-model="valid">
        <v-text-field
                v-model="form.username"
                label="Username"
                required
        ></v-text-field>
        <v-text-field
                v-model="form.password"
                label="Password"
                required
        ></v-text-field>
        <v-btn @click="login">登录</v-btn>
      </v-form>
      <v-form>
        <v-text-field
                v-model="joinForm.account"
                label="Username"
                required
        ></v-text-field>
        <v-text-field
                v-model="joinForm.password"
                label="Password"
                required
        ></v-text-field>
        <v-btn @click="join">注册</v-btn>
      </v-form>
    </v-content>
  </v-container>
</template>

<script lang="ts">
// todo 修改样式
import { Component, Vue } from 'vue-property-decorator'
import { joinForm, LoginForm } from '../types'
import LoginApi from '@/api/LoginApi'
import { setToken } from '../../route/Token'

@Component({})
export default class Login extends Vue {
  public valid = null

  public form = new LoginForm()
  public joinForm = new joinForm()

  public login () {
    LoginApi.loginByUsername(this.form).then(data => {
      setToken(data.access_token)
      this.$router.push('/')
    })
  }

  public join () {
    LoginApi.join(this.joinForm).then(data=>{
      this.$router.push('/')
    })
  }
}
</script>

<style scoped>

</style>
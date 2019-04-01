<template>
  <v-container>
    <v-form v-model="valid">
      <h1 style="margin-top: 50px;">Divide2</h1>
      <v-text-field
          v-model="form.username"
          label="用户名/手机号"
          required
      ></v-text-field>
      <v-text-field
          type="password"
          v-model="form.password"
          label="密码"
          required
      ></v-text-field>
      <v-btn @click="login()" block round color="primary">登录</v-btn>
    </v-form>
    <v-layout justify-space-between>
      <v-btn flat color="primary" small>忘记密码?</v-btn>
      <v-btn flat color="primary" small @click="$router.push({name: 'register'})">新用户注册</v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
// todo 修改样式
import { Component, Vue } from 'vue-property-decorator'
import { joinForm, LoginForm } from '../types'
import { Action } from 'vuex-class'

@Component({})
export default class Login extends Vue {
  public valid = null
  public lastPathName = ''

  public form = new LoginForm()
  public joinForm = new joinForm()

  @Action('loginByUsername') loginByUsername

  login() {
    if (this.form.username && this.form.password) {
      this.loginByUsername(this.form).then(data => {
        this.$router.push({ name: 'chat' })
        /*    if (this.lastPathName) {
              this.$router.push({name: this.lastPathName})
            } else {
            }*/
      })
    }
  }

  /*  beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.lastPathName = from.name
      })
    }*/
}
</script>

<style scoped>

</style>
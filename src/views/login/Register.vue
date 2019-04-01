<template>
  <v-container>
    <v-content>
      <h1>Divide2</h1>
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
        <v-btn @click="join()" block color="primary">注册</v-btn>
      </v-form>
    </v-content>
  </v-container>
</template>

<script lang="ts">
// todo 修改样式
import { Component, Vue } from 'vue-property-decorator'
import { joinForm } from '../types'
import LoginApi from '@/api/LoginApi'

@Component({})
export default class Register extends Vue {
  public valid = null

  public joinForm = new joinForm()

  public join() {
    LoginApi.join(this.joinForm).then(data => {
      this.$router.push('/')
    })
  }
}
</script>

<style scoped>

</style>
<template>
  <page :hasBack="true">

    <v-card>
      <v-form v-model="valid">
        <v-container>
          <v-layout>
            <v-flex
                xs12
                md4
            >
              <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
              ></v-text-field>
            </v-flex>

            <v-flex
                xs12
                md4
            >
              <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
              ></v-text-field>
            </v-flex>

            <v-flex
                xs12
                md4
            >
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </page>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StockApi from '../../api/StockApi'

@Component({ components: {} })
export default class Users extends Vue {
  stocks = []

  public created() {
    StockApi.list().then(data => {
      this.stocks = data.content
    })
  }

}
</script>
<template>

    <v-form v-model="valid">
        <v-autocomplete
                v-model="model"
                :items="items"
                label="好友"
        >
        </v-autocomplete>
    </v-form>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class Work extends Vue {

  public valid = false
  public nameRules = []
  public firstname = ''
  public items = ['Foo', 'Bar', 'Fizz', 'Buzz'];


}
</script>
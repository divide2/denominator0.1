<template>
  <div class="form-group">
    <v-subheader>
      <slot name="title" class="title">{{title}}</slot>
    </v-subheader>
    <v-container class="pt-0">
      <slot></slot>
    </v-container>
  </div>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
export default class FormGroup extends Vue {
  @Prop()
  title: string
}
</script>
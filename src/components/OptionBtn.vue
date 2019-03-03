<template>
  <v-btn fab color="primary" class="v-btn--fixed option-btn">
    <v-icon>{{icon}}</v-icon>
  </v-btn>
</template>

<style scoped lang='stylus'>
  .option-btn {
    bottom: 30px
    right: 30px
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
export default class OptionBtn extends Vue {
  @Prop({ default: 'primary' })
  color: string

  @Prop()
  icon: string
}
</script>
<template>
  <v-dialog
      persistent
      v-model="visible"
      max-width="290"
  >
    <v-card>
      <v-card-title>确认</v-card-title>

      <v-card-text>
        {{this.message}}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            flat="flat"
            @click="cancel"
        >
          取消
        </v-btn>

        <v-btn
            color="green darken-1"
            flat="flat"
            @click="confirm"
        >
          确认
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang='stylus'>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
export default class Alert extends Vue {
  @Prop({ default: '' })
  message;

  visible = false;
  promise = null;
  resolve = null;
  reject = null;

  show() {
    this.visible = true;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    // 返回promise对象
    return this.promise;
  }

  confirm() {
    this.visible = false;
    this.resolve('confirm')
  }

  cancel() {
    this.visible = false;
    this.reject('cancel');
  }
}
</script>

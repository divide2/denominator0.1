<template>
  <page :hasBack="true" :hasHeader="true">
    <div class="input-line">
      <input type="text" class="input-chat">
      <v-btn color="info" :depressed="true" class="btn-send">发送</v-btn>
    </div>
  </page>
</template>

<style scoped lang="stylus">
  .input-line {
    border-top:1px solid #e1e4e8
    width:100%;
    position:fixed;
    bottom:0;
    padding: 5px 10px !important
    display:flex;
    justify-content space-between
    align-items center
    .input-chat {
      border: 1px solid #e1e4e8
      border-radius: 4px
      padding: 10px
      flex: 1
    }
    .btn-send{
      margin-top: 0
      margin-bottom: 0
      margin-right: 0
    }
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({ components: {} })
export default class ChatRoom extends Vue {

}
</script>
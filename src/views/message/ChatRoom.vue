<template>
  <page :hasBack="true" :hasHeader="true" class="chat-room">
    <v-container grid-list-xs>
      <div class="content">
        <div class="chat-card" v-for="(item,index) in messageRecord">
          <div v-if="item.obj==='bvvy'" class="other-record">
            <div class="avatar">
              <v-avatar
                      :size="'40'"
                      color="grey lighten-4"
              >
                <img :src="item.avatar" alt="avatar">
              </v-avatar>
            </div>
            <div class="content">
              {{item.message}}
            </div>
            <div class="status">
              <v-icon :color="'red'">info</v-icon>
            </div>
          </div>
          <div class="my-record" v-else>
            <div class="status">
              <v-icon :color="'red'">info</v-icon>
            </div>
            <div class="content">
              {{item.message}}
            </div>
            <div class="avatar">
              <v-avatar
                      :size="'40'"
                      color="grey lighten-4"
              >
                <img :src="item.avatar" alt="avatar">
              </v-avatar>
            </div>
          </div>
        </div>

      </div>
    </v-container>


    <div class="input-line">
      <input type="text" class="input-chat" v-model="text">
      <v-btn color="info" :depressed="true" class="btn-send" @click="send">发送</v-btn>
    </div>
  </page>
</template>

<style scoped lang="stylus">
  .chat-room {
    background-color: #e1e4e8;
    .content {
      .chat-card {
        margin-bottom: 20px
        .other-record {
          display: flex
          justify-content flex-start
        }
        .my-record {
          display: flex
          justify-content: flex-end
        }
      }
      .content {
        margin-left: 10px
        margin-right: 10px
        padding: 20px
        background-color: #fff;
        -webkit-border-radius: 4px
        -moz-border-radius: 4px
        border-radius: 4px
      }
    }
    .input-line {
      border-top: 1px solid #e1e4e8
      width: 100%;
      position: fixed;
      bottom: 0;
      padding: 5px 10px !important
      display: flex;
      justify-content space-between
      align-items center
      .input-chat {
        border: 1px solid #e1e4e8
        border-radius: 4px
        padding: 10px
        flex: 1
      }
      .btn-send {
        margin-top: 0
        margin-bottom: 0
        margin-right: 0
      }
    }
  }

</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({ components: {} })
export default class ChatRoom extends Vue {
  public messageRecord = [{
    obj: 'bvvy',
    avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
    message: ' I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
  }, {
    obj: 'me',
    avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
    message: 'Do you want to hang out?'
  }]

  public text = ''

  public send () {
    this.messageRecord.push({
      obj: 'me',
      avatar: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
      message: this.text
    })
    this.text = ''

  }
}
</script>
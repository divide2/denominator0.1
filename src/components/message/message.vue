<template>
  <div class="message">
    <v-alert
            :value="visible"
            :color="cur_type.color"
            :icon="cur_type.icon"
            transition="scale-transition"
            outline

    >
      {{message}}
    </v-alert>
  </div>
</template>

<style scoped lang='stylus'>
  .message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({ components: {} })
export default class Message extends Vue {
  type_arr = [{
    name: 'success',
    icon: 'check_circle',
    color: 'success'
  }, {
    name: 'info',
    icon: 'info',
    color: 'info'
  }, {
    name: 'warning',
    icon: 'priority_high',
    color: 'warning'
  }, {
    name: 'error',
    icon: 'warning',
    color: 'error'
  }]
  visible = true // 是否可见
  message = '' // 信息
  duration = 3000 // 弹出时长
  timer = null // 计时器
  closed = false
  type = 'success'

  @Watch('closed')
  updateClosed (newVal) {
    if (newVal) {
      this.visible = false
    }
  }

  get cur_type () {
    return this.type_arr.find(item => item.name === this.type)
  }

  startTimer () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    }
  }

  close () {
    this.closed = true
    this.clearTimer()
  }

  clearTimer () {
    clearTimeout(this.timer)
  }

  mounted () {
    this.startTimer()
  }
}
</script>
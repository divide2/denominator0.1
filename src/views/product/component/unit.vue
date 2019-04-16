<template>
  <div class="unit">
    <div v-for="(item,index) in units" :key="index">
      <v-text-field label="基本单位" placeholder="请输入基本单位名称" v-model="item.name" v-if="index===0"></v-text-field>
      <div class="unit-rate" v-else>
        <div class="wrap">
          <span>1</span>
          <v-text-field
                  label="请输入新单位"
                  single-line
                  class="mt-0 pt-0"
                  single-line
                  ouline
                  v-model="item.name"></v-text-field>
          <span>=</span>
          <v-text-field
                  label="请输入进制"
                  single-line
                  class="mt-0 pt-0"
                  single-line
                  ouline
                  v-model="item.rate"></v-text-field>
          <span>{{units[index - 1].name}}</span>
        </div>
        <div class="delete pl-2">
          <v-icon size="20" @click="del(index)">delete</v-icon>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang='stylus'>
  .unit {
    .unit-rate {
      display flex
      align-items baseline
      .wrap {
        display flex
        align-items baseline
      }
    }
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Unit } from '../../types/index';

@Component({ components: {} })
export default class File extends Vue {
  @Prop()
  units

  add () {
    if (this.units[this.units.length - 1].name) {
      this.units.push(new Unit())
    } else {
      alert('请完善上一个单位的信息')
    }
  }

  getUnit () { // 去掉无效的unit
    return this.units.map(item => item.name && item.rate)
  }

  del (index) {
    this.units.splice(index, 1)
  }
}
</script>
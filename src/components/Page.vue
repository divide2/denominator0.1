<template>
  <div class="page">
    <v-toolbar light fixed app>
      <!--头部左边-->
      <slot name="headerLeft"></slot>
      <v-btn icon color="primary" flat v-if="hasBack" @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <!--头部中间-->
      <slot name="headerMiddle"></slot>

      <v-spacer></v-spacer>

      <!--头部右边-->
      <slot name="headerRight"></slot>

    </v-toolbar>
    <v-content class="content">
      <slot>
      </slot>
    </v-content>
    <slot name="footer">
    </slot>
  </div>
</template>

<style scoped lang="stylus">
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>

<script lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    PageHeader
  }
})
export default class Page extends Vue {

  @Prop()
  title: string;

  @Prop({ default: false })
  hasBack: boolean

}
</script>
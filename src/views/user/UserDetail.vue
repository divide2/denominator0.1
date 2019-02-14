<template>
  <page>

  </page>
</template>

<style scoped>
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserApi from '../../api/UserApi';


@Component({ components: {} })
export default class UserDetail extends Vue {
  friends=[]
  created () {
    UserApi.getDetail(this.$route.params.id).then(data => {
      console.log(data)
    })
  }
}
</script>
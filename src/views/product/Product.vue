<template>
    <v-list two-line>
        <template v-for="(item, index) in products">
            <v-list-tile
                    :key="item.title"
                    avatar
                    @click=""
            >
                <v-list-tile-avatar>
                    <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
        </template>
    </v-list>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import MineCompanyApi from '../../api/MineCompanyApi'

@Component({})
export default class Work extends Vue {

  public products = []

  public async created() {
    this.products = await MineCompanyApi.listProducts({})
    console.log(this.products)
  }

}
</script>
<template>
    <div>
        <!--<v-carousel>-->
        <!--<v-carousel-item-->
        <!--v-for="(item,i) in images"-->
        <!--:key="i"-->
        <!--:src="item.path"-->
        <!--&gt;</v-carousel-item>-->
        <!--</v-carousel>-->
        <v-layout align-center justify-space-around>
            <v-flex>
                <v-flex xs12>
                        <v-layout align-center justify-space-around>
                            <v-icon x-large>home</v-icon>
                            <v-icon x-large>event</v-icon>
                            <v-icon x-large>info</v-icon>
                            <v-icon x-large>info</v-icon>
                            <v-icon x-large>info</v-icon>
                        </v-layout>
                </v-flex>

            </v-flex>
        </v-layout>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({})
export default class Work extends Vue {

  public images = [
    {path: 'http://pic26.nipic.com/20121227/10193203_131357536000_2.jpg'},
    {path: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg'}
  ]
}
</script>
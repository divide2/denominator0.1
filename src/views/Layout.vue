<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container grid-list-md text-xs-center>
                <v-layout>
                    <transition>
                        <keep-alive>
                            <router-view>
                            </router-view>
                        </keep-alive>
                    </transition>
                </v-layout>
            </v-container>
        </v-content>
        <bottom-bar></bottom-bar>
    </v-app>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomBar from '@/components/BottomBar.vue'

@Component({
    components: {
        BottomBar
    },
})
export default class Home extends Vue {
    public drawer = null
}
</script>

<style scoped>

</style>
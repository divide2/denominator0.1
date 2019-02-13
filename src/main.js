import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './route';
import store from './store';
import '@/components/index';
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

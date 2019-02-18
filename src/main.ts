import Vue from 'vue';
import './plugins/vuetify'

import App from './App.vue';
import router from './route';
import store from './store/index';
import '@/components/index'
// import GlobalAlert from '@/components/alert/Alert'

Vue.config.productionTip = false;
// 全局插件需要在new Vue()之前完成
// Vue.use(GlobalAlert)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


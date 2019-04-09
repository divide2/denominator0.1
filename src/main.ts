import Vue from 'vue';
import './plugins/vuetify'

import App from './App.vue';
import router from './route';
import store from './store/index';
import '@/components/index'
import '@/util/classComponentHooks'
import MessageBox from '@/components/alert/Alert'
import VeeValidate, { Validator } from "vee-validate"
// import zh from 'vee-validate/dist/locale/zh_CN'

const config = {
  locale: 'zh_CN'
}
const dictionary = {
  zh_CN: {
    messages:{
      required: '不能为空'
    }
  }
}

Validator.localize('zh', dictionary.zh_CN)

Vue.config.productionTip = false;
// 全局插件需要在new Vue()之前完成
Vue.use(MessageBox)
Vue.use(VeeValidate, config)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


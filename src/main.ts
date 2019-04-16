import Vue from 'vue';
import './plugins/vuetify'

import App from './App.vue';
import router from './route';
import store from './store/index';
import '@/components/index'
import '@/util/classComponentHooks'
import MessageBox from '@/components/alert/Alert'
import VueI18n from 'vue-i18n'
import messages from '@/i18n/index'
import VeeValidate, { Validator } from "vee-validate"
// import zh from 'vee-validate/dist/locale/zh_CN'
import validationMessages from 'vee-validate/dist/locale/zh_CN'
// ui组件
import FormGroup from '@/components/form/FormGroup'
// import UploadImage from '@/components/form/UploadImage'

Vue.use(MessageBox)
Vue.use(VueI18n)

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
})

// 配置验证信息的语言
Vue.use(VeeValidate, {
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
    'zh': validationMessages
  }
});



// ui组件
Vue.component('FormGroup', FormGroup)
// Vue.component('UploadImage', UploadImage)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');


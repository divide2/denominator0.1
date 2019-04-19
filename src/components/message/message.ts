import Message from './message.vue'

export default {
  install (Vue: any, options: any) {
    const Component = Vue.extend(Message)
    Vue.prototype.$message = function (props) {
      let instance = new Component({ data: props })
      instance.vm = instance.$mount();
      document.body.appendChild(instance.vm.$el);
    }
  }
}


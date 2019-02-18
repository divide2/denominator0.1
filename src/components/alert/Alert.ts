// import Alert from './Alert.vue'
//
// export default {
//   install: (Vue, options) => {
//     // 生成一个vue的子类
//     let Component = Vue.extend(Alert)
//
//     // 生成一个该子类的实例
//     const instance = new Component()
//
//     // 挂载
//     instance.$mount(document.createElement('div'))
//     document.body.appendChild(instance.$el)
//
//     // 通过vue的原型注册一个方法让所有实例共享这个方法
//     Vue.prototype.$globalAlert = (msg) => {
//       debugger
//       instance.message=msg
//       instance.value=true
//       instance.$mount()
//     }
//   }
// }
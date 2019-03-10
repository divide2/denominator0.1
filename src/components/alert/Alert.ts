import Alert from './MessageBox.vue';

export default {
    install(Vue: any, options: any) {

        // 生成一个vue的子类
        let MessageBox = Vue.extend(Alert);

        // 通过vue的原型注册一个方法让所有实例共享这个方法
        Vue.prototype.$confirm = function confirm(message: String) {
            // 生成一个该子类的实例
            let messageBox = new MessageBox()
            // 挂载
            messageBox.$mount(document.createElement('div'))
            document.body.appendChild(messageBox.$el)
            messageBox.message = message;

            return  messageBox.show()
                .then(val => {
                    messageBox = null;
                    return Promise.resolve(val);
                })
                .catch(err => {
                    messageBox = null;
                    return Promise.reject(err);
                });
        }
    }
};

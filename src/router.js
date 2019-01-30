import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout.vue';
import FormLayout from './views/FormLayout.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '/work',
                    name: 'work',
                    component: () => import('./views/work/Work.vue'),
                }
            ]
        },

    ]
});

import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/route/routes'
import {getToken} from '@/route/Token'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || !getToken()) {
    next('/login')
  } else {
    next()
  }

})

export default router

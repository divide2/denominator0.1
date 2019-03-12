import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/route/routes'
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  console.log(store.getters.token, to.path)
  if (store.getters.token && to.path !== '/login') {
    if (store.getters.userInfo) {
      next()
    } else {
      store.dispatch('getUserInfo').then(() => {
        next()
      }).catch(() => {
        store.commit('removeToken')
        store.commit('removeCurrTeam')
        next({ name: 'login' });
      })
    }
  } else if (store.getters.token && to.path === '/login') {
    next({ name: 'chat' })
  } else if (!store.getters.token && to.path === '/login') {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router

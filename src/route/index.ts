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

const NO_LOGING = [
  '/login', '/register', '/404'
]

const isAllowed = (path: string) => {
  return NO_LOGING.includes(path)
}

router.beforeEach((to, from, next) => {
  if (store.getters.token && !isAllowed(to.path)) {
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
  } else if (store.getters.token && isAllowed(to.path)) {
    next({ name: 'work' })
  } else if (!store.getters.token && isAllowed(to.path)) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router

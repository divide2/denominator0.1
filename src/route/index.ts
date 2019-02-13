import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/route/routes'
import { clearToken, getToken } from '@/route/Token'
import MineCompanyApi from '@/api/MineCompanyApi'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  if (getToken() || to.path === '/login') {
    MineCompanyApi.listGroups().then(data => {
      next()
    }).catch(() => {
      clearToken()
      next('/login')
    })
  } else {
    next('/login')
  }
})

export default router

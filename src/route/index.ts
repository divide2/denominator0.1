import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/route/routes'
import user from '@/route/user'
import { getToken } from '@/route/Token'
import friend from "@/route/friend";
import group from "@/route/group";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes.concat(user,friend, group),
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  if (getToken() || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router

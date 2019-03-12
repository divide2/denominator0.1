import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/route/routes'
import user from '@/route/user'
import friend from '@/route/friend';
import team from '@/route/team';
import product from '@/route/product';
import warehouse from '@/route/warehouse';
import order from '@/route/order';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes.concat(user, friend, team, product, warehouse, order),
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  if (store.getters.token || to.path === '/login') {
    store.dispatch('listUserTeams')
      .then(() => {

        console.log('0000000000');
      }).catch(() => {
      store.commit('removeCurrTeam');
      store.commit('removeToken');
      next('/');
    });
    next()
  } else {
    next('/login')
  }
})

export default router

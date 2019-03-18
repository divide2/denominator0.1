import Work from '@/views/work/index.vue'
import product from '@/route/work/product'
import warehouse from '@/route/work/warehouse'
import team from '@/route/work/team'
import order from '@/route/work/order'
import store from '@/store';
import TeamApi from '@/api/TeamApi'

export default {
  path: '/work',
  component: Work,
  children: [
    {
      path: '',
      name: 'work',
      meta: {
        bar: true,
        active: 'work'
      },
      component: () => import('@/views/work/Work.vue')
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: () => import('@/views/workbench/Workbench.vue')
    },
    {
      path: '/workbench/:menuGroupId/menus',
      name: 'workbenchMenu',
      component: () => import('@/views/workbench/WorkbenchMenu.vue')
    },
    { path: '/stock',
      name: 'stock',
      component: () => import('@/views/stock/Stock.vue')
    },
    ...product,
    ...warehouse,
    ...team,
    ...order
  ],
  beforeEnter: (to, from, next) => {
    /*TeamApi.listAuthorities().then(data => {
      console.log(data)
    })*/
    if (!store.getters.teams) {
      store.dispatch('getUserTeams').then((teams) => {
        if (teams.length) {
          next()
        } else {
          next({ name: 'withoutTeam' })
        }
      })
    } else {
      if (store.getters.teams.length) {
        next()
      } else {
        next({ name: 'withoutTeam' })
      }
    }
  }
}

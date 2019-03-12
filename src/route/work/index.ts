import Work from '@/views/work/index.vue'
import product from '@/route/work/product'
import warehouse from '@/route/work/warehouse'
import team from '@/route/team'
import order from '@/route/work/order'
import store from '@/store';

export default {
  path: '/work',
  component: Work,
  children: [
    {
      path: '',
      name: 'work',
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
    {
      path: '/nothing',
      name: 'nothing',
      component: {
        template: '<div>nihao zheli huiyou一个按钮</div>'
      }
    },
    ...product,
    ...warehouse,
    ...team,
    ...order
  ],
  beforeEnter: (to, from, next) => {
    if (!store.getters.teams) {
      store.dispatch('getUserTeams').then((teams) => {
        if (teams.length) {
          next()
        } else {
          next({ name: 'nothing' })
        }
      })
    } else {
      if (store.getters.teams.length) {
        next()
      } else {
        next({ name: 'nothing' })
      }
    }
  }
}

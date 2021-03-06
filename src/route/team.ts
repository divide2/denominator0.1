export default [
  {
    path: '/team/add',
    name: 'addTeam',
    component: () => import('@/views/team/add.vue'),
  },
  {
    path: '/team/:id',
    name: 'teamDetail',
    component: () => import('@/views/team/detail.vue'),
  },
  {
    path: '/team/:id/users',
    name: 'teamUsers',
    component: () => import('@/views/team/users.vue'),
  },
  {
    path: '/team/:id/apply',
    name: 'applyTeam',
    component: () => import('@/views/team/apply.vue'),
  },
  {
    path: '/team/search',
    name: 'searchTeam',
    component: () => import('@/views/team/Search.vue'),
  }
]

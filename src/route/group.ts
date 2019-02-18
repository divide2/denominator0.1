export default [
  {
    path: '/group/add',
    name: 'addGroup',
    component: () => import('../views/group/add.vue'),
  },
  {
    path: '/group/:id',
    name: 'groupDetail',
    component: () => import('../views/group/detail.vue'),
  },
  {
    path: '/group/:id/users',
    name: 'groupUsers',
    component: () => import('../views/group/users.vue'),
  }
]
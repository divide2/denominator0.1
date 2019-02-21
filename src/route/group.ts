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
  },
  {
    path: '/group/:id/apply',
    name: 'applyGroup',
    component: () => import('../views/group/apply.vue'),
  },
  {
    path: '/group/search',
    name: 'searchGroup',
    component: () => import('../views/group/Search.vue'),
  },
  {
    path: '/group/:id/applications',
    name: 'groupApplications',
    component: () => import('../views/group/Applications.vue'),
  },
  {
    path: '/group/:id/confirm',
    name: 'groupConfirm',
    component: () => import('../views/group/Confirm.vue'),
  },
  // 团队合作
  {
    path: '/group/cooperation/search',
    name: 'cooperationSearch',
    component: () => import('../views/group/cooperation/Search.vue'),
  },
  {
    path: '/group/:id/cooperation/apply',
    name: 'cooperationApply',
    component: () => import('../views/group/cooperation/Apply.vue'),
  },
  {
    path: '/group/:id/cooperation/confirm',
    name: 'cooperationConfirm',
    component: () => import('../views/group/cooperation/Confirm.vue'),
  },
]
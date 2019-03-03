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
  },
  {
    path: '/team/:id/applications',
    name: 'teamApplications',
    component: () => import('@/views/team/Applications.vue'),
  },
  {
    path: '/team/:id/confirm',
    name: 'teamConfirm',
    component: () => import('@/views/team/Confirm.vue'),
  },
  // 团队合作
  {
    path: '/team/cooperation/search',
    name: 'cooperationSearch',
    component: () => import('@/views/team/cooperation/Search.vue'),
  },
  {
    path: '/team/:id/cooperation/apply',
    name: 'cooperationApply',
    component: () => import('@/views/team/cooperation/Apply.vue'),
  },
  {
    path: '/team/:id/cooperation/confirm',
    name: 'cooperationConfirm',
    component: () => import('@/views/team/cooperation/Confirm.vue'),
  },
  {
    path: '/team/:id/cooperation/list',
    name: 'cooperationList',
    component: () => import('@/views/team/cooperation/List.vue'),
  },
]
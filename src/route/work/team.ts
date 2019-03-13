export default [
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
  {
    path: '/team/member/manage',
    name: 'memberManage',
    component: () => import('@/views/team/MemberManage.vue')
  },
  {
    path: '/team/member/:type/:id/menu',
    name: 'memberAuth',
    component: () => import('@/views/team/MemberAuth.vue')
  }
]

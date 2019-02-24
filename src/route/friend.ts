export default [
  {
    path: '/friend/apply/:id',
    name: 'applyFriend',
    component: () => import('@/views/friend/Apply.vue'),
  },
  {
    path: '/friend/confirm/:id',
    name: 'confirmFriend',
    component: () => import('@/views/friend/confirm.vue'),
  }
]
export default [
  {
    path: '/order',
    name: 'orderList',
    component: () => import('@/views/order/List.vue'),
  },
  {
    path: '/orderAdd',
    name: 'orderAdd',
    component: () => import('@/views/order/Add.vue'),
  }
]
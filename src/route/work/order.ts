export default [
  {
    path: '/order',
    name: 'order',
    component: () => import('../../views/order/List.vue'),
  },
  {
    path: '/orderAdd',
    name: 'orderAdd',
    component: () => import('../../views/order/Add.vue'),
  }
]

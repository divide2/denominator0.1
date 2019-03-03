export default [
  {
    path: '/warehouse',
    name: 'warehouse',
    component: () => import('@/views/warehouse/List.vue'),
  },
  {
    path: '/warehouse/add',
    name: 'warehouseAdd',
    component: () => import('@/views/warehouse/Add.vue'),
  },
  {
    path: '/warehouse/:id/update',
    name: 'warehouseUpdate',
    component: () => import('@/views/warehouse/Add.vue'),
  }
]
export default [
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/Product.vue'),
  },
  {
    path: '/product/add',
    name: 'addProduct',
    component: () => import('@/views/product/Add.vue'),
  },
  {
    path: '/product/:id',
    name: 'productUpdate',
    component: () => import('@/views/product/Add.vue'),
  }
]
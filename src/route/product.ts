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
    path: '/product/:id/update',
    name: 'productUpdate',
    component: () => import('@/views/product/Add.vue'),
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('@/views/product/Detail.vue'),
  }
]
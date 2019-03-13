export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('../../views/product/Product.vue'),
  },
  {
    path: '/product/add',
    name: 'productAdd',
    component: () => import('../../views/product/Add.vue'),
  },
  {
    path: '/product/:id/update',
    name: 'productUpdate',
    component: () => import('../../views/product/Add.vue'),
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('../../views/product/Detail.vue'),
  }
]

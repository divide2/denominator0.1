export default [
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('@/views/product/Detail.vue'),
  }
]
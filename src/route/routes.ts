import Layout from '../views/Layout.vue';
import FormLayout from '../views/FormLayout.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/work',
        name: 'work',
        component: () => import('../views/work/Work.vue'),
      }
    ]
  },
  {
    path: '/purchase',
    name: 'formRoot',
    component: FormLayout,
    children: [
      {
        path: '',
        name: 'purchase',
        component: () => import('../views/purchase/Purchase.vue'),
      }
    ]
  },
  {
    path: '/product',
    name: 'formRoot',
    component: FormLayout,
    children: [
      {
        path: '',
        name: 'product',
        component: () => import('../views/product/Product.vue'),
      }
    ]
  },
  {
    path: '/about1',
    name: 'about1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

export default routes

import Layout from '../views/Layout.vue';
import FormLayout from '../views/FormLayout.vue';
import Login from '../views/login/Login.vue';
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
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('@/views/message/Message.vue')
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/mine/Mine.vue')
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
            },
            {
                path: 'add',
                name: 'addProduct',
                component: () => import('../views/product/AddProduct.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login ',
        component: Login
    },
    {
        path: '/about1',
        name: 'about1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/chatRoom/:chatRoomId',
        name: 'chatRoom',
        component: () => import('@/views/message/ChatRoom.vue')
    },
    {
        path: '/createTeam',
        name: 'createTeam',
        component: () => import('@/views/work/CreateTeam.vue')
    }
];
export default routes;

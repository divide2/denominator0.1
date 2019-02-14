export default [
    {
        path: '/userDetail/:id',
        name: 'userDetail',
        component: () => import('../views/user/UserDetail.vue'),
    }
];

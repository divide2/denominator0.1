import Layout from '@/views/Layout.vue';
import Login from '@/views/login/Login.vue'
import work from './work';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      work,
      {
        path: '/chat',
        name: 'chat',
        meta: {
          bar: true,
          active: 'chat'
        },
        component: () => import('@/views/message/Message.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        meta: {
          bar: true,
          active: 'contact'
        },
        component: () => import('@/views/contact/Contact.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        meta: {
          bar: true,
          active: 'mine'
        },
        component: () => import('@/views/mine/Mine.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
  },
  {
    path: '/contact/search',
    name: 'searchFriend',
    component: () => import('@/views/contact/Search.vue')
  }, {
    path: '/team/without',
    name: 'withoutTeam',
    meta: {
      bar: true,
      active: 'work'
    },
    component: () => import('@/views/work/WithoutTeam.vue')
  }
];

export default routes

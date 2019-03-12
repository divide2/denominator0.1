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
        component: () => import('@/views/message/Message.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact/Contact.vue')
      },
      {
        path: '/mine',
        name: 'mine',
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
  }
]

export default routes

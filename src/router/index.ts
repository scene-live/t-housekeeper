import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Message from '../views/Message.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    // component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
    meta: { layout: 'full' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;

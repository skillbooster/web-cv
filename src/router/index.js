import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import Home from '../views/Home.vue';

import '../../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/contactsList',
    name: 'contactsList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactsList.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

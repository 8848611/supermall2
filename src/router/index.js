import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: 'Home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  },
  {
    path: '/catgory',
    name: 'catgory',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../views/my/My.vue')
  },
  {
    path: '/detail/:userId',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-04-21 14:29:59
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-04-21 14:34:44
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    }
   
  ]
})

export default router
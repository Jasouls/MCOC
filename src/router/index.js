import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/load/Load.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      path: '/news',
      component: () => import('@/views/news/News.vue'),
      children: [
        {
          path: '/news',
          redirect: '/news/now'
        },
        {
          path: 'now',
          component: () => import('@/views/news/child/Now.vue')
        },
        {
          path: 'doc',
          component: () => import('@/views/news/child/Doc.vue')
        },
        {
          path: 'information',
          component: () => import('@/views/news/child/Information.vue')
        },
        {
          path: 'board',
          component: () => import('@/views/news/child/Board.vue')
        }
      ]
    },
    {
      path: '/hero',
      component: () => import('@/views/hero/Hero.vue'),
      children: [
        {
          path: '/hero',
          redirect: '/hero/all'
        },
        {
          path: 'all',
          component: () => import('@/views/hero/child/All.vue')
        },
        {
          path: 'first',
          component: () => import('@/views/hero/child/First.vue')
        },
        {
          path: 'second',
          component: () => import('@/views/hero/child/Second.vue')
        },
        {
          path: 'third',
          component: () => import('@/views/hero/child/Third.vue')
        },
        {
          path: 'fourth',
          component: () => import('@/views/hero/child/Fourth.vue')
        },
        {
          path: 'fifth',
          component: () => import('@/views/hero/child/Fifth.vue')
        },
        {
          path: 'sixth',
          component: () => import('@/views/hero/child/Sixth.vue')
        }
      ]
    },
    {
      path: '/photo',
      component: () => import('@/views/photo/Photo.vue')
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

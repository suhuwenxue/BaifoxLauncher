import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // label: '账 户',
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      // label: '下 载',
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadsView.vue')
    },
    {
      // label: '工 作 区',
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      // label: '设 置',
      path: '/setting',
      name: 'setting',
      component: () => import('../views/SettingView.vue')
    },
    {
      // label: '关 于',
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router

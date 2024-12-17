import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import HomeView from '@/view/home-view.vue'
import SettingsView from '@/view/settings/settings-view.vue'
import GameView from '@/view/game/game-view.vue'
import AboutView from '@/view/about/about-view.vue'
import AccountView from '@/view/account/account-view.vue'

// 路由配置
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,

    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

// 挂载路由
export default async function setupRouter(baifoxMain: App) {
  baifoxMain.use(router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

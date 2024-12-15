import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main-app/HomeView.vue'
import InitViewSteps1 from '../views/init-app/InitViewSteps1.vue';
import type { App } from 'vue'

const main_router = createRouter({
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
      component: () => import('../views/main-app/AccountView.vue')
    },
    {
      // label: '下 载',
      path: '/download',
      name: 'download',
      redirect: '/minecraft-downloads',
      component: () => import('../views/main-app/DownloadsView.vue'),
      children: [
        {
          path: '/minecraft-downloads',
          name: 'minecraft-downloads',
          component: () => import('../views/main-app/downloads/MinecraftDownloadsView.vue')
        },
        {
          path: '/resource-downloads',
          name: 'resource-downloads',
          component: () => import('../views/main-app/downloads/ResourceDownloadsView.vue')
        },
        {
          path: '/path-downloads',
          name: 'path-downloads',
          component: () => import('../views/main-app/downloads/PathDownloadsView.vue')
        }
      ]
    },
    {
      // label: '工 作 区',
      path: '/project',
      name: 'project',
      component: () => import('../views/main-app/ProjectView.vue')
    },
    {
      // label: '设 置',
      path: '/setting',
      name: 'setting',
      component: () => import('../views/main-app/SettingView.vue')
    },
    {
      // label: '关 于',
      path: '/about',
      name: 'about',
      component: () => import('../views/main-app/AboutView.vue')
    }
  ]
})

const init_router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init-steps1',
      component: InitViewSteps1
    },
    {
      path: '/steps2',
      name: 'init-steps2',
      component: () => import('../views/init-app/InitViewSteps2.vue')
    },
    {
      path: '/steps3',
      name: 'init-steps3',
      component: () => import('../views/init-app/InitViewSteps3.vue')
    },
    {
      path: '/steps4',
      name: 'init-steps4',
      component: () => import('../views/init-app/InitViewSteps4.vue')
    },
    {
      path: '/steps5',
      name: 'init-steps5',
      component: () => import('../views/init-app/InitViewSteps5.vue')
    },
    {
      path: '/steps6',
      name: 'init-steps6',
      component: () => import('../views/init-app/InitViewSteps6.vue')
    },
    {
      path: '/steps7',
      name: 'init-steps7',
      component: () => import('../views/init-app/InitViewSteps7.vue')
    },
    {
      path: '/steps8',
      name: 'init-steps8',
      component: () => import('../views/init-app/InitViewSteps8.vue')
    },
    {
      path: '/steps9',
      name: 'init-steps9',
      component: () => import('../views/init-app/InitViewSteps9.vue')
    },
  ]
})

export async function Main_setupRouter(app: App) {
  app.use(main_router)
  // 创建路由守卫
  // 路由准备就绪后挂载APP实例
  await main_router.isReady()
}

export async function Init_setupRouter(app_init: App) {
  app_init.use(init_router)
  await init_router.isReady()
}

export default {main_router,init_router}

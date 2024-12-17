import type { App } from 'vue'
import { setupForwardConsole } from './plugin'
import setupI18n from '@fox/i18n'
import setupRouter from '@fox/router'

// 导入 图标 js
import '@fox/assets/icon/iconfont_1.js'
import '@fox/assets/icon/iconfont_2.js'
import '@fox/assets/icon/iconfont_3.js'

export default async function baifox(baifoxMain: App) {

  // 初始化插件 网页日志 向 客户端日志转发
  // web console log => tauri-plugin-log log
  setupForwardConsole();

  // 初始化 国际化语言组
  await setupI18n(baifoxMain);

  // 初始化 路由组
  await setupRouter(baifoxMain);

  baifoxMain.mount('#root')
}
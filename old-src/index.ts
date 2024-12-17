import { createApp } from 'vue';
import App from './App.vue';
import Init from './Init.vue'

import './index.css';
import './assets/icons/xiaohu-icon/iconfont.js'
import './assets/icons/baifoxlauncher-class2/iconfont.js'
import './assets/icons/baifoxlauncher-class1/iconfont.js'

import baifox_setting from './settings/baifox_setting.ts';

// 页引导
async function bootStrap() {
  // 创建vue app实例
  const app = createApp(App);
  // 创建vue app实例
  const app_init = createApp(Init);
  // 挂载状态管理
  // await setupStore(app)

  // 应用 启动相关设置
  await baifox_setting(app, app_init);

} bootStrap().then();
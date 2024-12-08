import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';

import './index.css';
import './assets/icons/xiaohu-icon/iconfont.js'
import './assets/icons/baifoxlauncher-class2/iconfont.js'
import './assets/icons/baifoxlauncher-class1/iconfont.js'

async function bootStrap() {
  // 创建vue
  const app = createApp(App)

  // 挂载状态管理
  // await setupStore(app)

  // 挂载路由
  await setupRouter(app)

  app.mount('#root')
}

bootStrap().then();
import { Init_setupRouter, Main_setupRouter } from '../router';
import type { App } from 'vue';
import { setupForwardConsole } from './api'
import baifoxConfig from './config';
import { i18n } from './language/language.ts'


export default async function baifox_setting(app: App, app_init: App) {

  // 转发控制台输出
  setupForwardConsole();

  await baifoxConfig('init', 'temp', false )

  // 读取临时配置文件 中的 Initialize_or_not 字段
  // 判定Initialize_or_not 字段已确认是否为第一次启动
  if (await baifoxConfig('read','temp', 'app.Initialize_or_not')) {
    // 非第一次启动 则开始挂载主页面
    console.info('非第一次启动, 开始挂载主页面')
    console.info('路由初始化')
    app.use(i18n)
    await Main_setupRouter(app)
    app.mount('#root');
  } else {
    // 第一次启动 则开始挂载初始化页面
    console.info('第一次启动, 开始挂载初始化页面')
    console.info('路由初始化')
    app_init.use(i18n)
    await Init_setupRouter(app_init)
    app_init.mount('#root-init');
  }
}

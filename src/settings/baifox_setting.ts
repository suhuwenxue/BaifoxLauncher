import { Init_setupRouter, Main_setupRouter } from '../router';
import type { App } from 'vue';
import { setupForwardConsole } from './api'
import {
  Temporary_configuration_directory, Determines_the_first_start
} from './config';

export default async function baifox_setting(app: App, app_init: App) {

  // 转发控制台输出
  setupForwardConsole();

  // 初始化 临时文件夹 和 临时配置文件
  console.info('临时配置目录初始化')
  await Temporary_configuration_directory();

  console.debug("读取临时配置文件 中的 Initialize_or_not 字段");
  console.debug("判定Initialize_or_not 字段已确认是否为第一次启动");
  // 读取临时配置文件 中的 Initialize_or_not 字段
  // 判定Initialize_or_not 字段已确认是否为第一次启动
  if (await Determines_the_first_start()) {
    // 非第一次启动 则开始挂载主页面
    console.info('非第一次启动, 开始挂载主页面')
    console.info('路由初始化')
    await Main_setupRouter(app)
    console.info('挂载主页面')
    app.mount('#root');
  } else {
    // 第一次启动 则开始挂载初始化页面
    console.info('第一次启动, 开始挂载初始化页面')
    console.info('路由初始化')
    await Init_setupRouter(app_init)
    console.info('挂载初始化页面')
    app_init.mount('#root-init');
  }
}

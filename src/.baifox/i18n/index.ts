import zhCN from './lang/zh-CN'
import zhTW from './lang/zh-TW'
import enUS from './lang/en-US'
import jaJP from './lang/ja-JP'
import { createI18n } from 'vue-i18n'
import type { App } from 'vue'


export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh-CN',
  messages: {
    "en-US": enUS,
    "zh-CN": zhCN,
    "zh-TW": zhTW,
    "ja-JP": jaJP,
  },
})

export default async function setupI18n(baifoxMain: App) {
  baifoxMain.use(i18n)
}
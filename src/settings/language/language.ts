import en_us from './en_us';
import zh_cn from './zh_cn';
import zh_tw from './zh_tw';
import ja_jp from './ja_jp';

import { createI18n } from 'vue-i18n'
import baifoxConfig from '../config';


export const i18n = createI18n({
  // fallbackLocale: 'en-US',
  legacy: false,
  globalInjection: true,
  locale: await baifoxConfig('read', 'temp', 'user.setting_language') || await baifoxConfig('read', 'temp', 'system.locale_language') || 'zh-CN',
  messages: {
    "en-US": en_us,
    "zh-CN": zh_cn,
    "zh-TW": zh_tw,
    "ja-JP": ja_jp,
  },
})
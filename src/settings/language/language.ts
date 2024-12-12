import en_usLang from './en_us';
import zh_cnLang from './zh_cn';
import zh_twLang from './zh_tw';
import ja_jpLang from './ja_jp';

// 定义语言映射
const languageMap: Record<string, string> = {
  'zh-CN': 'zh_cn',
  'zh-TW': 'zh_tw',
  'ja-JP': 'ja_jp',
  'en-US': 'en_us',
};
const languagePath = {
  zh_cn: zh_cnLang,
  en_us: en_usLang,
  zh_tw: zh_twLang,
  ja_jp: ja_jpLang,
};

export {zh_cnLang, en_usLang, zh_twLang, ja_jpLang};

// 根据 key 获取对应语言的文本
export function getLangText(key: string): string {
  const locale_language: string = 'zh-CN';
  const language = languageMap[locale_language] || 'en_us'
  const languageKey = languagePath[language];

  // 分割 key 为多个部分
  const keyParts = key.split('.');
  // 初始化 value 为 languageFile
  let value = languageKey;
  // 遍历 keyParts，逐步获取深层的 value
  for (const part of keyParts) {
    // 如果 value 是一个对象，并且 part 是它的一个属性
    if (typeof value === 'object' && part in value) {
      // 获取 part 对应的属性值
      value = value[part];
    } else {
      // 如果 value 不是一个对象，或者 part 不是它的属性，返回 en_us 对应的值
      value = languagePath['en_us'][part];
    }
  }
  // 返回最终的 value
  return value as string;
}

// export function getLangText(key: string): string {
//
//   const language = LocaleLanguage();
//   console.log(language);
//   const languageKey = languagePath[language];
//
//   // 分割 key 为多个部分
//   const keyParts = key.split('.');
//   // 初始化 value 为 languageFile
//   let value = languageKey;
//   // 遍历 keyParts，逐步获取深层的 value
//   for (const part of keyParts) {
//     // 如果 value 是一个对象，并且 part 是它的一个属性
//     if (typeof value === 'object' && part in value) {
//       // 获取 part 对应的属性值
//       value = value[part];
//     } else {
//       // 如果 value 不是一个对象，或者 part 不是它的属性，返回 en_us 对应的值
//       value = languagePath['en_us'][part]
//       // return getLangTextEnUs(key);
//     }
//   }
//   // 返回最终的 value
//   return value as string;
// }

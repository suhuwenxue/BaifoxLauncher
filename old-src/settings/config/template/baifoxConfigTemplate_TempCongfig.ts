import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { time_tools } from '../../api';
import { arch, exeExtension, locale, platform, type, version } from '@tauri-apps/plugin-os';


export default async function baifoxConfigTemplate_TempConfig(
  setting_language: string = '',
  setting_theme: string = '',
  config_dir: string = '',
  Initialize_or_not: boolean = false,
) {
  // 获取应用程序版本 由tauri-apps提供的api 获取
  const appVersion = await getVersion();
  // 获取构建应用的tauri版本 由tauri-apps提供的api 获取
  const tauriVersion = await getTauriVersion();
  // 获取当前 时间戳
  const onTimestamp = time_tools('timestamp');

  // tauri 插件 os 提供的系统语言 [locale]
  const locale_language = await locale();
  // tauri 插件 os 提供的系统架构 [arch]
  const archName = arch();
  // tauri 插件 os 提供的系统可执行文件后缀 [exe | '']
  const exeExt = exeExtension();
  // tauri 插件 os 提供的描述正在使用的特定操作系统的字符串。 该值在编译时设置。
  // ['linux' | 'macos' | 'ios' | 'freebsd' | 'dragonfly' |
  // |'netbsd' | 'openbsd' | 'solaris' | 'android' | 'windows']
  const platformName = platform();
  // tauri 插件 os 提供的当前操作系统类型
  // ['linux''macos''windows''ios''android']
  const osType = type();
  // tauri 插件 os 提供的当前操作系统版本
  const osVersion = version();

  return {
    app: {
      app_version: appVersion,
      tauri_version: tauriVersion,
      Initialize_or_not: Initialize_or_not,
      timestamp: onTimestamp,
    },
    system: {
      locale_language: locale_language,
      archName: archName,
      exeExt: exeExt,
      platformName: platformName,
      osType: osType,
      osVersion: osVersion,
    },
    user: {
      setting_language: setting_language,
      setting_theme: setting_theme,
      config_dir: config_dir,
    },
  };
}
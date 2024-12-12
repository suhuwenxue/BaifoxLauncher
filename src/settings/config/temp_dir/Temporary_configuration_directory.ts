import { create, exists, mkdir, writeTextFile } from '@tauri-apps/plugin-fs';
import { Baifox_Launcher_Default_Dir_Names, Tauri_Api_Dir } from '../../variable';
import { locale } from '@tauri-apps/plugin-os';
import { getTauriVersion, getVersion } from '@tauri-apps/api/app';

// 创建一个临时性的配置目录 并且创建一个临时配置文件
export async function Temporary_configuration_directory() {
  // 检查是否存在临时性 baifox launcher 的根目录
  if (
    !await exists(Baifox_Launcher_Default_Dir_Names.Root_Dir_Name, {
      baseDir: Tauri_Api_Dir.Config,
    })
  ) {
    // 不存在临时性 baifox launcher 的根目录 则在Tauri提供的config目录 创建一个临时的 baifox launcher 的根目录
    await mkdir(Baifox_Launcher_Default_Dir_Names.Root_Dir_Name, {
      baseDir: Tauri_Api_Dir.Config,
    })
  }

  // 检查临时性 baifox launcher 的配置目录中 是否存在临时配置文件
  if (
    !await exists(Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + "/temp_config.json", {
      baseDir: Tauri_Api_Dir.Config,
    })
  ) {
    // 不存在临时配置文件 则在临时性根目录中 创建一个临时的配置文件
    const baifox_temp_config = await create(
      Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + "/temp_config.json", {
        baseDir: Tauri_Api_Dir.Config,
      });

    // tauri 插件 os 提供的系统语言 [locale]
    const locale_language = await locale();
    // 获取应用程序版本 由tauri-apps提供的api 获取
    const appVersion = await getVersion();
    // 获取构建应用的tauri版本 由tauri-apps提供的api 获取
    const tauriVersion = await getTauriVersion();

    // 生成json格式的临时配置文件
    const contents = JSON.stringify({
      main_app_version: appVersion,
      tauri_version: tauriVersion,
      system_locale_language: locale_language,
      user_setting_language: '',
      user_setting_theme: '',
      Initialize_or_not: false,
      config_dir: '',
    });

    // 将临时配置文件写入到临时配置目录中
    // 写入的目录为Tauri提供的config目录下的baifox_launcher目录下的temp_config.json
    // 写入的内容为json格式的临时配置文件
    await writeTextFile(
      Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + "/temp_config.json",
      contents, {
        baseDir: Tauri_Api_Dir.Config,
      });

    // 关闭临时配置文件
    await baifox_temp_config.close();
  }
}
import baifoxConfig_Read from './func_read.ts';
import baifoxConfigTemplate_TempConfig from '../template/baifoxConfigTemplate_TempCongfig.ts';
import { Baifox_Launcher_Default_Dir_Names, Tauri_Api_Dir } from '../../variable';
import { writeTextFile } from '@tauri-apps/plugin-fs';


export default // 读写配置文件 config子函数 写
async function baifoxConfig_Write(
  configFile: configFile,
  configKey: string,
  configValue: string,
) {

  if (configFile === 'temp') {
    const setting_language = await baifoxConfig_Read('temp','user.setting_language')
    const setting_theme = await baifoxConfig_Read('temp', 'user.setting_theme')
    const config_dir = await baifoxConfig_Read('temp', 'user.config_dir')
    const Initialize_or_not = await baifoxConfig_Read('temp', 'app.Initialize_or_not')

    async function temp_config_template() {
      if (configKey === 'setting_language') {
        return await baifoxConfigTemplate_TempConfig(configValue, setting_theme, config_dir, Initialize_or_not);
      } else if (configKey === 'setting_theme') {
        return await baifoxConfigTemplate_TempConfig(setting_language, configValue, config_dir, Initialize_or_not);
      } else if (configKey === 'config_dir') {
        return await baifoxConfigTemplate_TempConfig(setting_language, setting_theme, configValue, Initialize_or_not);
      } else if (configKey === 'Initialize_or_not') {
        return await baifoxConfigTemplate_TempConfig(setting_language, setting_theme, config_dir, configValue);
      }
    }
    // 生成json格式的临时配置文件
    const contents = JSON.stringify(await temp_config_template(), null,2);

    await writeTextFile(
      Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json',
      contents, {
        baseDir: Tauri_Api_Dir.Config
      });
  } else if (configFile === 'main') {
  } else if (configFile === 'microsoft') {
  }
}
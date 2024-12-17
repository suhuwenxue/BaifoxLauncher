




// 读写配置文件 config子函数 读
import { Baifox_Launcher_Default_Dir_Names, Tauri_Api_Dir } from '../../variable';
import { readTextFile } from '@tauri-apps/plugin-fs';

export default async function baifoxConfig_Read(configFile: configFile, configKey: string) {
  // 辅助函数：用于获取嵌套对象中的值
  function getNestedValue(obj: any, key: string): any {
    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
      if (value.hasOwnProperty(k)) {
        value = value[k];
      } else {
        return undefined; // 如果键不存在，则返回 undefined
      }
    }
    return value;
  }

  const temp_config = await readTextFile(
    Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json',
    {
      baseDir: Tauri_Api_Dir.Config,
    },
  );
  let temp_config_json = JSON.parse(temp_config);

  if (configFile === 'temp') {
    if (configKey !== '') {
      return getNestedValue(temp_config_json, configKey);
    } else {
      return temp_config_json;
    }

  } else if (configFile === 'main') {
  } else if (configFile === 'microsoft') {
  }
}
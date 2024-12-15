import baifoxConfig_Read from './func/func_read.ts'
import baifoxConfig_Write from './func/func_write.ts';
import baifoxConfig_Init from './func/func_init.ts';



type configFile = 'temp' | 'main' | 'microsoft';
type configFunc = 'write' | 'read' | 'init';
type configKey = string  | boolean;
// 读写配置文件 config主函数
export default async function baifoxConfig(
  configFunc: configFunc,
  configFile: configFile,
  configKey: configKey = '' ,
  configValue: string = '',
) {
  if (configFunc === 'read') {
    return await baifoxConfig_Read(configFile, configKey);
  } else if (configFunc === 'write') {
    await baifoxConfig_Write(configFile, configKey, configValue);
    return '';
  } else if (configFunc === 'init') {
    await baifoxConfig_Init(configFile, Boolean(configKey));
  }
}
import { BaseDirectory, exists, mkdir, writeTextFile } from '@tauri-apps/plugin-fs';
import { Baifox_Launcher_Default_Dir_Names, Tauri_Api_Dir } from '../../variable';
import baifoxConfigTemplate_TempConfig from '../template/baifoxConfigTemplate_TempCongfig.ts';
import baifoxConfigTemplate_License from '../template/baifoxConfigTemplate_License.ts';
import baifoxConfig_Read from './func_read.ts';
import { join} from '@tauri-apps/api/path';
import baifoxConfigTemplate_MainConfig from '../template/baifoxConfigTemplate_MainConfig.ts';








// 读写配置文件 config子函数 初始化
export default async function baifoxConfig_Init(configFile: configFile, configKey: true | false) {
  if ( configFile === 'temp') {
    // 检查是否存在临时性 baifox launcher 的根目录
    if (!await exists(
      Baifox_Launcher_Default_Dir_Names.Root_Dir_Name, {
        baseDir: Tauri_Api_Dir.Config
      })) {
      // 不存在临时性 baifox launcher 的根目录 则在Tauri提供的config目录 创建一个临时的 baifox launcher 的根目录
      await mkdir(
        Baifox_Launcher_Default_Dir_Names.Root_Dir_Name, {
          baseDir: Tauri_Api_Dir.Config
        });
    }

    // 生成json格式的临时配置文件
    const contents = JSON.stringify(await baifoxConfigTemplate_TempConfig(), null ,2);
    const license = baifoxConfigTemplate_License();

    // 检查临时性 baifox launcher 的配置目录中 是否存在临时配置文件
    if (await exists(
      Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json', {
        baseDir: Tauri_Api_Dir.Config
      })) {
      // 存在临时配置文件 判定key是否为true 为true则重写临时配置文件
      if (configKey) {
        // 写入的内容为json格式的临时配置文件
        await writeTextFile(
          Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json',
          contents, {
            baseDir: Tauri_Api_Dir.Config
          });


        await writeTextFile(
          Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/LICENSE',
          license, {
            baseDir: Tauri_Api_Dir.Config
          });
      }
    } else {
      // 将临时配置文件写入到临时配置目录中
      // 写入的目录为Tauri提供的config目录下的baifox_launcher目录下的temp_config.json
      // 写入的内容为json格式的临时配置文件
      // 创建 临时性配置文件
      await writeTextFile(
        Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json',
        contents, {
          baseDir: Tauri_Api_Dir.Config
        });

      await writeTextFile(
        Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/LICENSE',
        license, {
          baseDir: Tauri_Api_Dir.Config
        });
    }
  } else if ( configFile ==='main') {

    const main_path_root = await baifoxConfig_Read('temp', 'user.config_dir.MainConfig');
    const main_path_app = main_path_root + '/' + Baifox_Launcher_Default_Dir_Names.Root_Dir_Name;
    const main_path_config = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Config_Dir_Name;
    const main_path_data = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Data_Dir_Name;
    const main_path_downloads = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Downloads_Dir_Name;
    const main_path_mc = main_path_root + '/' + Baifox_Launcher_Default_Dir_Names.Minecraft_Dir_Name;
    const main_path_plugin = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Plugin_Dir_Name;
    const main_path_resource = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Resource_Dir_Name;
    const main_path_log = main_path_app + '/' + Baifox_Launcher_Default_Dir_Names.Log_Dir_Name;
    const main_config_json = JSON.stringify(await baifoxConfigTemplate_MainConfig(), null ,2);

    async function checkDir(checkdir: string): Promise<boolean> {
      return await exists(checkdir, {
        dir: BaseDirectory.App
      });
    }

    async function mkdirDir(mkdir_dir: string) {
      await mkdir(mkdir_dir, {
        dir: BaseDirectory.App
      });
    }

    async function init_main_config() {
      if(!await checkDir(main_path_app)) {
        await mkdirDir(main_path_app)
      }
      if(!await checkDir(main_path_config)) {
        await mkdirDir(main_path_config)
      }
      if(!await checkDir(main_path_data)) {
        await mkdirDir(main_path_data)
      }
      if(!await checkDir(main_path_downloads)) {
        await mkdirDir(main_path_downloads)
      }
      if(!await checkDir(main_path_mc)) {
        await mkdirDir(main_path_mc)
      }
      if(!await checkDir(main_path_plugin)) {
        await mkdirDir(main_path_plugin)
      }
      if(!await checkDir(main_path_resource)) {
        await mkdirDir(main_path_resource)
      }
      if(!await checkDir(main_path_log)) {
        await mkdirDir(main_path_log)
      }

      await writeTextFile(main_path_config + '/main_config.json',
        main_config_json, {
          dir: BaseDirectory.App
        });
    }

    if (await checkDir(main_path_root)) {
      await init_main_config();
    } else {
      await mkdirDir(main_path_root);
      await init_main_config();
    }
  } else if ( configFile ==='microsoft') {

  } else {
    return;
  }
}
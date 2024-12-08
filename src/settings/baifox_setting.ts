import * as path from '@tauri-apps/api/path';

const {
  mkdir,
  exists,
  BaseDirectory
} = window.__TAURI__.fs;

// const Tauri_Api_Dir = {
//   Audio: BaseDirectory.Audio,
//   Cache: BaseDirectory.Cache,
//   Config: BaseDirectory.Config,
//   Data: BaseDirectory.Data,
//   LocalData: BaseDirectory.LocalData,
//   Document: BaseDirectory.Document,
//   Download: BaseDirectory.Download,
//   Picture: BaseDirectory.Picture,
//   Public: BaseDirectory.Public,
//   Video: BaseDirectory.Video,
//   Resource: BaseDirectory.Resource,
//   Temp: BaseDirectory.Temp,
//   AppConfig: BaseDirectory.AppConfig,
//   AppData: BaseDirectory.AppData,
//   AppLocalData: BaseDirectory.AppLocalData,
//   AppCache: BaseDirectory.AppCache,
//   AppLog: BaseDirectory.AppLog,
//   Desktop: BaseDirectory.Desktop,
//   Executable: BaseDirectory.Executable,
//   Font: BaseDirectory.Font,
//   Home: BaseDirectory.Home,
//   Runtime: BaseDirectory.Runtime,
//   Template: BaseDirectory.Template,
// }
// const Baifox_Launcher_Default_Dir_Names = {
//   Root_Dir_Name: '.baifox',
//   Config_Dir_Name: 'config',
//   Data_Dir_Name: 'data',
//   Log_Dir_Name: 'log',
//   Plugin_Dir_Name: 'plugin',
//   Resource_Dir_Name: 'resource',
//   Downloads_Dir_Name: 'downloads',
//   Minecraft_Dir_Name: '.minecraft',
// };



//
// const home = ;
// const contents = await readFile(await path.join(home, 'avatars/tauri.png'));

async function Root_Dir_Exists() {
  console.log('开始检查 根目录');
  if (await exists(await path.join(await path.homeDir(), '.baifox'))) {
    console.log('根目录 存在');
  } else {
    console.log('根目录 不存在');
    await mkdir(await path.join(await path.homeDir(), '.baifox'));
    console.log('已创建 根目录');
  }
}

function baifox_setting() {
  Root_Dir_Exists();

}
export default baifox_setting;

import { BaseDirectory } from '@tauri-apps/plugin-fs';

// tauri 插件 fs 提供的一些目录
const Tauri_Api_Dir = {
  // windows: Music 音乐文件夹
  Audio: BaseDirectory.Audio,
  // AppData\Local 本地文件夹
  Cache: BaseDirectory.Cache,
  // AppData\Roaming 漫游文件夹
  Config: BaseDirectory.Config,
  // AppData\Roaming 漫游文件夹
  Data: BaseDirectory.Data,
  // AppData\Local 本地文件夹
  LocalData: BaseDirectory.LocalData,
  // Documents 文档文件夹
  Document: BaseDirectory.Document,
  // Download 下载文件夹
  Download: BaseDirectory.Download,
  // Pictures 图片文件夹
  Picture: BaseDirectory.Picture,
  // Users\Public 公共文件夹
  Public: BaseDirectory.Public,
  // Videos 视频文件夹
  Video: BaseDirectory.Video,
  // 应用程序资源目录 可执行程序所在目录
  Resource: BaseDirectory.Resource,
  // AppData/Local/Temp  临时文件夹
  Temp: BaseDirectory.Temp,
  // AppData\Roaming\${bundleIdentifier}  ???  似乎是同一个目录
  AppConfig: BaseDirectory.AppConfig,
  // AppData/Roaming/${bundleIdentifier}  漫游文件夹
  AppData: BaseDirectory.AppData,
  // AppData/Local/${bundleIdentifier}   本地文件夹
  AppLocalData: BaseDirectory.AppLocalData,
  // AppData/Local/${bundleIdentifier}  缓存文件夹
  AppCache: BaseDirectory.AppCache,
  // AppData\Local\${bundleIdentifier}\logs  日志文件夹
  AppLog: BaseDirectory.AppLog,
  // desktop 桌面文件夹
  Desktop: BaseDirectory.Desktop,
  // Windows 没有这个目录
  Executable: BaseDirectory.Executable,
  // Windows 没有这个目录
  Font: BaseDirectory.Font,
  // ~ 用户的主目录
  Home: BaseDirectory.Home,
  // Windows 没有这个目录
  Runtime: BaseDirectory.Runtime,
  // AppData/Roaming/Microsoft/Windows/Templates  模板文件夹
  Template: BaseDirectory.Template,
};
// baifox launcher 的一些默认的目录名
const Baifox_Launcher_Default_Dir_Names = {
  // baifox launcher 的根目录名
  Root_Dir_Name: '.baifox',
  // baifox launcher 的配置目录名
  Config_Dir_Name: 'config',
  // baifox launcher 的数据目录名
  Data_Dir_Name: 'data',
  // baifox launcher 的日志目录名
  Log_Dir_Name: 'log',
  // baifox launcher 的插件目录名
  Plugin_Dir_Name: 'plugin',
  // baifox launcher 的资源目录名
  Resource_Dir_Name: 'resource',
  // baifox launcher 的下载目录名
  Downloads_Dir_Name: 'downloads',
  // baifox launcher 默认我的世界的目录名
  Minecraft_Dir_Name: '.minecraft',
};


export { Tauri_Api_Dir, Baifox_Launcher_Default_Dir_Names}
import { readTextFile } from '@tauri-apps/plugin-fs';
import { Tauri_Api_Dir,Baifox_Launcher_Default_Dir_Names } from "../../variable";


// 第一次启动判定
export async function Determines_the_first_start() {
  const temp_variable = await readTextFile(
    Baifox_Launcher_Default_Dir_Names.Root_Dir_Name + '/temp_config.json',
    {
      baseDir: Tauri_Api_Dir.Config,
    },
  );

  let temp_config_json = JSON.parse(temp_variable);
  console.info(temp_config_json)
  console.info(temp_config_json.Initialize_or_not)
  return temp_config_json.Initialize_or_not;
}
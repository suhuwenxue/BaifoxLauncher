import baifoxConfig from '../index.ts';


export default async function baifoxConfigTemplate_MainConfig() {
  return {
    app: {
      app_version: await baifoxConfig('read','temp','app.app_version'),
      tauri_version: await baifoxConfig('read','temp','app.tauri_version'),
      Initialize_or_not: await baifoxConfig('read','temp','app.Initialize_or_not'),
      timestamp: await baifoxConfig('read','temp','app.timestamp'),
    },
    user: {
      setting_language: await baifoxConfig('read','temp','user.setting_language'),
      setting_theme: await baifoxConfig('read','temp','user.setting_theme'),
    },
    mc: {

    }
  };
}
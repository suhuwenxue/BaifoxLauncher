// async function OfflineLogin(UserName: string) {
//   const userName = UserName;
//   const userUuid = uuidv4();
//   const userType = 'OfflineLogin';
//
//   const usetData = {
//     player: {
//       name: userName,
//       uuid: userUuid,
//       type: 'egacy',
//     }
//   };
//
//
// }

export async function MicrosoftLogin(key: number,url: string = '',xxx: string) {

  if (key === 1) {
    const MinecraftClientId = '00000000402b5328';
    const MinecraftRedirectUri = "https://login.live.com/oauth20_desktop.srf"
    const MinecraftScope = 'service::user.auth.xboxlive.com::MBI_SSL';
    const MinecraftGetUrl = 'https://login.live.com/oauth20_authorize.srf'

    const MinecraftUrl = `${MinecraftGetUrl}` +
      `?client_id=${MinecraftClientId}` +
      `&response_type=code` + `&scope=${encodeURIComponent(MinecraftScope)}` +
      `&redirect_uri=${encodeURIComponent(MinecraftRedirectUri)}`

    window.open(MinecraftUrl, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500')
  } else if (key === 2) {
    function extractAfterString(input: string, target: string): string {
      const index = input.indexOf(target);
      if (index !== -1) {
        return input.substring(index + target.length);
      } else {
        return '';
      }
    }

    const targetString = 'code=';
    return extractAfterString(url, targetString);
  }


}

// function MicrosoftOauthLogin() {
//
// }
//
// function Authlib_InjectorLogin() {
//
// }
//
// function Third_party_uniform_pass() {
//
// }


type LoginMode = {
  OfflineLogin: {
    UserName: string;
  };
  MicrosoftLogin: {
    Key: number;
    Url: string;



    // 这里可以定义微软登录所需的参数，例如 accessToken 等
  };
  MicrosoftOauthLogin: {
    // 这里可以定义微软 OAuth 登录所需的参数
  };
  Authlib_InjectorLogin: {
    // 这里可以定义 Authlib 注入器登录所需的参数
  };
  Third_party_uniform_pass: {
    // 这里可以定义第三方统一通行证登录所需的参数
  };
}
export default async function baifoxLogin(
  LoginMode: keyof LoginMode,
  LoginArgument: LoginMode[keyof LoginMode]) {
  switch (LoginMode) {
    case 'OfflineLogin':
      // 处理离线登录逻辑
      const offlineLoginData = LoginArgument as LoginMode['OfflineLogin'];
      // await OfflineLogin(offlineLoginData.UserName, );
      break;
    case 'MicrosoftLogin':
      // 处理微软登录逻辑
      const microsoftLoginData = LoginArgument as LoginMode['MicrosoftLogin'];
      await MicrosoftLogin(LoginArgument);
      // 调用微软登录函数，传入 microsoftLoginData
      break;
    case 'MicrosoftOauthLogin':
      // 处理微软 OAuth 登录逻辑
      const microsoftOauthLoginData = LoginArgument as LoginMode['MicrosoftOauthLogin'];
      // 调用微软 OAuth 登录函数，传入 microsoftOauthLoginData
      break;
    case 'Authlib_InjectorLogin':
      // 处理 Authlib 注入器登录逻辑
      const authlibInjectorLoginData = LoginArgument as LoginMode['Authlib_InjectorLogin'];
      // 调用 Authlib 注入器登录函数，传入 authlibInjectorLoginData
      break;
    case 'Third_party_uniform_pass':
      // 处理第三方统一通行证登录逻辑
      const thirdPartyUniformPassData = LoginArgument as LoginMode['Third_party_uniform_pass'];
      // 调用第三方统一通行证登录函数，传入 thirdPartyUniformPassData
      break;
    default:
      throw new Error(`Unknown login mode: ${LoginMode}`);
  }
}
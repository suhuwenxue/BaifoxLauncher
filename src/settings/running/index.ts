







export default async function baifoxRunning() {

  // -X、-XX参数
  // 配置JVM，如GC等：
  //
  // -Xmx1024m 最大堆大小为1024MB。
  // -Xmn128m 新生代堆大小为128MB。
  // -XX:+UseG1GC 开启G1。
  // -XX:-UseAdaptiveSizePolicy 自动选择年轻代区大小和相应的Survivor区比例。
  // -XX:-OmitStackTraceInFastThrow 省略异常栈信息从而快速抛出。

  // -D参数
  // 配置JVM系统属性，格式为-D<name>=<value>。
  //
  // -Dos.name=Windows 10 -Dos.version=10.0 当前系统名称及版本。
  // -Dminecraft.launcher.brand=minecraft-launcher -Dminecraft.launcher.version=2.1.3674 当前启动器名称及版本。
  // -Dlog4j.configurationFile=<文件路径>\client-1.12.xml 游戏日志配置文件。
  // -Djava.library.path=<natives文件夹路径> 当前系统下游戏运行所需的动态链接库。

  // -cp参数
  // 全称为-classpath，后为所有当前版本Minecraft的普通库文件路径及游戏主文件，中间在Windows下用;隔开，其他系统下用:隔开。

  // Minecraft参数
  // 以主类名开头，通常为net.minecraft.client.main.Main，若安装Mod加载器则一般为net.minecraft.launchwrapper.Launch
  // 参数通常有：
  // --username 后接用户名。
  // --version 后接游戏版本。
  // --gameDir 后接游戏路径。
  // --assetsDir 后接资源文件路径。
  // --assetIndex 后接资源索引版本。
  // --uuid 后接用户UUID。
  // --accessToken 后接登录令牌。
  // --userType 后接用户类型。
  // --versionType 后接版本类型，会显示在游戏主界面右下角。
  // --width 后接窗口宽度。
  // --height 后接窗口高度。
  // --server 后接服务器地址，游戏进入时将直接连入服务器
  // --port 后接服务器的端口号

}
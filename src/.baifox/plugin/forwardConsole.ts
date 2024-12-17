// tauri 插件 log 对 console 进行重定向 使其可以在debug控制台中看到日志
import { debug, error, info, trace, warn } from '@tauri-apps/plugin-log';

function forwardConsole(
  fnName: 'log' | 'debug' | 'info' | 'warn' | 'error',
  logger: (message: string) => Promise<void>
) {
  const original = console[fnName];
  console[fnName] = (message) => {
    original(message);
    logger(message);
  };
}

// 这只是个没有什么用处的整理函数
export function setupForwardConsole() {
  // 重定向 console 日志 到 控制台
  forwardConsole('log', trace);
  forwardConsole('debug', debug);
  forwardConsole('info', info);
  forwardConsole('warn', warn);
  forwardConsole('error', error);
}
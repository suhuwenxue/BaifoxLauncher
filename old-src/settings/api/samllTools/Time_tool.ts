// 获得当前时间
function getNowDate() {
  const myDate = new Date();
  const year = myDate.getFullYear(); // 获取当前年
  const mon = myDate.getMonth() + 1; // 获取当前月
  const date = myDate.getDate(); // 获取当前日
  const hours = myDate.getHours(); // 获取当前小时
  const minutes = myDate.getMinutes(); // 获取当前分钟
  const seconds = myDate.getSeconds(); // 获取当前秒
  return (
    year + '-' + mon + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
  );
}

// 获得当前时间时间戳
function getTimestamp() {
  return new Date(getNowDate()).getTime();
}

type timeKey = 'time' | 'timestamp';
export function time_tools(key: timeKey) {
  if (key === 'time') {
    return getNowDate();
  } else if (key === 'timestamp') {
    return getTimestamp();
  }
}
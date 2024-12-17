import { createApp } from 'vue';

import BaifoxMain from '@/baifox-main.vue'
import baifox from '@fox/baifox.ts';

// 页引导
async function bootStrap() {

  // 创建 vue主实例 main
  const baifoxMain = createApp(BaifoxMain);

  await baifox(baifoxMain)
}

bootStrap().then();
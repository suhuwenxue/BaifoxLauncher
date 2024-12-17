<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import MainLayoutContent from '@/layout/main-layout-content.vue';
import MainLayoutHeader from '@/layout/main-layout-header.vue';

export default defineComponent({
  name: 'baifoxMain',
  components: { MainLayoutContent, MainLayoutHeader  },
  setup() {
    return {
      darkTheme,
      zhCN,
      dateZhCN,
    };
  },
});
</script>

<template lang="pug">
  n-config-provider(
    :theme="darkTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  )
    n-layout(position="absolute")
      main-layout-header
      main-layout-content
</template>

<style scoped>
#root {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
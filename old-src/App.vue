<script lang="ts">
import { defineComponent, ref } from 'vue';
import { darkTheme } from 'naive-ui';
import Window_close_component from './components/main-app/window_close_component.vue';
import Window_maximzie_component from './components/main-app/window_maximzie_component.vue';
import Window_minimzie_component from './components/main-app/window_minimzie_component.vue';
import Root_layout_header from './layout/main-app/root_layout_header.vue';
import Root_layout_main from './layout/main-app/root_layout_main.vue';

export default defineComponent({
  components: {
    Root_layout_main,
    Root_layout_header,
    Window_minimzie_component,
    Window_maximzie_component,
    Window_close_component,
  },
  setup() {
    return {
      darkTheme,
      theme: ref(null),
    };
  },
});
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout position="absolute">
      <root_layout_header />
      <root_layout_main />
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
#root {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

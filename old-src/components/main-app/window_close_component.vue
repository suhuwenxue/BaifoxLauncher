<script lang="ts">
import { useDialog } from 'naive-ui';
import { defineComponent } from 'vue';
import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('main');
export default defineComponent({
  setup() {
    const dialog = useDialog();
    return {
      button_window_close_dialog() {
        dialog.success({
          title: '关闭应用窗口',
          content: '你确定关闭窗口吗？',
          positiveText: '确定',
          negativeText: '不确定',
          closable: false,
          onPositiveClick: () => {
            appWindow.close();
          },
        });
      },
    };
  },
});
</script>

<template>
  <n-button
    circle
    quaternary
    style="font-size: 30px; width: 40px"
    @click="button_window_close_dialog"
    data-tauri-drag-region
  >
    <n-icon>
      <close_icon />
    </n-icon>
  </n-button>
</template>

<style scoped></style>
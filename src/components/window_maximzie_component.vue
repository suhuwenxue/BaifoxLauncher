<script lang="ts">
import { defineComponent } from 'vue';
import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('main');
export default defineComponent({
  setup() {
    return {
      window_maximzie() {
        appWindow.toggleMaximize();
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
    @click="window_maximzie"
    data-tauri-drag-region
  >
    <n-icon>
      <maximzie_icon />
    </n-icon>
  </n-button>
</template>
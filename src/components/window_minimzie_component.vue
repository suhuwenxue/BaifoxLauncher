<script lang="ts">
import { defineComponent } from 'vue';
import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('main');

export default defineComponent({
  setup() {
    return {
      window_minimzie() {
        appWindow.minimize();
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
    @click="window_minimzie"
  >
    <n-icon>
      <minimzie_icon />
    </n-icon>
  </n-button>
</template>
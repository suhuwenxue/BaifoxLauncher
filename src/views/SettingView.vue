<script lang="ts">
import { defineComponent} from 'vue';
import baifox_setting from '../settings/baifox_setting.ts';

export default defineComponent({
  methods: { baifox_setting },
  setup() {
    return {

    }
  }
})
</script>

<template>
  <n-layout has-sider>
    <n-dialog-provider>
      <n-button @click="baifox_setting()">
        根目录 检测
      </n-button>
    </n-dialog-provider>


  </n-layout>

</template>

<style scoped>

</style>
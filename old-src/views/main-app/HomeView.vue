<script lang="ts">
import { defineComponent, ref } from 'vue'
import baifoxConfig from '../../settings/config';

export default defineComponent({
  methods: {
    async debugInit() {
      await baifoxConfig('init', 'main', true)
    }
  },
  setup() {
    return {

    }
  }
});

</script>
<template>
  <p> home </p>
  <n-button @click="debugInit">
    debug 重置
  </n-button>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {

    }
  }
})
</script>

<template>
  <n-layout content-style="padding: 5%"
    style="width: 100%; height: 100%;">
    <n-layout bordered content-style="padding: 5px"
              style="height: 100%;">
      <router-view />
    </n-layout>
  </n-layout>
</template>

<style>
#root-init {
  width: 100%;
  height: 100%;
}
</style>

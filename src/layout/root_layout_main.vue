<script setup lang="ts">

</script>

<template>
  <n-layout has-sider position="absolute" style="top: 41px">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :native-scrollbar="false"
      :width="144"
      :collapsed-width="48"
      show-trigger="arrow-circle"
      :show-collapsed-content="false"
    >
      <n-flex vertical>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
        <n-button>Oops!</n-button>
      </n-flex>
    </n-layout-sider>
    <n-layout content-style="padding: 24px;" :native-scrollbar="false">

    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>
<script setup lang="ts">
</script>

<template>
  <n-card style="width: 100%; height: 98%; margin: 5px;" title="xxx4">
    卡片内容
    <template #action>
      <n-button type="info">
        <router-link to="/steps3">
          上一步
        </router-link>
      </n-button>
      <n-button type="info">
        <router-link to="/steps5" >
          下一步
        </router-link>
      </n-button>
    </template>
  </n-card>
</template>

<style scoped></style>

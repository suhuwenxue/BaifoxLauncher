<script setup lang="ts">

</script>

<template>
  <n-card style="width: 100%; height: 98%; margin: 5px;" title="xxx9">
    卡片内容
    <template #action>
      <n-button type="info">
        <router-link to="/steps8">
          上一步
        </router-link>
      </n-button>
      <n-button type="info">
        <router-link to="/" >
          完成
        </router-link>
      </n-button>
    </template>
  </n-card>
</template>

<style scoped>

</style>
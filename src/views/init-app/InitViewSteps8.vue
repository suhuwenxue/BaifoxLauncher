<script setup lang="ts">

</script>

<template>
  <n-card style="width: 100%; height: 98%; margin: 5px;" title="xxx8">
    卡片内容
    <template #action>
      <n-button type="info">
        <router-link to="/steps7">
          上一步
        </router-link>
      </n-button>
      <n-button type="info">
        <router-link to="/steps9" >
          下一步
        </router-link>
      </n-button>
    </template>
  </n-card>
</template>

<style scoped>

</style>
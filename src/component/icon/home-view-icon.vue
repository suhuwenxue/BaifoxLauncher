<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home-view-icon'
});
</script>

<template>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#baihu-shuju"></use>
  </svg>

</template>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'main-layout-header',
});
</script>

<template lang="pug">
  n-layout-header(
    style="height: 41px; position: relative"
    bordered
  )
    n-flex(
      style="width: 100%; height: 100%"
      justify="start"
      :size="[0, 0]"
    )
      n-layout(
        style="height: 100%; width: calc(100% - 124px)"
      )
        div(
          style="margin: 2px; height: calc(100% - 4px); width: calc(100% - 4px);"
          data-tauri-drag-region
        )

      n-layout(
        style="height: 100%; width: 124px"
      )
        div(
          style="margin: 2px; height: calc(100% - 4px); width: calc(100% - 4px);"
          data-tauri-drag-region
        )
          n-flex(
            justify="start"
            :size="[0, 0]"
            warp="false"
            style="height: 100%"
            data-tauri-drag-region
          )
</template>

<style scoped></style>

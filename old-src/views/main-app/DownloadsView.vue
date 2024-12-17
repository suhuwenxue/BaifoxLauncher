<script lang="ts">
import type { MenuOption } from 'naive-ui'
import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
import { i18n } from '../../settings/language/language.ts'
let _t = i18n.global.t


const menuOptions: MenuOption[] = [
  {
    label: _t('Main.downloads.menu.menu_1.main_title'),
    key: 'Minecraft-download',
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/minecraft-downloads'
              }
            },
            {
              default: () => _t('Main.downloads.menu.menu_1.sub_title_1')
            }
          ),
        key: 'Minecraft-download-sub_1',
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: '/minecraft-mods'
              }
            },
            {
              default: () => _t('Main.downloads.menu.menu_1.sub_title_2')
            }
          ),
        key: 'Minecraft-download-sub_2',
      },
    ]
  },
  {
    label: _t('Main.downloads.menu.menu_2.main_title'),
    // label: () =>
    //   h(
    //     RouterLink,
    //     {
    //       to: {
    //         path: '/resource-downloads'
    //       }
    //     },
    //     { default: () => _t('Main.downloads.menu.menu_2.main_title')}
    //   ),
    key: 'resource-download',
    children: [
      {

      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/path-downloads'
          }
        },
        { default: () => _t('Main.downloads.menu.menu_3.main_title')}
      ),
    key:'path-download',
  }
]

export default defineComponent({
  setup() {
    return {
      menuOptions,
    }
  }
})
</script>

<template>
  <n-card style="height: 92%; width: 96%; position: absolute" content-style="padding: 0;">
    <template #default>
    <n-layout has-sider content-style="padding: 2px"
              style="height: 100%; width: 100%;">
      <n-layout-sider bordered content-style="padding: 2px;" :width="140"
              style="height: 100%">
        <n-menu :options="menuOptions" />
      </n-layout-sider>
      <n-layout-content content-style="padding: 2px;" style="height: 100%;width: calc(100% - 200px);">
        <router-view />
      </n-layout-content>
    </n-layout>
    </template>
  </n-card>
</template>

<style scoped>

</style>
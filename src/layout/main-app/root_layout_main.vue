<script lang="ts">
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import Sider_meun_fenlei from '../../components/main-app/icon/sider_meun_fenlei.vue';
import Sider_menu_gerenzhongxin from '../../components/main-app/icon/sider_menu_gerenzhongxin.vue';
import Sider_manu_downloads from '../../components/main-app/icon/sider_manu_downloads.vue';
import Sider_menu_xiangmu from '../../components/main-app/icon/sider_menu_xiangmu.vue';
import Sider_menu_settings from '../../components/main-app/icon/sider_menu_settings.vue';
import Sider_meun_about from '../../components/main-app/icon/sider_meun_about.vue';
import { defineComponent, h, ref } from 'vue'
import { RouterLink } from 'vue-router';

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => '概 括' }
      ),
    key: 'home',
    icon: renderIcon(Sider_meun_fenlei),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'account'
          }
        },
        { default: () => '账 户' }
      ),
    key: 'account',
    icon: renderIcon(Sider_menu_gerenzhongxin),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'download'
          }
        },
        { default: () => '下 载' }
      ),
    key: 'download',
    icon: renderIcon(Sider_manu_downloads)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'project'
          }
        },
        { default: () => '工 作 区' }
      ),
    key: 'project',
    icon: renderIcon(Sider_menu_xiangmu),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'setting'
          }
        },
        { default: () => '设 置' }
      ),
    key: 'setting',
    icon: renderIcon(Sider_menu_settings),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'about'
          }
        },
        { default: () => '关 于' }
      ),
    key: 'about',
    icon: renderIcon(Sider_meun_about),
  }
]

export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(true),
      menuOptions,
    }
  }
})
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
      :collapsed="collapsed"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="48"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout content-style="padding: 24px;" :native-scrollbar="false">
      <router-view />
    </n-layout>
  </n-layout>
</template>

<style scoped>

</style>
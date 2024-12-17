<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import { type MenuOption, NIcon } from 'naive-ui';
import { RouterLink } from 'vue-router';
import HomeViewIcon from '@/component/icon/home-view-icon.vue';
import AccountViewIcon from '@/component/icon/account-view-icon.vue';
import GameViewIcon from '@/component/icon/game-view-icon.vue';
import SettingsViewIcon from '@/component/icon/settings-view-icon.vue';
import AboutViewIcon from '@/component/icon/about-view-icon.vue';

import { i18n } from '@fox/i18n'
let _t = i18n.global.t

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions_top: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => _t('main.menu.menu_home.title') }
      ),
    key: 'home',
    icon: renderIcon(HomeViewIcon),
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
        { default: () => _t('main.menu.menu_account.title') }
      ),
    key: 'account',
    icon: renderIcon(AccountViewIcon),
  }
]
const menuOptions_main: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'game'
          }
        },
        { default: () => _t('main.menu.menu_game.title') }
      ),
    key: 'game',
    icon: renderIcon(GameViewIcon),
  }
]
const menuOptions_bottom: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'settings'
          }
        },
        { default: () => _t('main.menu.menu_settings.title') }
      ),
    key: 'settings',
    icon: renderIcon(SettingsViewIcon),
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
        { default: () => _t('main.menu.menu_about.title') }
      ),
    key: 'about',
    icon: renderIcon(AboutViewIcon),
  }
];

export default defineComponent({
  name: 'main-layout-content',
  setup() {
    return {
      activeKey: ref<string | null>(null),
      collapsed: ref(true),
      menuOptions_top,
      menuOptions_main,
      menuOptions_bottom,
    }
  }
});
</script>

<template lang="pug">
  n-layout(
    has-sider
    position="absolute"
    style="top: 41px"
  )
    n-layout-sider(
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
    )
      n-layout(style="height: 100%;" position="absolute" )
        n-layout-header
          n-menu(
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="48"
            :collapsed-icon-size="22"
            :options="menuOptions_top"
          )
        n-layout-content(style="height: calc(100% - 204px)")
          n-menu(
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="48"
            :collapsed-icon-size="22"
            :options="menuOptions_main"
          )
        n-layout-footer(style="bottom: 0;")
          n-menu(
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="48"
            :collapsed-icon-size="22"
            :options="menuOptions_bottom"
          )
    n-layout-content(
      content-style="padding: 24px;"
      :native-scrollbar="false"
    )
      router-view
</template>

<style scoped>

</style>
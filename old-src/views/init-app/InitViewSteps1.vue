<script lang="ts">
import { defineComponent,ref } from 'vue'
import { Window } from '@tauri-apps/api/window';
import baifoxConfig from '../../settings/config';

const appWindow = new Window('main');
export default defineComponent({
  methods: {
    async step1_func() {
      await baifoxConfig('write', 'temp', 'setting_language', this.value)
      location.reload();
      window.location.href = '/steps2';
    }
  },
  setup() {
    const value = ref('en-US')
    return {
      value,
      options_language: [
        {
          label: '简体中文 [100%]',
          value: 'zh-CN',
        },
        {
          label: '繁体中文 [100%]',
          value: 'zh-TW',
        },
        {
          label: 'English [100%]',
          value: 'en-US'
        },
        {
          label: '日本語 [75%]',
          value: 'ja-JP',
          disabled: false
        },
      ],
      exit_button: () => {
        appWindow.close()
      }
    }
  }
})
</script>

<template>
  <n-card style="width: 100%; height: 98%; margin: 5px;">
    <template #header>
      <n-grid :cols="16">
        <n-gi :span="1">
          <n-avatar
            round
            size="small"
            src="/assets/AppIcon.png"
          />
        </n-gi>
        <n-gi :span="15">
          <span>{{ $t('Init.step1_title') }}</span>
        </n-gi>
      </n-grid>
    </template>
    <template #default>
      <span>{{ $t('Init.step1_content_1') }}</span>
      <span>{{ $t('Init.step1_content_2') }}</span>
      <span>{{ $t('Init.step1_content_3') }}</span>
      <span>{{ $t('Init.step1_content_4') }}</span>
      <span>{{ $t('Init.step1_content_5') }}</span>
      <n-divider />
      <n-grid :cols="2">
        <n-gi>
          <p>{{ $t('Init.step1_content_language') }} {{ $t('Init.step1_content_language_text') }}</p>
          <p>{{ $t('Init.step1_content_language_change_title') }}</p>
          <n-select v-model:value="value" :options="options_language" />
        </n-gi>
      </n-grid>
      <n-divider />
      <p>{{ $t('Init.step1_content_language_change') }}</p>
    </template>
    <template #action>
      <n-grid x-gap="12" :cols="16">
        <n-gi :span="14">
        </n-gi>
        <n-gi>
          <n-button type="info" @click="exit_button">
            {{ $t('Init.exit') }}
          </n-button>
        </n-gi>
        <n-gi>
          <n-button type="info" @click="step1_func">
<!--            <router-link to="/steps2" >-->
            {{ $t('Init.next') }}
<!--            </router-link>-->
          </n-button>
        </n-gi>
      </n-grid>
    </template>
  </n-card>
</template>

<style scoped></style>

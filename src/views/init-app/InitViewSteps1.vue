<script lang="ts">
import { getLangText } from '../../settings/language/language.ts'
import { defineComponent,ref } from 'vue'
import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('main');
export default defineComponent({
  methods: {
    getLangText,
    step1_func() {
      console.log(this.value);
    },
    getValue: function() {
      return this.value;
    }
  },
  setup() {
    const language = ref('xxxx')
    const value = ref(null)
    return {
      value,
      options_language: [
        {
          label: getLangText('Init.step1_content_language_list1'),
          value: 'zh_cn',
        },
        {
          label: getLangText('Init.step1_content_language_list2'),
          value: 'zh_tw',
        },
        {
          label: getLangText('Init.step1_content_language_list3'),
          value: 'en_us'
        },
        {
          label: getLangText('Init.step1_content_language_list4'),
          value: 'ja_jp',
          disabled: true
        },
      ],
      language,
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
          <span>{{ getLangText('Init.step1_title') }}</span>
        </n-gi>
      </n-grid>
    </template>
    <template #default>
      <p>{{ getLangText('Init.step1_content') }}</p>
      <n-divider />
      <n-grid :cols="2">
        <n-gi>
          <p>{{ getLangText('Init.step1_content_language') + language }}</p>
          <p>{{ getLangText('Init.step1_content_language_change_title') }}</p>
          <n-select v-model:value="value" :options="options_language" />
        </n-gi>
      </n-grid>
      <n-divider />
      <p>{{ getLangText('Init.step1_content_language_change') }}</p>
    </template>
    <template #action>
      <n-grid x-gap="12" :cols="16">
        <n-gi :span="14">
        </n-gi>
        <n-gi>
          <n-button type="info" @click="exit_button">
            {{ getLangText('Init.exit') }}
          </n-button>
        </n-gi>
        <n-gi>
          <n-button type="info" @click="step1_func">
<!--            <router-link to="/steps2" >-->
              {{ getLangText('Init.next') }}
<!--            </router-link>-->
          </n-button>
        </n-gi>
      </n-grid>
    </template>
  </n-card>
</template>

<style scoped></style>

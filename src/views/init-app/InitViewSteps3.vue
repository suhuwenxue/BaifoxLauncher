<script lang="ts">
import type { DrawerPlacement } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import type { FormInst } from 'naive-ui'
import { open } from '@tauri-apps/plugin-dialog';
import baifoxConfig from '../../settings/config'

export default defineComponent({
  methods: {
    async open_file() {
      const file = await open({multiple: false, directory: true,})
      this.configDir.MainConfig = file;
    },
    async configDir_write() {
      console.info(this.configDir)
      await baifoxConfig('write', 'temp','config_dir', this.configDir)

      // 延迟 1 秒后刷新页面
      setTimeout(() => {
        window.location.href = '/steps4'
      }, 1000);
    }
  },
  setup() {
    const active1 = ref(false)
    const active2 = ref(false)
    const placement = ref<DrawerPlacement>('right')
    const activate = (active_num: number, place: DrawerPlacement ,active_key: boolean) => {
      if( active_num === 1 ) {
        active1.value = active_key;
      } else if ( active_num === 2 ) {
        active2.value = active_key;
      }
      placement.value = place
    }
    const formRef = ref<FormInst | null>(null)
    return {
      active1,
      active2,
      placement,
      activate,
      size: ref('medium'),
      configDir: ref({
        MainConfig: null,
        selectValue: 'Minecraft Standard format',
      }),
      formRef,
      generalOptions: ['Minecraft Standard format', 'Version isolation', 'Resource separation'].map(
        v => ({
          label: v,
          value: v
        })
      ),
      rules: {
        inputMainPathValue: {
          required: true,
          trigger: ['string', 'input'],
          message: '请输入 文件夹路径'
        }
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
          <span>{{ $t('Init.step3_title') }}</span>
        </n-gi>
      </n-grid>
    </template>
    <template #default>
      <span>{{ $t('Init.step3_content_1') }}</span>
      <n-divider />
      <n-grid :cols="1" y-gap="5">
        <n-gi>
          <n-card hoverable>
            <template #header>
              {{ $t('Init.step3_collapse_1_title') }}
            </template>
            <template #default>
              <n-button type="info" @click="activate(1,'bottom', true)">
                {{ $t('Init.step3_collapse_1_button') }}
              </n-button>
              <n-drawer v-model:show="active1" default-height="100%"
                        :placement="placement" :block-scroll=true
                        :close-on-esc=false>
                <n-drawer-content>
                  <template #header>
                    {{ $t('Init.step3_collapse_1_drawer_title') }}
                  </template>
                  <template #default>
                    <n-card style="width: 90%; height: 90%; margin: 5px;">
                      <template #header>
                       {{ $t('Init.step3_collapse_1_drawer_card_title') }}
                      </template>
                      <template #default>
                        <n-grid :cols="4" x-gap="5" >
                          <n-gi :span="3">
                            <n-form
                              ref="formRef"
                              :model="configDir"
                              :rules="rules"
                              label-placement="left"
                              label-width="auto"
                              require-mark-placement="right-hanging"
                              :size="size"
                            >
                              <n-grid :cols="6" y-gap="10px" x-gap="5px">
                                <n-gi :span="6">
                                  <n-grid :cols="6" y-gap="2px" x-gap="5px">
                                    <n-gi :span="6">
                                      <span>{{ $t('Init.step3_collapse_1_drawer_card_from_1_content') }}</span>
                                    </n-gi>
                                    <n-gi :span="5">
                                      <n-form-item  path="inputMainPathValue">
                                        <template #label>
                                          {{ $t('Init.step3_collapse_1_drawer_card_from_1') }}
                                        </template>
                                        <n-input v-model:value="configDir.MainConfig" placeholder="选择文件夹 路径" />
                                      </n-form-item>
                                    </n-gi>
                                    <n-gi :span="1">
                                      <n-button @click="open_file">
                                        {{ $t('Init.step3_collapse_1_drawer_card_from_1_button') }}
                                      </n-button>
                                    </n-gi>
                                  </n-grid>
                                </n-gi>
                                <n-gi :span="6">
                                  <n-grid :cols="6" y-gap="2px" x-gap="5px">
                                    <n-gi :span="6">
                                      <span>{{ $t('Init.step3_collapse_1_drawer_card_from_2_content') }}</span>
                                    </n-gi>
                                    <n-gi :span="5">
                                      <n-form-item path="selectValue">
                                        <template #label>
                                          {{ $t('Init.step3_collapse_1_drawer_card_from_2') }}
                                        </template>
                                        <n-select
                                          v-model:value="configDir.selectValue"
                                          placeholder="Select"
                                          :options="generalOptions"
                                        />
                                      </n-form-item>
                                    </n-gi>
                                  </n-grid>
                                </n-gi>
                              </n-grid>
                            </n-form>
                          </n-gi>
                        </n-grid>
                      </template>
                      <template #footer>
                        <n-grid :cols="6" x-gap="5px" y-gap="10">
                          <n-gi :span="1">
                            <n-button type="info" @click="activate(1,'bottom', false)">
                              {{ $t('Init.cancel') }}
                            </n-button>
                          </n-gi>
                          <n-gi :span="1">
                            <n-button type="info" @click="configDir_write">
                              {{ $t('Init.next') }}
                            </n-button>
                          </n-gi>
                          <n-gi :span="4"></n-gi>
                          <n-gi :span="6">
                            <pre>{{ JSON.stringify(configDir, null, 2) }}</pre>
                          </n-gi>
                        </n-grid>
                      </template>
                    </n-card>
                  </template>
                </n-drawer-content>
              </n-drawer>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card hoverable>
            <template #header>
              {{ $t('Init.step3_collapse_2_title') }}
            </template>
            <template #default>
              <n-button type="info" @click="activate(2,'bottom', true)">
                {{ $t('Init.step3_collapse_2_button') }}
              </n-button>
              <n-drawer v-model:show="active2" default-height="100%"
                        :placement="placement" :block-scroll=true
                        :close-on-esc=false>
                <n-drawer-content>
                  <template #header>
                    {{ $t('Init.step3_collapse_2_drawer_title') }}
                  </template>
                  <template #default>
                    <n-card style="width: 90%; height: 90%; margin: 5px;">
                      <template #header>
                        {{ $t('Init.step3_collapse_2_drawer_card_title') }}
                      </template>
                      <template #default>
                        <n-grid :cols="4" x-gap="5" >
                          <n-gi :span="3">
                            <n-form
                              ref="formRef"
                              :model="configDir"
                              :rules="rules"
                              label-placement="left"
                              label-width="auto"
                              require-mark-placement="right-hanging"
                              :size="size"
                            >
                              <n-grid :cols="6" y-gap="10px" x-gap="5px">
                                <n-gi :span="6">
                                  <n-grid :cols="6" y-gap="2px" x-gap="5px">
                                    <n-gi :span="6">
                                      <span>{{ $t('Init.step3_collapse_2_drawer_card_from_1_content') }}</span>
                                    </n-gi>
                                    <n-gi :span="5">
                                      <n-form-item  path="inputMainPathValue">
                                        <template #label>
                                          {{ $t('Init.step3_collapse_2_drawer_card_from_1') }}
                                        </template>
                                        <n-input v-model:value="configDir.MainConfig" placeholder="选择文件夹 路径" />
                                      </n-form-item>
                                    </n-gi>
                                    <n-gi :span="1">
                                      <n-button @click="open_file">
                                        {{ $t('Init.step3_collapse_2_drawer_card_from_1_button') }}
                                      </n-button>
                                    </n-gi>
                                  </n-grid>
                                </n-gi>
                                <n-gi :span="6">
                                  <n-grid :cols="6" y-gap="2px" x-gap="5px">
                                    <n-gi :span="6">
                                      <span>{{ $t('Init.step3_collapse_2_drawer_card_from_2_content') }}</span>
                                    </n-gi>
                                    <n-gi :span="5">
                                      <n-form-item path="selectValue">
                                        <template #label>
                                          {{ $t('Init.step3_collapse_2_drawer_card_from_2') }}
                                        </template>
                                        <n-select
                                          v-model:value="configDir.selectValue"
                                          placeholder="Select"
                                          :options="generalOptions"
                                        />
                                      </n-form-item>
                                    </n-gi>
                                  </n-grid>
                                </n-gi>
                              </n-grid>
                            </n-form>
                          </n-gi>
                        </n-grid>
                      </template>
                      <template #footer>
                        <n-grid :cols="6" x-gap="5px" y-gap="10">
                          <n-gi :span="1">
                            <n-button type="info" @click="activate(2,'bottom', false)">
                              {{ $t('Init.cancel') }}
                            </n-button>
                          </n-gi>
                          <n-gi :span="1">
                            <n-button type="info" @click="configDir_write">
                              {{ $t('Init.next') }}
                            </n-button>
                          </n-gi>
                          <n-gi :span="4"></n-gi>
                          <n-gi :span="6">
                            <pre>{{ JSON.stringify(configDir, null, 2) }}</pre>
                          </n-gi>
                        </n-grid>
                      </template>
                    </n-card>
                  </template>
                </n-drawer-content>
              </n-drawer>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
      <n-divider />
    </template>
  </n-card>
</template>

<style scoped></style>

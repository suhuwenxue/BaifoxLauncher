<script lang="ts">
import {defineComponent} from "vue";
import baifoxLogin, { MicrosoftLogin } from '../../settings/login';

export default defineComponent({
  methods: {
    async login() {
      await MicrosoftLogin(1);
    },
    async login_code () {
      console.log(this.login_reurl)
      this.login_reurl_xxx = await MicrosoftLogin(1, this.login_reurl);
      console.log(this.login_reurl_xxx)
    }
  },
  setup() {
    return {
      login_reurl: ref(null),
      login_reurl_xxx: ref(null)
    }
  }
});
</script>

<template>
  <n-card style="width: 100%; height: 98%; margin: 5px">
    <template #header>
      <n-grid :cols="16">
        <n-gi :span="1">
          <n-avatar round size="small" src="/assets/AppIcon.png" />
        </n-gi>
        <n-gi :span="15">
          <span>{{ $t('Init.step4_title') }}</span>
        </n-gi>
      </n-grid>
    </template>
    <template #default>
      <n-grid :cols="16">
        <n-gi :span="8">
          <n-card hoverable>
            <n-tabs
              class="card-tabs"
              default-value="signin"
              size="large"
              animated
              pane-wrapper-style="margin: 0 -4px"
              pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
            >
              <n-tab-pane name="signin">
                <template #tab>
                  <span>{{ $t('Init.step4_login_tab_1_title') }}</span>
                </template>
                <template #default>
                  <n-button type="primary" block secondary strong @click="login">
                    登录
                  </n-button>
                  <n-button type="primary" block secondary strong @click="login_code">
                    code
                  </n-button>
                  <n-form>
                                        <n-form-item-row>
                                          <template #label>
                                            <span>
                                              回调地址
<!--                                              {{ $t('Init.step4_login_tab_1_label_1') }}-->
                                            </span>
                                          </template>
                                          <n-input v-model:value="login_reurl"
                                                   type="textarea"
                                                   placeholder="基本的 Textarea" />

                                          <n-input v-model:value="login_reurl_xxx"
                                                   type="textarea"
                                                   placeholder="基本的 Textarea" />
                                        </n-form-item-row>
<!--                                        <n-form-item-row>-->
<!--                                          <template #label>-->
<!--                                            <span>{{ $t('Init.step4_login_tab_1_label_1') }}</span>-->
<!--                                          </template>-->
<!--                                          <n-input />-->
<!--                                        </n-form-item-row>-->
                                      </n-form>
                </template>
              </n-tab-pane>
              <n-tab-pane name="signup" tab="第三方皮肤站登录">
                <n-form>
                  <n-form-item-row label="用户名">
                    <n-input />
                  </n-form-item-row>
                  <n-form-item-row label="密码">
                    <n-input />
                  </n-form-item-row>
                  <n-form-item-row label="重复密码">
                    <n-input />
                  </n-form-item-row>
                </n-form>
                <n-button type="primary" block secondary strong>
                  注册
                </n-button>
              </n-tab-pane>
              <n-tab-pane name="forget" tab="离线登录">
                <n-form>
                  <n-form-item-row label="用户名">
                    <n-input />
                  </n-form-item-row>
                  <n-form-item-row label="邮箱">
                    <n-input />
                  </n-form-item-row>
                </n-form>
                <n-button type="primary" block secondary strong> </n-button>
              </n-tab-pane>
            </n-tabs>
          </n-card>
        </n-gi>
        <n-gi :span="8"> </n-gi>
      </n-grid>
    </template>
  </n-card>
</template>

<style scoped></style>

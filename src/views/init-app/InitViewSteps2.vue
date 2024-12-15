<script setup lang="ts">

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
          <span>{{ $t('Init.step2_title') }}</span>
        </n-gi>
      </n-grid>
    </template>
    <template #default>
      <span>{{ $t('Init.step2_content_1') }}</span>
      <span>{{ $t('Init.step2_content_2') }}</span>
      <span>{{ $t('Init.step2_content_3') }}</span>
      <n-divider />
      <n-grid :cols="1">
        <n-gi>
          <n-card>
            <template #header>
              <span>{{ $t('Init.step2_license') }}</span>
            </template>
            <template #default>
              <span>{{ $t('Init.step2_license_text_1') }}</span>
              <span>{{ $t('Init.step2_license_text_2') }}</span>
              <span>{{ $t('Init.step2_license_text_3') }}</span>
              <span>{{ $t('Init.step2_license_text_4') }}</span>
              <span>{{ $t('Init.step2_license_text_5') }}</span>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
      <n-divider />
      <p>{{ $t('Init.step2_license_Agreement_statement') }}</p>
    </template>
    <template #action>
      <n-grid x-gap="12" :cols="16">
        <n-gi :span="14">
        </n-gi>
        <n-gi>
      <n-button type="info">
        <router-link to="/">
          {{ $t('Init.back') }}
        </router-link>
      </n-button>
        </n-gi>
        <n-gi>
      <n-button type="info">
        <router-link to="/steps3" >
          {{ $t('Init.next') }}
        </router-link>
      </n-button>
        </n-gi>
      </n-grid>
    </template>
  </n-card>
</template>

<style scoped></style>

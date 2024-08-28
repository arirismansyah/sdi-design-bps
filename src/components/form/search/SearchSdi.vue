<script setup lang="ts">
import { NInputGroup, NInput, NSelect, NButton, NIcon } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '@/theme/themeOverrides'
import '@/assets/main.css'
import { Search } from '@vicons/ionicons5'
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-input-group class="search" style="border-radius: 40px">
      <n-select :style="{ width: '25%' }"> </n-select>
      <n-input :style="{ width: '70%' }" />
      <n-button type="primary" :style="{ width: '5%' }">
        <template #icon>
          <n-icon><Search /></n-icon>
        </template>
      </n-button>
    </n-input-group>
  </n-config-provider>
</template>

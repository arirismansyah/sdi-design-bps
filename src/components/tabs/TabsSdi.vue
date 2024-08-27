<script setup lang="ts">
import '@/assets/main.css'
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '../../theme/themeOverrides'
import { NTabs, NTabPane } from 'naive-ui'
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-tabs type="card" class="tab-sdi">
      <n-tab-pane name="tab1" tab="Tab 1"></n-tab-pane>
      <n-tab-pane name="tab2" tab="Tab 2"></n-tab-pane>
      <n-tab-pane name="tab3" tab="Tab 3"></n-tab-pane>
    </n-tabs>
  </n-config-provider>
</template>

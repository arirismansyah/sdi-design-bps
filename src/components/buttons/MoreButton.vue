<script setup lang="ts">
import { NButton, NIcon } from 'naive-ui'
import { ArrowForwardCircle } from '@vicons/ionicons5'
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '../../theme/themeOverrides'
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-button class="more-btn" text>
      Selengkapnya
      <template #icon>
        <n-icon>
          <ArrowForwardCircle />
        </n-icon>
      </template>
    </n-button>
  </n-config-provider>
</template>

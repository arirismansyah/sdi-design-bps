<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="hero-sdi">
      <slot>
        <div class="overlay">
          <p class="page-title text-center">
            Judul Satu Data <span class="underlined-title">Tematik</span>
          </p>
          <p class="page-subtitle text-center">Subtitle Page</p>

          <n-input-group class="search" style="border-radius: 40px">
            <n-select :style="{ width: '25%' }"> </n-select>
            <n-input :style="{ width: '70%' }" />
            <n-button type="primary" :style="{ width: '5%' }">
              <template #icon>
                <n-icon><Search /></n-icon>
              </template>
            </n-button>
          </n-input-group>
        </div>
      </slot>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '../../theme/themeOverrides'
import '@/assets/main.css'
import { Search } from '@vicons/ionicons5'
import { ref } from 'vue'
import {
  NCard,
  NSelect,
  NInput,
  NButton,
  NIcon,
  NInputGroup,
  NInputGroupLabel,
  NSpace,
  NLayout
} from 'naive-ui'
</script>

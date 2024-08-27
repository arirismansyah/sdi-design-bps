<script setup lang="ts">
import '@/assets/main.css'
import { Person, ChevronDown } from '@vicons/ionicons5'
import { NLayoutHeader, NTabs, NTab, NIcon, NFlex, NDropdown, NSpace } from 'naive-ui'
</script>

<template>
  <n-layout-header class="header-sdi" :style="{ position: 'sticky', top: '0', zIndex: '1000' }">
    <div>
      <img src="@/assets/images/logo/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="navbar-sdi">
      <n-flex justify="space-around" size="large">
        <n-tabs class="navbar-tabs" type="bar">
          <n-tab name="home" tab="BERANDA"></n-tab>
          <n-tab name="about" tab="TENTANG STATCANA"></n-tab>
          <n-tab name="catalog" tab="KATALOG"></n-tab>
          <n-tab name="analysis" tab="ANALISIS"></n-tab>
        </n-tabs>
      </n-flex>
    </div>
    <div class="navbar-right">
      <n-dropdown class="language-menu btn-nav" trigger="click">
        <n-space class="dropdown-trigger">
          <img
            class="avatar-image"
            src="@/assets/images/flags/indonesia-flag.png"
            alt="Indonesian Flag"
          />
          <n-icon size="20">
            <template #default>
              <ChevronDown />
            </template>
          </n-icon>
        </n-space>
      </n-dropdown>
      <n-dropdown class="right-menu btn-nav" trigger="click">
        <n-space class="dropdown-trigger" style="cursor: pointer">
          <n-icon size="24">
            <person />
          </n-icon>
        </n-space>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>

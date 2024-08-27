<template>
  <div class="footer-sdi">
    <div class="footer-curve">
      <!-- No content inside, just a blank white rectangle -->
    </div>
    <div class="footer-content">
      <n-grid :cols="12" :x-gap="16" :y-gap="16">
        <n-grid-item span="7">
          <n-row>
            <slot name="logo-sdi">
              <img class="logo" src="@/assets/images/logo/logo-bps.svg" />
            </slot>
          </n-row>
          <n-row>
            <slot name="alamat">
              <p class="title">{{ instansi }}</p>
              <li>{{ alamat }}</li>
              <li>
                {{ telp }}
              </li>
              <li>
                {{ fax }}
              </li>
              <li>
                {{ email }}
              </li>
            </slot>
          </n-row>
          <n-row>
            <img class="logo" src="@/assets/images/logo/berakhlak.png" />
          </n-row>
        </n-grid-item>

        <n-grid-item class="footer-right" span="5">
          <slot>
            <n-row class="row">
              <h3 class="title">Tautan Lainnya</h3>
            </n-row>
            <n-row class="row">
              <li><a href="#">Website BPS</a></li>
              <li><a href="#">Website Sensus</a></li>
              <li><a href="#">Website BNPB</a></li>
            </n-row>
          </slot>
        </n-grid-item>
      </n-grid>
      <n-divider> </n-divider>
      <slot>
        <p class="footer-copyright title">
          {{ copyright }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import '@/assets/main.css'
import { NDivider, NGrid, NGridItem, NSpace } from 'naive-ui'
defineProps({
  copyright: String,
  instansi: String,
  alamat: String,
  telp: String,
  fax: String,
  email: String
})
</script>

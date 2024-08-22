<template>
  <div class="footer-sdi">
    <div class="footer-content">
      <n-grid :cols="2" :x-gap="50">
        <n-grid-item>
          <slot name="logo-sdi">
            <img class="logo" src="@/assets/images/logo/logo-bps.svg" />
          </slot>
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
        </n-grid-item>

        <n-grid-item class="footer-right">
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
      <n-divider>
        <slot>
          <p class="footer-copyright title">
            {{ copyright }}
          </p>
        </slot>
      </n-divider>
    </div>
  </div>
</template>

<script setup>
import '@/assets/main.css'
import { NDivider, NGrid, NGridItem } from 'naive-ui'
defineProps({
  copyright: String,
  instansi: String,
  alamat: String,
  telp: String,
  fax: String,
  email: String
})
</script>

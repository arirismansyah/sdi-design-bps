# sdi-design-bps

Ini adalah repositori untuk component-component yang digunakan pada UI portal SDI BPS. Dibuat dengan [Vue3](https://vuejs.org/) & library component [Naive-ui](https://www.naiveui.com/). Dokumentasi UI dengan [Storybook](https://storybook.js.org/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Run Storybook

Untuk menjalankan storybook

```sh
npm run storybook
```

### CSS

Ada 3 file css pada folder assets. **_color.css_** untuk mendefinisikan warna yang digunakan, **_components.css_** untuk styling tiap component yang ada, dan **_main.css_** adalah yang mengcompile semuanya dan akan di-_import_ untuk implementasi styling pada UI.

```sh

├── src/
│   ├── assets
│       ├── color.css
│       ├── components.css
│       └── main.css
```

### Theme Overrides

themeOverrides.ts ini digunakan untuk mengganti/custom styling default dari Naive-ui dengan style yang kita inginkan.

```sh

├── src/
│   ├── theme
│       └── themeOverrides.ts
```

Cara implemetasi themeOverrides.ts dengan menggunakan NConfigProvider. Component yang yang di-_wrap_ dengan n-config-provider akan mengimplementasikan tema yang telah kita customisasi.

```ts
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import themeOverrides from '@/theme/themeOverrides'
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <component></component> --
  </n-config-provider>
</template>
```

atau bisa diimplementasikan secara global pada App.vue

```ts
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/navigation/NavbarComponent.vue'
import FooterComponent from './components/navigation/FooterComponent.vue'
import type { NConfigProvider } from 'naive-ui'
import themeOverrides from './theme/theme'
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <NavbarComponent></NavbarComponent>
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
  </n-config-provider>
</template>

```

### Folder Component

folder src/components tempat menyimpan component yang telah dibuat. Bisa mengcopy component yang ada di sini.

```sh

├── src/
│   └── components/
│       ├── navigations/
│           ├── header/
│           │    ├── HeaderSdi.vue
│           │    └── HeaderSdi.stories.ts


```

### Cara memakai

- copy file .css pada project
  - color.css
  - components.css
  - main.css
- copy theme/themeOverrides.ts pada project
- import **_main.css_** pada main.ts

  ```ts
  import '@/assets/main.css'
  ```

- implement themeOverride.ts

  ```ts
  <script setup lang="ts">
  import type { NConfigProvider } from 'naive-ui'
  import themeOverrides from './theme/theme'
  </script>

  <template>
    <n-config-provider :theme-overrides="themeOverrides">
      <!-- component atau router view  -->
    </n-config-provider>
  </template>

  ```

- copy dan gunakan component yang ingin dipakai

### Cara contribute

Jika ada component yang dibutuhkan dan ternyata belum ada kamu bisa contribute dengan cara buat componentnya suapaya bisa dipakai yang lain juga.

- buat component & storiesnya di folder src/components
- styling dilakukan pada file .css di folder src/assets
- jika perlu menambahkan menambahkan/edit sesuatu pada tema silakan edit src/theme/themeOverrides.ts
- update list component yang sudah dibuat pada README.md

### List Component Tersedia

| Component           | Status  |
| ------------------- | ------- |
| Header              | ok      |
| Footer              | ok      |
| Hero                | ok      |
| Tabs                | ok      |
| Search              | ok      |
| Button Selengkapnya | ok      |
| Card                | ongoing |

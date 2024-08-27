import naive from 'naive-ui'
import { createApp } from 'vue'
import App from './App.vue'
import '@vicons/ionicons5'

import 'src/assets/main.css'

const app = createApp(App)

app.use(naive)

app.mount('#app')

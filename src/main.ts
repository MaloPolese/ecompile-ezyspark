import { createApp } from 'vue'
import Root from './Root.vue'
import router from './router'

import './assets/main.css'

const app = createApp(Root)

app.use(router)

app.mount('#app')

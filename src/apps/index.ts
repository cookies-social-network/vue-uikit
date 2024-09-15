import { vMaska } from 'maska/vue'
import { createApp } from 'vue'

import App from '#apps/App.vue'
import router from '#apps/router'

import '#apps/styles/index.scss'

const app = createApp(App)

app.use(router)

app.directive('maska', vMaska)

export { app }

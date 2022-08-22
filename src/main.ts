import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'lib-flexible/flexible' //移动端适配
import "./assets/css/normalize.css"

import router from './router'
import App from './App.vue'

const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
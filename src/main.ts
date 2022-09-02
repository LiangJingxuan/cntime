import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Lazyload } from "vant"

import 'lib-flexible/flexible' //移动端适配
import "./assets/css/normalize.css"

import App from './App.vue'
import router from './router'

const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
  .use(Lazyload)
  .mount('#app')
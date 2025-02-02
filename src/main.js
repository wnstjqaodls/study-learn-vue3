import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.provide('app-message', 'app message 입니다.')
app.config.globalProperties.msg = 'global message 입니다.'
app.mount('#app');


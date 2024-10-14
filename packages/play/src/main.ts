import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HzElement from "hz-element"
const app = createApp(App)
app.use(HzElement)
    .mount('#app')

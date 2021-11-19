
import '../css/app.css'
import './bootstrap.js';

import { createApp } from "vue";

import App from './views/app.vue'

const app = createApp(App);

app.mount("#app");
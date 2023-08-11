import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
// import plugin from "@/components/plugins/plugin"
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";


createApp(App).use(router, axios, VueAxios).mount('#app');

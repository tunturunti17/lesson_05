import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";


createApp(App).use(store).use(router, axios, VueAxios).mount('#app');

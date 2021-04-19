import Vue from "vue";
import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);
app.use(router);
Vue.prototype.$http = axios;
app.mount("#app");

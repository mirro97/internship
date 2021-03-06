import { createApp } from "vue";
import { router } from "./router";
import Vuex from "vuex";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(router);
app.use(Vuex);
app.use(VueAxios, axios);
app.mount("#app");

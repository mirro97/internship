import Vue from "vue";
import VueRouter from "vue-router";

import { createWebHistory, createRouter } from "vue-router";
import mBoard from "../contents/mBoard.vue";
import mMain from "../contents/mMain.vue";

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: mMain
  },
  {
    path: "/board",
    name: "board",
    component: mBoard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

Vue.use(VueRouter);

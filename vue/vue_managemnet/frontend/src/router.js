import { createWebHistory, createRouter } from "vue-router";
import mBoard from "./components/mBoard.vue";
import main from "./components/Main.vue";
import test from "./components/mMain.vue";
import mUserList from "./components/mUserList.vue";
import login from "./components/LoginPage.vue";

import ftest from "./components/Ftest.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: login
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/main",
    name: "main",
    component: main,
    children: [
      { path: "test", component: test },
      { path: "/main/:boardType", component: mBoard },
      { path: "userList", component: mUserList }
    ]
  },
  {
    path: "/ftest",
    name: "ftest",
    component: ftest
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

import { createWebHistory, createRouter } from "vue-router";
import mBoard from "./contents/mBoard.vue";
import main from "./contents/Main.vue";
import test from "./contents/mMain.vue";
import mUserList from "./contents/mUserList.vue";
import login from "./contents/LoginPage.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/main",
    name: "main",
    component: main
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
  {
    path: "/board",
    name: "board",
    component: mBoard
  },
  {
    path: "/userList",
    name: "userList",
    component: mUserList
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

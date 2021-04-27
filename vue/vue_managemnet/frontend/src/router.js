import { createWebHistory, createRouter } from "vue-router";
import mBoard from "./components/mBoard.vue";
import main from "./components/Main.vue";
import test from "./components/mMain.vue";
import mUserList from "./components/mUserList_test.vue";
import login from "./components/LoginPage.vue";

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
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

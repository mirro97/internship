import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // 주소(url)에서 #(해시) 값을 없애줌
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      // path: url 에 대한 정보(url 주소)
      path: "/news",
      // component: url 주소로 갔을 때 표시될 컴포넌트(=페이지)
      name: "news",
      component: createListView("NewsView")
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView")
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});

import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pickedPos: "top-right",
    pickedType: "",
    pickedTrans: "",
    title: "타이틀을 입력해주세요",
    descrition: "내용을 입력해주세요",
    timeOut: 1000,
    toastBoxColor: "#fff"
  },
  mutations
});

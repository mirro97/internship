import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

// vuex : 상태관리 도구
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    user: {},
    askInfo: []
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    }
  },
  mutations,
  actions
});

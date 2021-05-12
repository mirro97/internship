import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index";

Vue.use(Vuex);

// vuex : 상태관리 도구
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: []
  },
  getters: {
    fetchedAsk(state) {
      return state.asks;
    }
  },
  mutations: {
    SET_NEWS(state, newsData) {
      state.news = newsData;
    },
    SET_JOBS(state, jobsData) {
      state.jobs = jobsData;
    },
    SET_ASKS(state, asksData) {
      state.asks = asksData;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit("SET_NEWS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit("SET_JOBS", data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_ASKS({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit("SET_ASKS", data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});

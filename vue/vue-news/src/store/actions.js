import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList
} from "../api/index";

export default {
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },

  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch {
      console.log(error);
    }
  },

  async FETCH_ASKS({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASKS", data);
    return response;
  },

  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASKINFO({ commit }, askId) {
    return fetchAskInfo(askId)
      .then(({ data }) => {
        commit("SET_ASKINFO", data);
      })
      .catch(error => {
        console.log(error);
      });
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit("SET_LIST", response.data);
      return response;
    } catch {
      console.log(error);
    }
  }
};

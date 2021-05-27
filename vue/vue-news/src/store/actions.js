import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo,
  fetchList
} from "../api/index";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },

  //async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },

  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASKS({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit("SET_ASKS", data);
      })
      .catch(error => {
        console.log(error);
      });
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
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

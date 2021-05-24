import { fetchUserInfo, fetchAskInfo, fetchList } from "../api/index";

export default {
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASKINFO({ commit }, askId) {
    fetchAskInfo(askId)
      .then(({ data }) => {
        commit("SET_ASKINFO", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        commit("SET_LIST", data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default {
  SET_NEWS(state, newsData) {
    state.news = newsData;
  },
  SET_JOBS(state, jobsData) {
    state.jobs = jobsData;
  },
  SET_ASKS(state, asksData) {
    state.asks = asksData;
  },
  SET_USER(state, userData) {
    state.user = userData;
  },
  SET_ASKINFO(state, askInfoData) {
    state.askInfo = askInfoData;
  }
};

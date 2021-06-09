export default {
  SET_TITLE(state, title) {
    state.title = title;
  },
  SET_DESCRIPTION(state, description) {
    state.description = description;
  },
  SET_TIMEOUT(state, timeOut) {
    state.timeOut = timeOut;
  },
  SET_BOXCOLOR(state, toastBoxColor) {
    state.toastBoxColor = toastBoxColor;
  },
  SET_POSITION(state, pickedPos) {
    state.pickedPos = pickedPos;
  },
  SET_TYPE(state, pickedType) {
    state.pickedType = pickedType;
  },
  SET_TRANSITION(state, pickedTrans) {
    state.pickedTrans = pickedTrans;
  }
};

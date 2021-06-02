<template>
  <div id="app">
    <Header></Header>
    <ToastView> </ToastView>
  </div>
</template>

<script>
import Header from "./components/Header";
import ToastView from "./views/ToastView";
export default {
  components: {
    Header,
    ToastView
  }
};
</script>

<style>
@import url("../public/font/font.css");

* {
  font-family: "NanumSquareRound", sans-serif;
}

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #343a40;
}
</style>

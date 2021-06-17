<template>
  <div id="app">
    <Header></Header>
    <ToastSetting> </ToastSetting>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import ToastSetting from "./views/ToastSetting";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    ToastSetting,
    Footer
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
  font-size: 14px;
}
</style>

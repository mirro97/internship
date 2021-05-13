<template>
  <div id="app">
    <!-- url 에 따라 화면에 표시되는 페이지가 달라진다 -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  components: {
    ToolBar
  }
};
</script>

<style>
@import url("../public/font/font.css");

* {
  font-family: "NanumSquareRound", sans-serif;
}
body {
  padding: 0;
  margin: 0;
}
</style>

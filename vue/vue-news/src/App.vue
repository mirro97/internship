<template>
  <div id="app">
    <!-- url 에 따라 화면에 표시되는 페이지가 달라진다 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
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
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #343a40;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: #343a40;
  text-decoration: none;
}

a:hover {
  color: #f59f00;
  text-decoration: underline;
}

/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

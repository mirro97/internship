<template>
  <div id="app">
    <!-- url 에 따라 화면에 표시되는 페이지가 달라진다 -->
    <tool-bar></tool-bar>
    <span>news</span>
    <span>jobs</span>
    <span>ask</span>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

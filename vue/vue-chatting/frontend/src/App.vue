<template>
  <div id="app">
    <Header></Header>
    <Navigator></Navigator>
    <Chatting></Chatting>
    <Footer></Footer>
  </div>
</template>

<script>
import Chatting from "./views/ChattingVer2.vue";
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Chatting,
    Header,
    Navigator,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
* {
  box-sizing: border-box;
  color: #fff;
  margin: 0px;
  padding: 0px;
  font-family: "Noto Sans KR", sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #212529;
}

ul {
  list-style: none;
}

input {
  border: none;
  color: #495057;
}
</style>

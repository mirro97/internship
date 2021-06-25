<template>
  <div id="app">
    <chatting></chatting>
  </div>
</template>

<script>
import chatting from "./views/Chatting.vue";

export default {
  name: "App",
  components: {
    chatting
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
* {
  box-sizing: border-box;
  color: #495057;
  margin: 0px;
  padding: 0px;
  font-family: "Noto Sans KR", sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #fff;
}

ul {
  list-style: none;
}

input {
  border: none;
}
</style>

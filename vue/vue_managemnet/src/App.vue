<template>
  <mHeader></mHeader>
  <mNavigation></mNavigation>
</template>

<script>
import mHeader from "./components/mHeader.vue";
import mNavigation from "./components/mNavigation.vue";
import mMain from "./contents/mMainPage.vue";
export default {
  name: "App",
  components: {
    mHeader: mHeader,
    mNavigation: mNavigation
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
</style>

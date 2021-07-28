<template>
  <div>
    <main-page />
  </div>
</template>

<script>
import MainPage from '~/components/MainPage.vue'
export default {
  components: { MainPage },
}
</script>

<style>
@import url('../assets/css/fonts.css');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: apple;
}

a,
span {
  display: block;
}

button {
  font-family: apple;
}
</style>

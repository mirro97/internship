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
  color: #333;
}

h1,
h2,
h3,
a,
span {
  display: block;
}

ul {
  list-style: none;
}

button {
  font-family: apple;
}
</style>

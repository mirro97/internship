<template>
  <header>
    <h1 class="main_title">
      <a href="#">공길이 관리자페이지</a>
    </h1>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #15a58d;
  box-shadow: 0px 0px 6px 0px rgba(50, 50, 50, 0.8);
  height: 49px;
}

.main_title {
  display: block;
  font-size: 20px;
  padding-left: 20px;
}

.main_title a {
  color: #fff;
  height: 49px;
  line-height: 49px;
}
</style>

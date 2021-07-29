<template>
  <div class="banner-center">
    <div class="banner-container">
      <img class="banner" src="../assets/img/slideImg1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.banner-center {
  display: flex;
  justify-content: center;
  padding-top: 80px;
}
.banner-container {
  height: 500px;
  width: 100%;
}

.banner {
  object-fit: cover;
  width: 100%;
  height: 500px;
}
</style>

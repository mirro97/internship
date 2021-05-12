<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: #fff;
  background-color: #339af0;
  display: flex;
  padding: 8px;
}

.header a {
  text-decoration: none;
  color: #fff;
}

.header a:focus {
  color: #d0ebff;
}
</style>

<template>
  <header>
    <h1>this is common Header in component</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  border: 1px solid #e5e5e5;
}
h1 {
  font-size: 22px;
}
</style>

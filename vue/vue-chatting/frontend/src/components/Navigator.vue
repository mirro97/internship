<template>
  <div class="nav">
    <ul class="icon-list">
      <li class="icon">
        <i class="fas fa-code"></i>
      </li>
      <li class="icon">
        <i class="fas fa-database"></i>
      </li>
      <li class="icon">
        <i class="fas fa-layer-group"></i>
      </li>
      <li class="icon">
        <i class="fas fa-bug"></i>
      </li>
      <li class="icon">
        <i class="fas fa-eye"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.nav {
  background-color: #495057;
  height: 100vh;
  padding: 10px 15px;
  position: fixed;
  top: 50px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  margin-bottom: 5px;
}

.fas,
.far {
  font-size: 24px;
  color: #fff;
}
</style>

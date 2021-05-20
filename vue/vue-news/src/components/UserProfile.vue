<template>
  <div class="user-body">
    <div class="user-container">
      <div class="user-img">
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <div class="user-id">
          {{ info.id }}
        </div>
        <div class="user-created">
          {{ info.created }}
        </div>
        <p class="divide">
          about
        </p>
        <div class="user-about" v-html="info.about"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
};
</script>

<style scoped>
.user-body {
  padding: 10px 80px;
  display: flex;
  justify-content: center;
}
.user-container {
  /* background-color: #edf2ff; */
  width: 680px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dee2e6;
  border-radius: 16px;
  padding: 0 20px 10px;
}

.user-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 8px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #dee2e6;
  margin-top: 20px;
}

.fa-user {
  font-size: 2.5em;
}

.user-description {
  text-align: center;
}

.user-id {
  margin-top: 10px;
}

.user-created {
  font-size: 12px;
}

.divide {
  /* text-align: left; */
  padding-top: 10px;
  font-size: 17px;
  border-top: 1.8px solid #fab005;
}

.user-about {
  text-align: left;
}
</style>

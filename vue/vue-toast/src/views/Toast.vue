<template>
  <div class="toastMsg" :style="{ background: getContents.toastBoxColor }">
    <div class="content-container">
      <div class="content">
        <div class="title">
          {{ getContents.title }}
        </div>
        <div class="description">
          {{ getContents.description }}
        </div>
      </div>
      <i class="fas fa-times"></i>
    </div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  computed: {
    getContents() {
      return this.$store.state;
    }
  }
};
</script>

<style scoped>
.toastMsg {
  width: 300px;
  margin: 15px;
  padding: 10px 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
}

.content-container {
  display: flex;
  justify-content: space-between;
}

.title {
  margin-bottom: 5px;
}

.description {
  font-size: 14px;
  margin-bottom: 5px;
}

.loading {
  width: 100%;
  height: 5px;
  background: -webkit-linear-gradient(
    -152deg,
    rgb(248, 211, 188),
    rgb(155, 205, 255)
  );
  background: linear-gradient(-152deg, rgb(248, 211, 188), rgb(155, 205, 255));
}
</style>

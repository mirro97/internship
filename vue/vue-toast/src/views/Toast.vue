<template>
  <div
    class="toastMsg"
    :class="options.type"
    :style="{
      background: options.toastBoxColor
    }"
    v-if="toast_is_open === true"
  >
    <div class="content-container">
      <div class="content">
        <div class="icon" v-if="options.type === 'info'">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="icon" v-if="options.type === 'warning'">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <div class="icon" v-if="options.type === 'success'">
          <i class="fas fa-thumbs-up"></i>
        </div>
        <div class="icon" v-if="options.type === 'danger'">
          <i class="fas fa-skull-crossbones"></i>
        </div>
        <div class="title">
          {{ options.title }}
        </div>
        <div class="description">
          {{ options.description }}
        </div>
      </div>
      <i class="fas fa-times delete" @click="toast_is_open = false"></i>
    </div>
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  props: {
    options: Object
  },
  data() {
    return {
      toast_is_open: true
    };
  }
};
</script>

<style scoped>
.toastMsg {
  width: 300px;
  margin: 10px;
  padding: 10px 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);

  pointer-events: auto;
}

.content-container {
  display: flex;
  justify-content: space-between;
}

.icon {
  font-size: 20px;
  display: inline-block;
  margin-right: 10px;
}

.title {
  display: inline-block;
  margin-bottom: 5px;
}

.description {
  font-size: 14px;
  margin-bottom: 8px;
}

.loading {
  width: 100%;
  height: 6px;
}

/* type css */
.default {
  background-color: #fff;
}

.default .loading {
  background: -webkit-linear-gradient(
    -152deg,
    rgb(248, 211, 188),
    rgb(155, 205, 255)
  );
  background: linear-gradient(-152deg, rgb(248, 211, 188), rgb(155, 205, 255));
}

.info {
  color: #fff;
  background-color: #339af0;
}

.info .loading {
  background-color: #d0ebff;
}

.warning {
  background-color: #fcc419;
}

.warning .loading {
  background-color: #ffec99;
}

.success {
  color: #fff;
  background-color: #40c057;
}

.success .loading {
  background-color: #d3f9d8;
}

.danger {
  color: #fff;
  background-color: #f03e3e;
}

.danger .loading {
  background-color: #ffc9c9;
}

/* transition css */
</style>

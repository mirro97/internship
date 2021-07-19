<template>
  <transition name="toast">
    <div class="alert-leave">
      <div>{{ leaveName }} 님이 떠나셨습니다</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: { leaveName: String }
};
</script>

<style scoped>
.alert-leave {
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 20px;
  margin-right: 12px;
  padding: 10px 20px;
  background-color: #32b674;
  border-radius: 6px;
  -webkit-box-shadow: 0px 3px 9px 2px rgba(29, 29, 29, 0.39);
  box-shadow: 0px 3px 9px 2px rgba(29, 29, 29, 0.39);
}

/* transition css */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s;
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
}
</style>

<template>
  <transition :name="setTransition()" type="animation" appear>
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
      <transition
        name="pgBar"
        type="animation"
        :duration="progressBar()"
        appear
      >
        <div class="progress-bar" :id="tid"></div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    options: Object
  },
  data() {
    return {
      toast_is_open: true,
      transitionList: {
        "top-left": {
          bounce: "bounceLeft",
          zoom: "zoomIn",
          slide: "slideLeft"
        },
        "top-center": {
          bounce: "bounceDown",
          zoom: "zoomIn",
          slide: "slideDown"
        },
        "top-right": {
          bounce: "bounceRight",
          zoom: "zoomIn",
          slide: "slideRight"
        },
        "bottom-left": {
          bounce: "bounceLeft",
          zoom: "zoomIn",
          slide: "slideLeft"
        },
        "bottom-center": {
          bounce: "bounceUp",
          zoom: "zoomIn",
          slide: "slideUp"
        },
        "bottom-right": {
          bounce: "bounceRight",
          zoom: "zoomIn",
          slide: "slideRight"
        }
      },
      tid: null
    };
  },
  methods: {
    setTransition() {
      this.tid = new Date().getTime();
      this.closeToast();

      var transList = this.transitionList;
      var curPos = this.options.position;
      var curTrans = this.options.transition;
      for (var position in transList) {
        if (position === curPos) {
          for (var transitionPos in transList[position]) {
            if (transitionPos === curTrans) {
              return transList[position][transitionPos];
            }
          }
        }
      }
    },
    closeToast() {
      const setTime = this.options.timeOut;

      setTimeout(() => {
        this.toast_is_open = false;
      }, setTime * 1000);
    },
    progressBar() {
      setTimeout(() => {
        var pgBar = document.getElementById(this.tid);

        pgBar.style["animation-duration"] = `${this.options.timeOut}s`;
      }, 100);
      const setTime = this.options.timeOut;
      return setTime * 1000;
    }
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

.progress-bar {
  width: 100%;
  height: 6px;
}

/* type css */
.default {
  background-color: #fff;
}

.default .progress-bar {
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

.info .progress-bar {
  background-color: #d0ebff;
}

.warning {
  background-color: #fcc419;
}

.warning .progress-bar {
  background-color: #ffec99;
}

.success {
  color: #fff;
  background-color: #40c057;
}

.success .progress-bar {
  background-color: #d3f9d8;
}

.danger {
  color: #fff;
  background-color: #f03e3e;
}

.danger .progress-bar {
  background-color: #ffc9c9;
}

/* transition css */
/* bounce */
.bounceLeft-enter-active {
  animation: bounce-left 0.35s;
}

.bounceLeft-leave-active {
  animation: bounce-left 0.35s reverse;
}
@keyframes bounce-left {
  0% {
    transform: translate(-40px, 0);
  }
  40% {
    transform: translate(15px, 0);
  }
  58% {
    transform: translate(1px, 0);
  }
  95% {
    transform: translate(10px, 0);
  }
  100% {
    transform: none;
  }
}

.bounceRight-enter-active {
  animation: bounce-right 0.35s;
}

.bounceRight-leave-active {
  animation: bounce-right 0.35s reverse;
}
@keyframes bounce-right {
  0% {
    transform: translate(40px, 0);
  }
  40% {
    transform: translate(-15px, 0);
  }
  58% {
    transform: translate(-1px, 0);
  }
  95% {
    transform: translate(-10px, 0);
  }
  100% {
    transform: none;
  }
}

.bounceDown-enter-active {
  animation: bounce-down 0.4s;
}

.bounceDown-leave-active {
  animation: bounce-down 0.4s reverse;
}
@keyframes bounce-down {
  60% {
    transform: translate(0, 10px);
  }
  75% {
    transform: translate(0, 3px);
  }
  92% {
    transform: translate(0, 7px);
  }
  100% {
    transform: none;
  }
}

.bounceUp-enter-active {
  animation: bounce-up 0.4s;
}

.bounceUp-leave-active {
  animation: bounce-up 0.4s reverse;
}
@keyframes bounce-up {
  60% {
    transform: translate(0, -10px);
  }
  75% {
    transform: translate(0, -3px);
  }
  92% {
    transform: translate(0, -7px);
  }
  100% {
    transform: none;
  }
}

/* zoomIn */
.zoomIn-enter-active {
  animation: zoom-in 0.3s;
}

.zoomIn-leave-active {
  animation: zoom-in 0.3s reverse;
}
@keyframes zoom-in {
  0% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}

/* slide */
.slideLeft-enter-active {
  animation: slide-left 0.35s;
}

.slideLeft-leave-active {
  animation: slide-left 0.35s reverse;
}

@keyframes slide-left {
  0% {
    transform: translate(-200px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.slideRight-enter-active {
  animation: slide-right 0.35s;
}

.slideRight-leave-active {
  animation: slide-right 0.35s reverse;
}

@keyframes slide-right {
  0% {
    transform: translate(200px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.slideDown-enter-active {
  animation: slide-down 0.35s;
}

.slideDown-leave-active {
  animation: slide-down 0.35s reverse;
}

@keyframes slide-down {
  0% {
    transform: translate(0, -200px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.slideUp-enter-active {
  animation: slide-up 0.35s;
}

.slideUp-leave-active {
  animation: slide-up 0.35s reverse;
}

@keyframes slide-up {
  0% {
    transform: translate(0, 200px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.pgBar-enter-active {
  animation-name: progress;
  /* animation-duration: 2s; */
}

@keyframes progress {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>

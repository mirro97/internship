<template>
  <div class="all-notice">
    <transition name="full-notice" mode="out-in">
      <div class="full-notice common-notice" v-if="noticeIsOpen">
        <div class="n-wrapper">
          <i class="far fa-hand-paper fas"></i>
          <p class="notice-description">
            {{ notice }}
          </p>
        </div>
        <i class="fas fa-chevron-down" @click="turnNotice()" key="on"></i>
      </div>
      <div
        class="mini-notice common-notice"
        v-if="!noticeIsOpen"
        key="off"
        @click="turnNotice()"
      >
        <i class="far fa-hand-rock fas"></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    notice: String
  },
  data() {
    return {
      noticeIsOpen: true
    };
  },
  methods: {
    turnNotice() {
      this.noticeIsOpen = !this.noticeIsOpen;
    }
  }
};
</script>

<style>
.all-notice {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 95%;
  max-width: 950px;
}

.common-notice {
  background: #fff;
  padding: 10px;
  opacity: 0.85;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(86, 86, 86, 0.8);
  box-shadow: 0px 1px 2px 0px rgba(86, 86, 86, 0.8);
}

.full-notice {
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
}

.mini-notice {
  float: right;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.n-wrapper {
  display: flex;
}

.fas {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #495057;
}

.far {
  font-weight: 400;
  font-size: 22px;
}

.fa-chevron-down {
  color: #868e96;
}

.fa-hand-paper {
  margin-right: 10px;
}

.fa-chevron-down:hover {
  color: #495057;
}

.notice-description {
  color: #212529;
}

/* transition css */
.full-notice-enter-active {
  transition: all 0.3s ease;
}

.full-notice-leave-active {
  transition: all 0.3s ease;
}

.full-notice-enter,
.full-notice-leave-to {
  transform: translate(0, -10px);
  opacity: 0;
}
</style>

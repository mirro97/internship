<template>
  <li v-bind:class="[socketId === content.socketId ? 'sent' : 'received']">
    <i class="fas fa-user"></i>
    <div class="context">
      <div class="user-msg">
        <span class="user-name">{{ content.name }}</span>
        <div class="msg-detail">
          <span class="message" @dblclick="makeNotice" @contextmenu.prevent>
            {{ content.msg }}
          </span>
          <span class="time">{{ content.time }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    content: Object, // 백엔드 상의 socketId: content.socketId
    curName: String,
    socketId: String // 프론트 상의 socketId
  },
  data() {},
  methods: {
    makeNotice() {
      this.$emit("notice", this.content.msg);
      this.$emit("alert", true);
    }
  }
};
</script>

<style scoped>
.fa-user {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 1px solid #ced4da;
  overflow: hidden;
  width: 40px;
  height: 40px;
  font-size: 30px;
  border-radius: 15px;
  margin-top: 3px;
}

.user-msg {
  display: flex;
  flex-direction: column;
}

.user-name {
  color: #75fda6;
  font-size: 13px;
  margin-bottom: 5px;
}

.context {
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
}

.msg-detail {
  display: flex;
  align-items: flex-end;
}

.message {
  width: fit-content;
  max-width: 320px;
  background-color: #fff;
  color: #212529;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 2px -1px #868e96;
  box-shadow: 0px 1px 2px -1px #868e96;
  word-break: break-all;
}

.sent {
  flex-direction: row-reverse;
}

.sent .msg-detail {
  flex-direction: row-reverse;
}

.sent .user-msg {
  align-items: flex-end;
}

.sent .message {
  background-color: #fcc419;
}

.sent .time {
  margin-right: 10px;
  margin-left: 0;
}

.sent .context {
  flex-direction: row-reverse;
  margin-left: 0;
  margin-right: 10px;
}

.time {
  margin-left: 8px;
  font-size: 12px;
}
</style>

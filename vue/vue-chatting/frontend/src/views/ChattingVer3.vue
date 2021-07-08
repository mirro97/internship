<template>
  <div class="chat-container">
    <Notice
      v-if="alertIsOpen"
      @noticeChk="checkNoticeState"
      @alert="alert"
    ></Notice>
    <div class="wrapper">
      <div class="chatname-container">
        <label class="chatname" for="nickname">대화명</label>
        <input
          class="chatname-input"
          type="text"
          id="nickname"
          v-model="nickName"
        />
      </div>

      <ul class="display-container" ref="container">
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

        <li class="alert-join">대화에 참여했습니다</li>
        <Message
          v-for="message in messages"
          :key="message.id"
          :content="message.data"
          :curName="nickName"
          @alert="alert"
          @notice="noticeDes"
        ></Message>
      </ul>
      <div class="input-container">
        <input
          type="text"
          class="chatting-input"
          v-model="chatInput"
          @keyup.enter="sendMessage()"
        />
        <button class="send-button" @click="sendMessage()">전송</button>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import Message from "../components/Message.vue";
import Notice from "../components/NoticePage.vue";
export default {
  components: { Message, Notice },
  data() {
    return {
      socket: io(),
      messages: [],
      nickName: "",
      noticeIsOpen: true,
      alertIsOpen: false,
      notice: "대화 더블클릭시 공지사항에 올릴수 있음 🎈",
      waitNotice: ""
    };
  },
  created() {
    // 채팅 받을때
    this.socket.on("chatting", data => {
      var contents = Object.assign({}, data);
      this.messages.push({ data: contents });
    });
  },
  updated() {
    this.$refs.container.scrollTo(0, this.$refs.container.scrollHeight);
  },
  methods: {
    sendMessage() {
      const param = {
        name: this.nickName,
        msg: this.chatInput
      };
      this.socket.emit("chatting", param);
      this.chatInput = "";
    },
    alert(alertNotice) {
      this.alertIsOpen = alertNotice;
    },
    noticeDes(content) {
      this.waitNotice = content;
    },
    checkNoticeState(state) {
      this.alertIsOpen = false;
      if (state) {
        this.notice = this.waitNotice;
      }
    },
    turnNotice() {
      this.noticeIsOpen = !this.noticeIsOpen;
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  margin-bottom: 10px;
}

.chat-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chatname-container {
  background-color: #343a40;
  width: 100%;
  padding: 6px 4px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.chatname {
  color: #fdd475;
  font-size: 14px;
  margin-left: 10px;
}

.chatname-input {
  height: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 14px;
  outline: none;
}

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

.wrapper {
  background-color: #181a1d;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 20px 0;
}

.display-container {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #adb5bd transparent;
}

.display-container::-webkit-scrollbar {
  width: 8px;
}

.display-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #adb5bd;
  opacity: 0.7;
}

.profile {
  display: flex;
  flex-direction: column;
}

.input-container {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 3px;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.chatting-input {
  height: 100%;
  width: 100%;
  border-radius: 4px;
  outline: none;
  padding: 0 0 0 10px;
}

.send-button {
  width: 60px;
  border: none;
  border-radius: 4px;
  background-color: #339af0;
  cursor: pointer;
}

.send-button:hover {
  background-color: #228be6;
  transition: 0.4s ease;
}

.send-button:focus {
  border: 1px solid #868e96;
}

.alert-join {
  display: block;
  text-align: center;
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

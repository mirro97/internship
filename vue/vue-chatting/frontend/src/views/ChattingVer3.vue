<template>
  <div class="chat-container">
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
        <li class="alert-join">대화에 참여했습니다</li>
        <Message
          v-for="message in messages"
          :key="message.id"
          :content="message.data"
          :curName="nickName"
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
export default {
  components: { Message },
  data() {
    return {
      socket: io(),
      messages: [],
      nickName: ""
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
    // var container = this.$refs["display-container"];
    // container.scrollTo(0, container.scrollHeight);

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
    }
  }
};
</script>

<style>
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
  height: 48px;
  padding: 4px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
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

.alert-container {
}

.wrapper {
  background-color: #181a1d;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 50px 0 20px 0;
}

.display-container {
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
</style>

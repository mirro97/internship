<template>
  <div class="chat-container">
    <div class="wrapper">
      <div class="chatname-container">
        <label class="chatname" for="nickname">대화명</label>
        <input class="chatname-input" type="text" id="nickname" />
      </div>
      <div class="display-container">
        <ul class="chatting-list"></ul>
      </div>
      <div class="input-container">
        <input type="text" class="chatting-input" />
        <button class="send-button">전송</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
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
  background-color: #c0dbf0;
  height: 48px;
  padding: 4px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.chatname {
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

.wrapper {
  -webkit-box-shadow: 0px 0px 31px -14px #868e96;
  box-shadow: 0px 0px 31px -14px #868e96;
  background-color: #e7f5ff;
  width: 500px;
  height: 650px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.display-container {
  height: 100%;
  padding: 10px 18px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #ced4da transparent;
}

.display-container::-webkit-scrollbar {
  width: 8px;
}

.display-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #ced4da;
}

.profile {
  display: flex;
  flex-direction: column;
}

.fa-user {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 36px;
  height: 36px;
  font-size: 25px;
  border-radius: 12px;
  border: 1px solid #ced4da;
  background-color: #fff;
  overflow: hidden;
}

.user-name {
  font-size: 12px;
}

.context {
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
}

.message {
  max-width: 320px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 2px -1px #868e96;
  box-shadow: 0px 1px 2px -1px #868e96;
  word-break: break-all;
}

.sent {
  flex-direction: row-reverse;
}

.sent .message {
  background-color: #ecfcc2;
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
  background-color: #c5ec5b;
  cursor: pointer;
}

.send-button:hover {
  background-color: #b7da59;
  transition: 0.4s ease;
}

.send-button:focus {
  border: 1px solid #868e96;
}
</style>

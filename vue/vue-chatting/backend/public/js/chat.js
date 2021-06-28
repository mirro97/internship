"use strict";
const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
  chatInput.value = "";
}

sendButton.addEventListener("click", send);

socket.on("chatting", (data) => {
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);

  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "received");
    const dom = `<i class="fas fa-user"></i>
                 <div class="context">
                   <div class="user-msg">
                     <span class="user-name">${this.name}</span>
                     <div class="msg-detail">
                     <span class="message">
                     ${this.msg}
                     </span>
                     <span class="time">${this.time}</span>
                     </div>
                   </div>
                 </div>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}

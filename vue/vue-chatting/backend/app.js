const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;
const moment = require("moment");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () =>
  console.log(`server is running ${PORT} GOOD`)
);
const socketIo = require("socket.io");

const io = socketIo(server);
const socketList = [];

io.on("connection", (socket) => {
  console.log("someone join");
  socketList.push(socket);
  console.log("현재 사람들 id: ");
  socketList.forEach(function (item, i) {
    console.log(item.id);
  });

  socket.on("chatting", (data) => {
    socketList.forEach(function (item, i) {
      if (item === socket) {
        const { name, msg } = data;
        const socketId = socket.id;
        io.emit("chatting", {
          name,
          msg,
          time: moment(new Date()).format("h: mm A"),
          socketId,
        });
      }
    });
  });

  socket.on("notice", (data) => {
    console.log("공지사항: " + data);
    io.emit("notice", data);
  });

  socket.on("disconnect", function () {
    console.log(socket.id + " 님 께서 나가셨습니다");
    socketList.splice(socketList.indexOf(socket), 1);

    io.emit("alert", socket.id); // 나간사람 id

    console.log("남은 사람들 id: ");
    socketList.forEach(function (item, i) {
      console.log(item.id);
    });
  });
});

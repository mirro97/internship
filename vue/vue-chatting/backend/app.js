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

io.on("connection", (socket) => {
  console.log("연결이 되었음");

  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h: mm A"),
    });
  });
});

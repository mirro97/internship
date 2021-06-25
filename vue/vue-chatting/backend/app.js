const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const moment = require("moment");

const server = app.listen(PORT, () => console.log(`server is running ${PORT}`));
const socketIo = require("socket.io");

const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h: ss A"),
    });
  });
});

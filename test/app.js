const express = require("express");

const fs = require("fs");
const httpPort = 8080;
const app = express();
app.listen(httpPort);
var userInfos = [
    {id: 'a', password: 'asdf', name: 'a'},
    {id: 'a', password: 'asdf', name: 'a'},
    {id: 'a', password: 'asdf', name: 'a'},
    {id: 'a', password: 'asdf', name: 'a'},
    {id: 'a', password: 'asdf', name: 'a'},
    {id: 'a', password: 'asdf', name: 'a'}
];
app.get("/", (req, res, next) => {
  res.end("hello node.js! \n");
  //   fs.readFile(__dirname + "/test.html", "utf8", function (err, data) {
  //     res.end(data);
  //   });
});
app.post(
    
);
var server = require("http");
server
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello node.js! \n");
  })
  .listen(httpPort, "localhost");

console.log("Server is running at http://localhost:3000/");

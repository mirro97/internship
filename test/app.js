const express = require("express");

const fs = require("fs");
const httpPort = 8080;
const app = express();
app.listen(httpPort);
app.use("/", express.static(__dirname + "/public"));
app.use("/component", express.static(__dirname + "/views/component"));

app.get("/", (req, res, next) => {
  // res.end("hello node.js! \n");
  fs.readFile(
    __dirname + "/views/content/main.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/main", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/main.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/business", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/business.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.use((req, res, next) => {
  res.status(403).end();
});
// app.post();

// var server = require("http");
// server
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("hello node.js! \n");
//   })
//   .listen(httpPort, "localhost");

// console.log("Server is running at http://localhost:3000/");

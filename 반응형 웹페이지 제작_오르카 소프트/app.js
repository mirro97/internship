const express = require("express");
const app = express();
const httpPort = 8080;
app.listen(httpPort);

const fs = require("fs");

app.use("/", express.static(__dirname + "/public"));
app.use("/component", express.static(__dirname + "/views/component"));

app.get("/", (req, res, next) => {
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

app.get("/withus", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/withus.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

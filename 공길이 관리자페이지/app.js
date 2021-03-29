const express = require("express");
const app = express();
const httpPort = 3030;
app.listen(httpPort);

const fs = require("fs");

app.use(express.urlencoded());
app.use("/", express.static(__dirname + "/public"));
app.use("/component", express.static(__dirname + "/views/component"));

app.get("/", (req, res, next) => {
  console.log("test");
  fs.readFile(
    __dirname + "/views/content/loginPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/login", (req, res, next) => {
  console.log("start new project1");
  fs.readFile(
    __dirname + "/views/content/loginPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

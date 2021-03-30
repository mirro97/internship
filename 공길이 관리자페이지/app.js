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
    __dirname + "/views/content/mainPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/main", (req, res, next) => {
  console.log("test => MAIN");
  fs.readFile(
    __dirname + "/views/content/mainPage.html",
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

const userList = [
  { id: "test", pw: "1" },
  { id: "test1", pw: "2" },
  { id: "test2", pw: "3" },
];

app.post("/login2", (req, res, next) => {
  console.log("post 하러 옴");
  let request = req.body;
  let userInfo = undefined;

  console.log(request);

  userList.forEach((userData) => {
    if (userData.id === request.id && userData.pw === request.pw) {
      userInfo = userData;
      return;
    }
  });
  console.log(request);
  res.json(userInfo);
});

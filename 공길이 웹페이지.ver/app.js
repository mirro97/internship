const express = require("express");
const app = express();
const httpPort = 80;
app.listen(httpPort);

const fs = require("fs");

app.use(express.urlencoded());
app.use("/", express.static(__dirname + "/public"));
app.use("/component", express.static(__dirname + "/views/component"));

app.get("/", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/mainPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/main", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/mainPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/logIn", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/loginPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/signup", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/signupPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/enterAccount", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/enterAccount.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/signupComplete", (req, res, next) => {
  fs.readFile(
    __dirname + "/views/content/signupComplete.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

const userList = [
  { id: "test1", pw: "1", name: "강" },
  { id: "test2", pw: "1", name: "김" },
  { id: "test3", pw: "1", name: "소" },
];

// app.post("/login2", (req, res, next) => {
//   let rp = req.body;
//   let userInfo = undefined;
//   userList.forEach((v) => {
//     if (v.id == rp.userId && v.pw == rp.userPw) {
//       userInfo = v;
//       return;
//     }
//   });
//   console.log(rp);
//   if (userInfo) {
//     res.redirect("/main");
//     return;
//   }
//   res.send('<script>alert("실패"); location.href="/login";</script>');
// });

app.post("/login", (req, res, next) => {
  let rp = req.body;
  let userInfo = undefined;
  userList.forEach((v) => {
    if (v.id == rp.id && v.pw == rp.pw) {
      userInfo = v;
      return;
    }
  });
  console.log(rp);
  res.json(userInfo);
});

// const express = require("express");
// const app = express();
// const httpPort = 80;
// app.listen(httpPort);

// const fs = require("fs");

// app.use(express.urlencoded());
// app.use("/", express.static(__dirname + "/public"));
// app.use("/component", express.static(__dirname + "/views/component"));

// app.get("/", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/mainPage.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/main", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/mainPage.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/logIn", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/loginPage.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/logInSuccess", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/loginPage.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/logInSuccess", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/signupPage.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/logInSuccess", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/enterAccount.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

// app.get("/logInSuccess", (req, res, next) => {
//   fs.readFile(
//     __dirname + "/views/content/signupComplete.html",
//     "utf8",
//     function (err, data) {
//       res.end(data);
//     }
//   );
// });

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("hello world!");
});

var port = 8080;
app.listen(port, function () {
  console.log("server on! http:localhost:" + port);
});

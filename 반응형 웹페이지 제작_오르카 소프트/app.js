require("./system-config");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const httpPort = 8080;
app.listen(httpPort);

const fs = require("fs");

app.use(express.urlencoded());
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

// 이메일
app.post("/withus", async (req, res, next) => {
  let reqParams = req.body;
  await sendMail(
    reqParams["person-name"],
    reqParams["person-tel"],
    reqParams.email,
    reqParams["type-of-business"],
    reqParams["inquiry-content"]
  );
  res.redirect("/withus");
});

app.post("/sendEmail", (req, res, next) => {
  console.log(req.body);
  res.redirect("/withus");
});

var sendMail = async (name, context, email, jobType, contents) => {
  const mailConfig = {
    service: SYSTEM_CONFIG.emailAccount.service,
    host: SYSTEM_CONFIG.emailAccount.host,
    port: SYSTEM_CONFIG.emailAccount.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: SYSTEM_CONFIG.emailAccount.user,
      pass: SYSTEM_CONFIG.emailAccount.pass,
    },
  };

  let transporter = nodemailer.createTransport(mailConfig);

  let text =
    `name: ${name} \r\n` +
    `context: ${context} \r\n` +
    `email: ${email} \r\n` +
    `jobType: ${jobType} \r\n` +
    `contents: ${contents} \r\n`;

  let html = `
  <ul>
    <li>name: ${name}</li>
    <li>context: ${context}</li>
    <li>email: ${email}</li>
    <li>jobType: ${jobType}</li>
    <li>contents: ${contents}</li>
  </ul>`;
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: SYSTEM_CONFIG.emailAccount.email, // sender address
    to: SYSTEM_CONFIG.emailAccount.email, // list of receivers
    subject: "withus", // Subject line
    // text: text, // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

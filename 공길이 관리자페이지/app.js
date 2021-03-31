require("./system-config");

const path = require("path");
const appUtil = require("./common_modules/express-util");
const express = require("express");
// const app = express();

appUtil.setGlobalSession(appUtil.getDefaultMysqlSessionOption());
const app = appUtil.getBaseAppObject({
  viewEngine: "ejs",
});

const httpPort = 3030;
app.listen(httpPort);

const fs = require("fs");
const crypto = require("crypto");
const asyncHandler = require("express-async-handler");
const service = SYSTEM_CONFIG.MARIADB_SERVICE;

app.use(express.urlencoded());
app.use("/", express.static(__dirname + "/public"));
app.use("/component", express.static(__dirname + "/views/component"));

var getEncryptPassword = function (password) {
  let encryptPassword = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  return encryptPassword;
};

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
  console.log("LogIn => MAIN");
  fs.readFile(
    __dirname + "/views/content/mainPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/login", (req, res, next) => {
  console.log("Login Page");
  fs.readFile(
    __dirname + "/views/content/loginPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/boarder", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/boardPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.post(
  "/login2",
  asyncHandler(async (req, res) => {
    console.log("로그인 검사중");

    let rd = appUtil.getRequestData(req);
    let r = undefined;
    console.log(rd);
    if (!rd.id) {
      r = service.getErrorResult("아이디를 입력하세요.");
    } else if (!rd.password) {
      r = service.getErrorResult("비밀번호를 입력하세요.");
    } else {
      let encryptPassword = getEncryptPassword(rd.password);
      r = await service.login(rd.id, encryptPassword);
      console.log(r);
      if (r.oResult) {
        r.oResult.password = "";
        req.session.userInfo = r.oResult;
        console.log(req.session.userInfo);
        if (r.oResult.profileImageName && r.oResult.profileImageName != "") {
          var outputPath = path.join(
            SYSTEM_CONFIG.FILE_STORAGE_ROOT_PATH,
            "/image/",
            r.oResult.profileImageName
          );
          if (fs.existsSync(outputPath)) {
            r.oResult.imageBuffer = fs.readFileSync(outputPath, {
              encoding: "base64",
            });
          }
        }
      }
    }
    res.json(r);
    return;
  })
);

app.post(
  "/getBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;

    r = await service.getBoardList(
      rd.boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

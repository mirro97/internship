require("./system-config");

const path = require("path");
const appUtil = require("./common_modules/express-util");
const express = require("express");

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
app.use("/content", express.static(__dirname + "/views/content"));

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

app.get("/board", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/boardPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/board_news", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/board_news.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/board_freeBoard", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/board_freeBoard.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/board_study", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/board_study.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/board_schedule", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/board_schedule.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/board_studyAmount", (req, res, next) => {
  console.log("boarder Page");
  fs.readFile(
    __dirname + "/views/content/board_studyAmount.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

app.get("/user_management", (req, res, next) => {
  console.log("user Management Page");
  fs.readFile(
    __dirname + "/views/content/userPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});
/* 
res.render() ??????????????? - ejs(view ??????) ?????? ??????!
app.get(
  "/board2/:pageNumber",
  asyncHandler(async (req, res) => {
    console.log("boarder Page");

    let pageNum = req.params.pageNumber;
    if (!pageNum || pageNum < -1) {
      pageNum = 0;
    }

    // let r = undefined;

    // r = await service.getBoardList(undefined, pageNum, undefined, undefined);
    // console.log(r);
    // let strJson = encodeURIComponent(JSON.stringify(r));
    res.render(__dirname + "/views/content/boardPage.ejs", {
      pageNum: pageNum,
    });
  })
);

app.get("/page2/:pagegNumber", (req, res, next) => {
  console.log("boarder Page", req.params.pagegNumber);
  fs.readFile(
    __dirname + "/views/content/boardPage.html",
    "utf8",
    function (err, data) {
      res.end(data);
    }
  );
});

*/
app.post(
  "/login2",
  asyncHandler(async (req, res) => {
    console.log("????????? ?????????");

    let rd = appUtil.getRequestData(req);
    let r = undefined;
    console.log(rd);
    if (!rd.id) {
      r = service.getErrorResult("???????????? ???????????????.");
    } else if (!rd.password) {
      r = service.getErrorResult("??????????????? ???????????????.");
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

app.post(
  "/getNoticeBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    let boardTypeCode = "1001";
    r = await service.getBoardList(
      boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

app.post(
  "/getFreeBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    let boardTypeCode = "1002";
    r = await service.getBoardList(
      boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

app.post(
  "/getStudyBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    let boardTypeCode = "1003";
    r = await service.getBoardList(
      boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

app.post(
  "/getScheduleBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    let boardTypeCode = "1004";
    r = await service.getBoardList(
      boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

app.post(
  "/getStudyAmountBoardList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    let boardTypeCode = "1005";
    r = await service.getBoardList(
      boardTypeCode,
      rd.page,
      rd.title,
      rd.userIdx
    );
    console.log(r);
    res.json(r);
  })
);

app.post(
  "/getUserList",
  asyncHandler(async (req, res) => {
    let rd = appUtil.getRequestData(req);
    let r = undefined;
    r = await service.getCodeList();
  })
);

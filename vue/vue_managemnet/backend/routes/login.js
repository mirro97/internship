var express = require("express");
var router = express.Router();
var userList = require("../userData.json");

// 암호화
const crypto = require("crypto");
const { rejects } = require("assert");
const { token } = require("morgan");
const jwt = require("jsonwebtoken");

var getEncryptPw = function (password) {
  let encryptPw = crypto.createHash("sha512").update(password).digest("base64");
  return encryptPw;
};

router.post("/", function (req, res, next) {
  let inputUserId = req.body.userId;
  let inputUserPw = req.body.userPw;
  let jwt_secret = "Chicken";

  if (!inputUserId) {
    console.log("아이디를 입력하세요");
  } else if (!inputUserPw) {
    console.log("비밀번호를 입력하세요");
  } else {
    let userInfo = userList.find(
      (user) => user.id == inputUserId && user.pw == getEncryptPw(inputUserPw)
    );

    if (userInfo) {
      console.log("일치하는 계정발견!");
      let encryptPw = getEncryptPw(inputUserPw); // 유저가 입력한 비밀번호 암호화
      console.log("<< 받아온 id: " + inputUserId + " 받아온 pw: " + encryptPw);
      const getToken = new Promise((resolve, reject) => {
        jwt.sign(
          {
            id: inputUserId,
          },
          jwt_secret,
          { expiresIn: "7d", issuer: "NYchicken", subject: "userInfo" },
          (err, token) => {
            if (err) reject(err);
            resolve(token);
          }
        );
      });
      getToken.then((token) => {
        res.cookie("token", token);

        res.status(200).json({
          status: 200,
          message: "로그인 성공!",
          token,
        });
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "일치하는 계정정보를 찾지 못함",
      });
    }
  }
});

module.exports = router;

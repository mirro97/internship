var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", function (req, res, next) {
  let token = req.cookies.token;
  let jwt_secret = "Chicken";

  if (!token) {
    console.log("토큰이 없음!");
    res.status(400).json({
      status: 400,
      message: "토큰이 존재하지 않음",
    });
  }

  let jsonObject = jwt.verify(token, jwt_secret);
  // console.log("디코딩된 사용자 정보>>");
  // console.log(jsonObject);

  res.status(200).json({
    status: 200,
    message: "로그인 성공!",
    token,
  });

  // try {
  //   let jsonObject = jwt.verify(token, jwt_secret);
  //   console.log("디코딩된 사용자 정보>>");
  //   console.log(jsonObject);

  //   res.status(200).json({
  //     status: 200,
  //     message: "로그인 성공!",
  //     token,
  //   });
  // } catch (error) {
  //   console.log("토큰이 없음!");
  //   console.error(error);
  //   res.redirect("/");
  //   res.status(400).json({
  //     status: 400,
  //     message: "일치하는 계정정보를 찾지 못함",
  //   });
  // }
});

module.exports = router;

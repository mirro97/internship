var express = require("express");
var router = express.Router();

router.post("/api/check", function (req, res, next) {
  let token = res.cookie("token");
  let jwt_secret = "Chicken";

  if (!token) {
    res.status(400).json({
      status: 400,
      msg: "token 이 없음",
    });

    res.redirect("/");
  }

  try {
    // 토큰 체크
    jwt.verify(token, jwt_secret);

    res.status(200).json({
      status: 200,
      message: "로그인 성공!",
      token,
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");

    // res.send('<script>alert("errorr"); location.href="/"; </script>');

    // res.status(400).json({
    //   status: 400,
    //   message: "일치하는 계정정보를 찾지 못함",
    // });
    res.redir;
  }
});

module.exports = router;

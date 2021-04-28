var express = require("express");
var router = express.Router();
var userList = require("../userData.json");

router.get("/", function (req, res, next) {
  console.log("user List");
  let currPage = req.query.currentPage;
  console.log(req.query.currentPage);
  let sendData = {
    resUserList: userList.slice((currPage - 1) * 10, currPage * 10),
    maxData: userList.length,
  };

  console.log("전송할 데이터의 총 개수: " + sendData.maxData);

  res.send(sendData);
});

module.exports = router;

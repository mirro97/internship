var express = require("express");
var router = express.Router();

const database = require("../database");

router.get("/", function (req, res, next) {
  let currPage = req.query.currentPage;
  let searchName = req.query.searchName;
  let sendData;

  let userList = database.getUserList(currPage, searchName);

  sendData = {
    resUserList: userList,
    maxData: userList.length ? userList[0].totalCount : 0,
  };

  res.send(sendData);
});

module.exports = router;

var express = require("express");
var router = express.Router();
var userList = require("../userData.json");

router.get("/", function (req, res, next) {
  let currPage = req.query.currentPage;
  let searchName = req.query.searchName;
  let sendData;

  console.log("테스트");

  if (!searchName) {
    sendData = {
      resUserList: userList.slice((currPage - 1) * 10, currPage * 10),
      maxData: userList.length,
    };
  } else {
    var search = userList.filter(function (search) {
      return search.name.includes(searchName);
    });

    sendData = {
      resUserList: search.slice((currPage - 1) * 10, currPage * 10),
      maxData: search.length,
    };
  }

  res.send(sendData);
});

module.exports = router;

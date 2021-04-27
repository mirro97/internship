var express = require("express");
var router = express.Router();
var userList = require("../userData.json");

router.get("/", function (req, res, next) {
  console.log("user List");

  res.send(userList);
});

module.exports = router;

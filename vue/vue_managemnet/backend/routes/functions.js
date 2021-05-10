var express = require("express");
var router = express.Router();

const database = require("../database");

router.get("/", function (req, res, next) {
  let userIdx = Number(req.query.userIdx);
  database.deleteUser(userIdx);
  res.status(200).end();
});

module.exports = router;

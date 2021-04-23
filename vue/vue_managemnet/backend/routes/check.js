var express = require("express");
var router = express.Router();

router.get("/api/check", function (req, res, next) {
  const token = req.headers["x"];
});

module.exports = router;

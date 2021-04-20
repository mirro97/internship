// var express = require("express");
// var router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// module.exports = router;

var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = router;

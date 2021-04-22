var express = require("express");
var router = express.Router();
var userList = require("../userData.json");

// 암호화
const crypto = require("crypto");
app.use(express.urlencoded());

var getEncryptPassword = function (password) {
  let encryptPassword = crypto
    .createHash("sha512")
    .update(password)
    .digest("base64");
  return encryptPassword;
};

router.post("/", function (req, res, next) {
  let userData = res.send(userList);
});

module.exports = router;

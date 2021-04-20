var express = require("express");
var router = express.Router();
var boardList = require("../boardData.json");

router.get("/", function (req, res, next) {
  res.send(boardList);
});

router.get("/:board_type_code", function (req, res, next) {
  console.log("Login Page");
  var board_type_code = parseInt(req.params.board_type_code, 10);
  var board = boardList.filter(function (board) {
    return board.board_type_code === board_type_code;
  });

  res.send(board);
});

module.exports = router;

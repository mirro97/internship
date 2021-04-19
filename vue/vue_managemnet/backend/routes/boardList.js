var express = require("express");
var router = express.Router();
var boardList = require("../boardData.json");

router.get("/main", function (req, res, next) {
  res.send(boardList);
});

router.get("/main/:boardType", function (req, res, next) {
  var boardType = parseInt(req.params.boardType, 10);
  var board = boardList.filter(function (board) {
    return board.boardType === boardType;
  });
  res.send(board);
});

module.exports = router;

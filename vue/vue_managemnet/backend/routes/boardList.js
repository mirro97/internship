var express = require("express");
var router = express.Router();
var boardList = require("../boardData.json");

// 전체 게시판 출력
router.get("/", function (req, res, next) {
  let currPage = req.query.currentPage;
  let searchTxt = req.query.searchTitle;
  let sendData;

  // 검색어가 없을 경우
  if (!searchTxt) {
    sendData = {
      resBoardList: boardList.slice((currPage - 1) * 10, currPage * 10),
      maxData: boardList.length,
    };
  } else {
    // 검색한 결과에 맞게 필터링
    var search = boardList.filter(function (search) {
      return search.title.includes(searchTxt);
    });

    sendData = {
      resBoardList: search.slice((currPage - 1) * 10, currPage * 10),
      maxData: search.length,
    };
  }
  res.send(sendData);
});

router.get("/:board_type_code", function (req, res, next) {
  let currPage = req.query.currentPage;
  let searchTxt = req.query.searchTitle;
  let sendData;

  // 각 게시판 type 체크 먼저
  var board_type_code = parseInt(req.params.board_type_code, 10);
  var board = boardList.filter(function (board) {
    return board.board_type_code === board_type_code;
  });

  if (!searchTxt) {
    sendData = {
      resBoardList: board.slice((currPage - 1) * 10, currPage * 10),
      maxData: board.length,
    };
  } else {
    var search = board.filter(function (search) {
      return search.title.includes(searchTxt);
    });

    sendData = {
      resBoardList: search.slice((currPage - 1) * 10, currPage * 10),
      maxData: search.length,
    };
  }

  res.send(sendData);
});

module.exports = router;

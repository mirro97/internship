// search
var search_btn = document.querySelector(".btn_container");
var search_form = document.getElementById("search_wrapper");

search_form.onsubmit = getBoardList;
search_btn.addEventListener("click", getBoardList);

// board 출력
function movePage(i) {
  getBoardList(i);
}

function getBoardList(page = 0) {
  var title_s = $("#search").val();
  // var boardTypeCode_s = "1001";

  $.ajax({
    url: "/getBoardList",
    type: "post",
    data: { page: page, title: title_s },
  }).done(function (data) {
    console.log(data.count);
    var dataCount = data.count;
    var tbody = $("#table").empty();
    var reqPage = $("#page_wrapper").empty();
    var maxPageSize = 10; // 한번에 보여지는 최대 페이지의 수
    var maxPage = Math.ceil(dataCount / maxPageSize); // 총 페이지의 수

    var first = page - (page % maxPageSize); // 페이지에 보여지는 첫번째 숫자
    var last = first + maxPageSize; // 페이지에 보여지는 마지막 숫자

    if (first < 0) first = 0;
    if (last >= maxPage) last = maxPage;

    console.log("chk :" + page + ", " + first + ", " + last + ", " + maxPage);

    if (first != 0) {
      reqPage.append(
        $("<li class='pageIdx'>").append(
          $("<a href='#' onclick='movePage(" + (first - 1) + ")' >").append(
            "prev"
          )
        )
      );
    }

    for (var i = first; i < last; i++) {
      reqPage.append(
        $("<li class='pageIdx'>").append(
          $("<a href='#' onclick='movePage(" + i + ")' >").append(i + 1)
        )
      );
    }

    if (last != maxPage) {
      reqPage.append(
        $("<li class='pageIdx'>").append(
          $("<a href='#' onclick='movePage(" + (last + 1) + ")' >").append(
            "next"
          )
        )
      );
    }

    for (var i = 0; i < data.oResult.length; i++) {
      var boardInfo = data.oResult[i];

      tbody.append(
        $("<tr>")
          .append($("<td>").append(i + page * 10 + 1))
          .append($("<td>").append(boardInfo.boardTypeCode))
          .append($("<td>").append(boardInfo.title))
          .append($("<td>").append(boardInfo.nickname))
          .append($("<td>").append(boardInfo.contents))
          .append($("<td>").append(boardInfo.registerDate))
      );
    }
  });
}

/*
function searchBoard() {
  var title_s = $("#search").val();
  var boardTypeCode_s = "1001";
  $.ajax({
    url: "/getBoardList",
    type: "post",
    data: { boardTypeCode: boardTypeCode_s, page: page_s, title: title_s },
  }).done(function (data) {
    var tbody = $("#table").empty();

    for (var i = 0; i < data.oResult.length; i++) {
      var boardInfo = data.oResult[i];

      tbody.append(
        $("<tr>")
          .append($("<td>").append(i + page * 10 + 1))
          .append($("<td>").append(boardInfo.boardTypeCode))
          .append($("<td>").append(boardInfo.title))
          .append($("<td>").append(boardInfo.nickname))
          .append($("<td>").append(boardInfo.contents))
          .append($("<td>").append(boardInfo.registerDate))
      );
    }
  });
}
*/

/*
  // board 출력 - (view 엔진) 사용했을 때
  function movePage2(i) {
    location.href = "/board2/" + i;
  }

  function getBoardList2(page = 0) {
    // var index = 0;
    $.ajax({
      url: "/getBoardList",
      type: "post",
      data: { page: page },
    }).done(function (data) {
      // console.log(data);
      console.log(data.count);
      var dataCount = data.count;
      var tbody = $("#table").empty();
      var reqPage = $("#page_wrapper").empty();
      //var maxPage = dataCount / 5 + 1; // 총 페이지의 수

      var maxPage = Math.ceil(dataCount / 5);

      var first = page - (page % 5); // 페이지에 보여지는 첫번째 숫자
      var last = first + 5; // 페이지에 보여지는 마지막 숫자

      if (last >= maxPage) last = maxPage;

      console.log("chk :" + page + ", " + first + ", " + last + ", " + maxPage);

      for (var i = first; i < last; i++) {
        reqPage.append(
          $("<li class='pageIdx'>").append(
            $("<a href='#' onclick='movePage2(" + i + ")' >").append(i + 1)
          )
        );
      }

      for (var i = 0; i < data.oResult.length; i++) {
        var boardInfo = data.oResult[i];

        tbody.append(
          $("<tr>")
            .append($("<td>").append(i + page * 5 + 1))
            .append($("<td>").append(boardInfo.boardTypeCode))
            .append($("<td>").append(boardInfo.title))
            .append($("<td>").append(boardInfo.nickname))
            .append($("<td>").append(boardInfo.contents))
            .append($("<td>").append(boardInfo.registerDate))
        );
      }
    });
  }
*/

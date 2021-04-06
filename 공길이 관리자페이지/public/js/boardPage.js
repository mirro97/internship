// // 보드 이동
// var boardPage = document.querySelectorAll(".sub_link");
// var content = document.querySelectorAll(".content");
// for (var i = 0; i < boardPage.length; i++) {
//   id = content[i];
//   boardPage[i].addEventListener("click", movePage);
// }

// function movePage(e) {
//   window.alert(this.innerHTML);
// }

// search
// var search_btn = document.querySelector(".btn_container");

// // search_btn.addEventListener("click", getBoardList);
// search_btn.addEventListener("click", function (event) {
//   getBoardList();
// });
// document.getElementById("search").addEventListener("keyup", function (event) {
//   var code;

//   if (event.key !== undefined) {
//     code = event.key;
//   } else if (event.keyIdentifier !== undefined) {
//     code = event.keyIdentifier;
//   } else if (event.keyCode !== undefined) {
//     code = event.keyCode;
//   }

//   if (code == 13 || code == "Enter") {
//     getBoardList();
//   }
// });

function initEvent() {
  $(".btn_container").click(function () {
    getBoardList();
  });

  $("#search").keyup(function (event) {
    var code;

    if (event.key !== undefined) {
      code = event.key;
    } else if (event.keyIdentifier !== undefined) {
      code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
      code = event.keyCode;
    }

    if (code == 13 || code == "Enter") {
      getBoardList();
    }
  });
}
// board 출력
function movePage(i) {
  getBoardList(i);
}

function getBoardList(page) {
  if (!page) page = 0;
  var title_s = $("#search").val();
  var selectType = $("#selectedType").val();
  $.ajax({
    url: "/" + selectType,
    type: "POST",
    dataType: "json",
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

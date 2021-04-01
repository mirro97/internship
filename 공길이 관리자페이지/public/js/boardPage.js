// // board 출력
// function movePage(i) {
//   getBoardList(i);
// }

// function getBoardList(page = 0) {
//   // var index = 0;
//   $.ajax({
//     url: "/getBoardList",
//     type: "post",
//     data: { page: page },
//   }).done(function (data) {
//     // console.log(data);
//     console.log(data.count);
//     var dataCount = data.count;
//     var tbody = $("#table").empty();
//     var reqPage = $("#page_wrapper").empty();
//     var maxPage = dataCount / 5 + 1;

//     var first = maxPage;
//     var last = first + 4;
//     var prev = fitst - 1;
//     var next = last - 1;

//     for (var i = 0; i < data.oResult.length; i++) {
//       var boardInfo = data.oResult[i];

//       tbody.append(
//         $("<tr>")
//           .append($("<td>").append(i + page * 5 + 1))
//           .append($("<td>").append(boardInfo.boardTypeCode))
//           .append($("<td>").append(boardInfo.title))
//           .append($("<td>").append(boardInfo.nickname))
//           .append($("<td>").append(boardInfo.contents))
//           .append($("<td>").append(boardInfo.registerDate))
//       );
//     }

//     if (dataCount > 5) {
//       reqPage.append(
//         $("<li class='pageIdx'>").append(
//           $("<a href='#' onclick='movePage(" + i + ")' >").append("prev")
//         )
//       );
//     }

//     for (var i = 0; i < maxPage - 1; i++) {
//       reqPage.append(
//         $("<li class='pageIdx'>").append(
//           $("<a href='#' onclick='movePage(" + i + ")' >").append(i + 1)
//         )
//       );
//     }

//     if (dataCount > 5) {
//       reqPage.append(
//         $("<li class='pageIdx'>").append(
//           $("<a href='#' onclick='movePage(" + i + ")' >").append("next")
//         )
//       );
//     }
//   });
// }

// board 출력
function movePage(i) {
  getBoardList(i);
}

function getBoardList(page = 0) {
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

    var isLeftShow = false;
    var isRightShow = false;

    var first = page - (page % 5);
    var last = first + 5;

    if (last >= maxPage) last = maxPage;

    console.log("chk :" + page + ", " + first + ", " + last + ", " + maxPage);

    if (maxPage < 5) {
      for (var i = first; i < last; i++) {
        reqPage.append(
          $("<li class='pageIdx'>").append(
            $("<a href='#' onclick='movePage(" + i + ")' >").append(i + 1)
          )
        );
      }
    } else if (maxPage > 4)
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
    // if (dataCount > 5) {
    //   reqPage.append(
    //     $("<li class='pageIdx'>").append(
    //       $("<a href='#' onclick='movePage(" + i + ")' >").append("prev")
    //     )
    //   );
    // }

    // for (var i = 0; i < maxPage - 1; i++) {
    //   reqPage.append(
    //     $("<li class='pageIdx'>").append(
    //       $("<a href='#' onclick='movePage(" + i + ")' >").append(i + 1)
    //     )
    //   );
    // }

    // if (dataCount > 5) {
    //   reqPage.append(
    //     $("<li class='pageIdx'>").append(
    //       $("<a href='#' onclick='movePage(" + i + ")' >").append("next")
    //     )
    //   );
    // }
  });
}

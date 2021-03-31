// var table = document.getElementById("table");
// for (var i = 0; i < data.length; i++) {
//   var row = `<tr>
//         <td>${data[i].이름}</td>
//         <td>${data[i].나이}</td>
//         <td>${data[i].성별}</td>
//      </tr>`;
//   table.innerHTML += row;
// }
function getBoardList() {
  $.ajax({
    url: "/getBoardList",
    type: "post",
    data: {},
  }).done(function (data) {
    console.log(data);
    var tbody = $("#table").empty();

    for (var i = 0; i < data.oResult.length; i++) {
      var boardInfo = data.oResult[i];

      tbody.append(
        $("<tr>")
          .append($("<td>").append(i + 1))
          .append($("<td>").append(boardInfo.boardTypeCode))
          .append($("<td>").append(boardInfo.title))
          .append($("<td>").append(boardInfo.nickname))
          .append($("<td>").append(boardInfo.contents))
          .append($("<td>").append(boardInfo.registerDate))
      );
    }

    // for (var i = 0; i < data.oResult.length; i++) {
    //   var boardInfo = data.oResult[i];
    //   tbody.append(
    //     $("<tr>")
    //       .append($("<td>").append(boardInfo.nickname))
    //       .append($("<td>").append(boardInfo.nickname))
    //       .append($("<td>").append(boardInfo.nickname))
    //       .append($("<td>").append(boardInfo.nickname))
    //       .append($("<td>").append(boardInfo.nickname))
    //   );
    // }

    //   tbody.append(
    //     $("<tr>")
    //       .append($("<td>").append(data.oResult.id))
    //       .append($("<td>").append(data.oResult.id))
    //       .append($("<td>").append(data.oResult.id))
    //       .append($("<td>").append(data.oResult.id))
    //       .append($("<td>").append(data.oResult.id))
    //   );

    // $("#table").html(data.oResult);
  });
}

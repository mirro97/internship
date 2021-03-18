var graphList = [];
$(document).ready(function () {
  graphList.push(
    $("#first-graph").donutty({
      color: "#e0444c",
      min: 0,
      max: 100,
      value: 90,
      thickness: 5,
    })
  );
  graphList.push(
    $("#second-graph").donutty({
      color: "#e0444c",
      min: 0,
      max: 100,
      value: 99,
      thickness: 5,
    })
  );
  graphList.push(
    $("#third-graph").donutty({
      color: "#e0444c",
      min: 0,
      max: 100,
      value: 100,
      thickness: 5,
    })
  );
  // graphList.forEach(function (el) {
  //   el.css("-webkit-transform-origin", "50% 50%");
  //   el.css("transform-origin", "center");
  // });

  // $("#first-graph").donutty({
  //   color: "#e0444c",
  //   min: 0,
  //   max: 100,
  //   value: 90,
  //   thickness: 5,
  // });
  // $("#second-graph").donutty({
  //   color: "#e0444c",
  //   min: 0,
  //   max: 100,
  //   value: 99,
  //   thickness: 5,
  // });

  // $("#third-graph").donutty({
  //   color: "#e0444c",
  //   min: 0,
  //   max: 100,
  //   value: 100,
  //   thickness: 5,
  // });
});

// function initGraph() {
//   new Donutty(document.getElementById("first-graph"), {
//     color: "#e0444c",
//     min: 0,
//     max: 100,
//     value: 90,
//     thickness: 5,
//     rotate: 45,
//   });
//   new Donutty(document.getElementById("second-graph"), {
//     color: "#e0444c",
//     min: 0,
//     max: 100,
//     value: 99,
//     thickness: 5,
//     rotate: 45,
//   });
//   new Donutty(document.getElementById("third-graph"), {
//     color: "#e0444c",
//     min: 0,
//     max: 100,
//     value: 100,
//     thickness: 5,
//     rotate: 45,
//   });
// }

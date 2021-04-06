var clickType = $(".sub_link");

clickType.click(function () {
  var select = $(this).attr("id");
  alert(select);
});

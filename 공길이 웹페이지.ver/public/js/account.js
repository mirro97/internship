function check() {
  var str = document.getElementById("chk_id");

  var caution = document.getElementById("c_nes");

  if (str === "" || str === null) {
    console.log("id칸이 비었음");
    caution.style.display = "block";
  } else {
    console.log("id칸이 차있음");
    caution.style.display = "none";
  }
}

var login_btn = document.querySelector(".submit_btn");
var login_form = document.getElementById("login_wrapper");

login_form.onsubmit = signIn;
login_btn.addEventListener("click", signIn);

function signIn() {
  var userId = document.getElementById("userId").value;
  var userPw = document.getElementById("userPw").value;

  console.log("로그인 시도 중");

  $.ajax({
    url: "/login2",
    type: "post",
    data: { id: userId, password: userPw },
    success: function (result) {
      console.log(result);
      if (result && result.bResult) {
        console.log("로그인 성공!");
        location.href = "/main";
      } else {
        alert(result.message);
      }
    },
    error: function (error) {
      alert("로그인실패");
      console.log("로그인 실패");
    },
  });
}

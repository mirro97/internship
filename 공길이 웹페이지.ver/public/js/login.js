var signInButton = document.querySelector(".loginButton");
var errorMsg_null = document.querySelector(".null-account");
var errorMsg_wrong = document.querySelector(".wrong-account");

var loginForm = document.getElementById("login-wrapper");
loginForm.onsubmit = signIn;
signInButton.addEventListener("click", signIn);

// keyboard event (엔터 눌렀을때)
// $("form input").keydown(function (e) {
//   if (e.keyCode == 13) {
//     e.preventDefault();
//     checkInput();
//     return false;
//   }
// });

// 입력관련 error 표시
function checkInput() {
  var userId = $("#userId").val();
  var userPw = $("#userPw").val();
  if (!userId || !userPw) {
    errorMsg_wrong.classList.remove("error");
    if (errorMsg_null.classList.contains("error")) {
      return true;
    } else {
      errorMsg_null.classList.toggle("error");
    }
  } else {
    errorMsg_null.classList.remove("error");
    if (errorMsg_wrong.classList.contains("error")) {
      return true;
    } else {
      errorMsg_wrong.classList.toggle("error");
    }
  }
  return true;
}

function signIn() {
  var r = checkInput();
  if (!r) return;
  var userId = document.getElementById("userId").value;
  var userPw = document.getElementById("userPw").value;

  $.ajax({
    url: "/login",
    type: "post",
    data: { id: userId, pw: userPw },
    success: function (res) {
      errorMsg_wrong.classList.remove("error");
      console.log("로그인 function");
      if (res) location.href = "/main";
    },
    error: function (error) {
      console.log("로그인 실패");
    },
  });

  // // if (userId === "testid" && userPw === "testpw") {
  // if (userId === "1" && userPw === "1") {
  //   loginForm.method = "POST";
  //   loginForm["accept-charset"] = "utf-8";
  //   loginForm.autocomplete = "off";
  //   loginForm.action = "/login";
  //   loginForm.submit();
  //   // location.href = "/main";
  // } else if (userId !== "testid" || userPw !== "testpw") {
  //   console.log("로그인 실패");

  //   if (errorMsg.classList.contains("error")) {
  //     return;
  //   } else {
  //     errorMsg.classList.toggle("error");
  //   }
  // }
  // return false;
}

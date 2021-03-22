var signInButton = document.querySelector(".loginButton");
var errorMsg = document.querySelector(".error-msg");

signInButton.addEventListener("click", signIn);

function signIn() {
  var userId = document.getElementById("userId").value;
  var userPw = document.getElementById("userPw").value;

  if (userId === "testid" && userPw === "testpw") {
    console.log("로그인 성공");
    location.href = "이동할 페이지 주소 쓰기";
  } else if (userId !== "testid" || userPw !== "testpw") {
    console.log("로그인 실패");

    if (errorMsg.classList.contains("error")) {
      return;
    } else {
      errorMsg.classList.toggle("error");
    }
  }
}

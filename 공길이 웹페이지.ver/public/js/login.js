var signInButton = document.querySelector(".loginButton");
signInButton.addEventListener("click", signIn);

function signIn() {
  var userId = document.getElementById("userId").value;
  var userPw = document.getElementById("userPw").value;

  if (userId === "testid" && userPw === "testpw") {
    console.log("로그인 성공");
  } else if (userId !== "testid" || userPw !== "testpw") {
    alert("아이디나 비밀번호를 다시 확인해주세요");
    console.log("로그인 실패");
  }
}

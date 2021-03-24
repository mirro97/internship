function check() {
  // 유효성 검사에 사용될 input 들 선언
  var userRank = document.getElementById("user_rank");
}

// 아이디 유효성 검사
function checkId() {
  var userId = document.getElementById("user_id");
  var caution = document.getElementById("c_id");

  if (userId.value === "" || userId.value === null) {
    console.log("아이디가 비었습니다");
    caution.style.display = "block";
  } else {
    console.log("아이디가 차있습니다");
    caution.style.display = "none";
  }
}

// 비밀번호 유효성 검사
function checkPw1() {
  var userPw1 = document.getElementById("user_pw1");

  var caution1 = document.getElementById("c_pattern_pw");
  // var validPw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
  var validPw = /^(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/;

  if (!validPw.test(userPw1.value)) {
    console.log("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요");
    caution1.style.display = "block";
  } else {
    console.log("사용할수 있는 비밀번호입니다");
    caution1.style.display = "none";
  }
}

// 비밀번호 일치여부 판단
function checkPw2() {
  var userPw1 = document.getElementById("user_pw1");
  var userPw2 = document.getElementById("user_pw2");

  var caution2 = document.getElementById("c_wrong_pw");

  if (userPw1.value !== userPw2.value) {
    console.log("비밀번호가 일치하지 않습니다");
    caution2.style.display = "block";
  } else {
    console.log("비밀번호가 일치합니다");
    caution2.style.display = "none";
  }
}

// 이메일 유효성 검사
function checkEmail() {
  var userEmail = document.getElementById("user_email");
  var caution = document.getElementById("c_email");

  var validEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!validEmail.test(userEmail.value)) {
    console.log("이메일주소가 유효하지 않습니다");
    caution.style.display = "block";
  } else {
    console.log("유효한 이메일 주소입니다");
    caution.style.display = "none";
  }
}

function checkName() {
  var userNickName = document.getElementById("user_name");
  var caution = document.getElementById("c_name");

  if (userNickName.value === "" || userNickName.value === null) {
    console.log("이름이 비었습니다");
    caution.style.display = "block";
  } else {
    console.log("이름이 차있습니다");
    caution.style.display = "none";
  }
}

function checkNick() {
  var userNickName = document.getElementById("user_nickname");
  var caution = document.getElementById("c_nick");

  if (userNickName.value === "" || userNickName.value === null) {
    console.log("닉네임이 비었습니다");
    caution.style.display = "block";
  } else {
    console.log("닉네임이 차있습니다");
    caution.style.display = "none";
  }
}

function checkRank() {
  var userRank = document.getElementById("user_rank");
  var caution = document.getElementById("c_rank");

  if (userRank.value === "" || userRank.value === null) {
    console.log("직렬이 비었습니다");
    caution.style.display = "block";
  } else {
    console.log("직렬이 차있습니다");
    caution.style.display = "none";
  }
}

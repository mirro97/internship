<template>
  <main>
    <div class="login">
      <h1 class="login_title">관리자 로그인</h1>
      <form
        @submit.prevent="signIn"
        id="login_wrapper"
        name="login_wrapper"
        class="input_group"
      >
        <!-- 사용자 계정 입력 -->
        <div class="input_wrapper">
          <div class="item_input">
            <label for="userId" class="lab_placeholder"> 아이디 </label>
            <input
              v-model="userId"
              type="text"
              id="userId"
              name="userId"
              class="user_input"
            />
          </div>
          <div class="item_input">
            <label for="userPw" class="lab_placeholder">비밀번호</label>
            <input
              v-model="userPw"
              type="password"
              id="userPw"
              name="userPw"
              class="user_input"
            />
          </div>

          <div class="inputError" :style="{ display: chk_id }">
            아이디를 입력하세요
          </div>
          <div class="inputError" :style="{ display: chk_pw }">
            비밀번호를 입력하세요
          </div>
          <div class="inputError" :style="{ display: chk_both }">
            계정과 비밀번호를 모두 입력해주세요
          </div>
          <div class="inputError" :style="{ display: errorMsg }">
            관리자 계정 혹은 비밀번호가 일치하지 않습니다. <br />
            입력한 내용을 다시 확인해 주세요
          </div>
        </div>

        <!-- 버튼 -->
        <button class="submit_btn" @click="checkInput">
          로그인
        </button>
        <img src="../../public/img/group_62.png" alt="공길이" />
      </form>
    </div>
  </main>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      userId: "",
      userPw: "",
      chk_both: "none",
      chk_id: "none",
      chk_pw: "none",
      errorMsg: "none"
    };
  },
  methods: {
    signIn() {
      this.axios
        .post("/api/login", {
          userId: this.userId,
          userPw: this.userPw
        })
        .then(res => {
          console.log(res);
          this.$router.push("/main/test");
        })
        .catch(res => {
          console.log(res);
          this.errorMsg = "block";
        });
    },
    checkInput() {
      this.errorMsg = "none";
      this.chk_both = "none";
      this.chk_id = "none";
      this.chk_pw = "none";
      if (!this.userId && !this.userPw) {
        this.chk_both = "block";
      } else if (!this.userId && this.userPw) {
        this.chk_id = "block";
      } else if (!this.userPw && this.userId) {
        this.chk_pw = "block";
      }
    }
  }
};
</script>

<style scoped>
@import url("../../public/font/fonts.css");

body {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* common css */
h1 {
  display: block;
}

label {
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  padding-left: 8px;
  cursor: pointer;
  margin-bottom: 7px;
}

input {
  height: 45px;
  border: 1px solid #ced0da;
  border-radius: 4px;
}

/* login css */
.login {
  min-width: 450px;
  padding: 40px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 10%), 0px 4px 6px rgb(0 0 0 / 5%),
    inset 0px 1px 0px rgb(255 255 255 / 10%);
}

.login_title {
  font-family: "Recipekorea", sans-serif;
  display: inline-block;
  font-size: 25px;
  margin-bottom: 40px;
}

.item_input {
  margin-bottom: 15px;
}

.lab_placeholder {
  width: 100%;
}

.lab_clear {
  display: none;
}

.user_input {
  width: 100%;
  padding-left: 8px;
}

.user_input:focus {
  outline: none;
  border: 1px solid #099268;
}

.inputError {
  font-size: 14px;
  background-color: #f1f3f5;
  padding: 10px 8px;
  color: #d9480f;
}

.submit_btn {
  display: block;
  height: 50px;
  width: 100%;
  color: #fff;
  text-decoration: none;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-weight: 700;
  background-color: #20c997;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
}

.submit_btn:hover {
  background-color: #12b886;
}

.submit_btn:focus {
  outline: none;
  box-shadow: 0 2px 6px 0 rgb(61 80 81 / 8%);
}

img {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 80px;
}
</style>

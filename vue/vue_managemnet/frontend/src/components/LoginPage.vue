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
        </div>

        <!-- 버튼 -->
        <button class="submit_btn">
          로그인
        </button>
        <!-- <router-link class="submit_btn" type="button" to="/main">
          로그인
        </router-link> -->
        <img src="../../public/img/group_62.png" alt="공길이" />
      </form>
    </div>
  </main>
</template>
<script>
export default {
  // name: "Login",
  // data() {
  //   return {
  //     user: {
  //       userId: "",
  //       userPw: ""
  //     }
  //   };
  // },
  // methods: {
  //   async signUp() {
  //     const response = await this.axios.post("/api/login", {
  //       user: this.user
  //     });

  //     console.log(response);
  //   }
  // }
  name: "Login",
  data() {
    return {
      userId: "",
      userPw: ""
    };
  },
  methods: {
    async signIn() {
      const response = await this.axios.post("/api/login", {
        userId: this.userId,
        userPw: this.userPw
      });

      console.log(response);
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

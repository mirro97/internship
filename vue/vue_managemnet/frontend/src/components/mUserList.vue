<template>
  <main class="border_sec">
    <div class="border_container">
      <h1 class="board_title">유저 관리 페이지</h1>

      <div class="search_container">
        <form class="input_group" v-on:submit="searchInput">
          <input
            type="text"
            v-model="searchName"
            class="search_input"
            placeholder="닉네임으로 검색하세요"
            autocomplete="false"
          />

          <button class="btn_container">
            <img
              class="search_btn"
              src="../../public/img/돋보기.png"
              alt="검색아이콘"
            />
          </button>
        </form>
      </div>

      <table class="table_container test">
        <thead>
          <tr>
            <th>번호</th>
            <th>ID</th>
            <th>email</th>
            <th>이름</th>
            <th>생일</th>
            <th>카카오 ID</th>
            <th>닉네임</th>
            <th>사는곳</th>
            <th>가입 일자</th>
            <th>기능</th>
          </tr>
        </thead>

        <tbody id="table">
          <tr v-for="(user, i) in userList" :key="i">
            <td>{{ i + (currentPage - 1) * 10 + 1 }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.birthDay }}</td>
            <td>{{ user.kakaoId }}</td>
            <td>{{ user.nickName }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.registDay }}</td>
            <td>
              <button
                class="f_btn delete_btn"
                @click="deleteUserData(user.idx)"
              >
                삭제
              </button>
              <button class="f_btn modify_btn">수정</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="page_container">
        <ul id="page_wrapper">
          <li class="pageIdx" v-if="firstPageIndex != 1">
            <a @click="movePage(firstPageIndex - 1, searchName)">
              prev
            </a>
          </li>

          <li
            class="pageIdx"
            v-for="pageIndex in range(firstPageIndex, endPageIndex)"
            :key="pageIndex"
          >
            <a @click="movePage(pageIndex, searchName)">
              {{ pageIndex }}
            </a>
          </li>

          <li class="pageIdx" v-if="endPageIndex != maxPage">
            <a @click="movePage(firstPageIndex + 5, searchName)">
              next
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userList: [], // 화면에 표시될 데이터
      dataPage: 5, // 화면에 표시될 최대 페이지 인덱스 개수
      currentPage: 0, // 현재 페이지
      maxdata: 0, // 데이터의 총 개수 (userData.json)
      maxdataSize: 10, // 화면에 표시될 최대 데이터의 수
      delete_data: ""
    };
  },
  methods: {
    async getUserList(currentPage, searchName) {
      await this.axios.get("/auth/check");
      if (!currentPage) currentPage = 1; // 처음 화면 로딩시(새로고침) 나타나는 페이지

      const { data } = await this.axios.get("/users", {
        params: { currentPage, searchName }
      });

      this.currentPage = currentPage;
      this.userList = data.resUserList;
      this.maxdata = data.maxData;
    },
    movePage(i, searchName) {
      return this.getUserList(i, searchName);
    },
    range: function(start, end) {
      let list = [];
      for (let i = start; i <= end; i++) list.push(i);
      return list;
    },
    searchInput(e) {
      e.preventDefault();
      return this.getUserList(this.currentPage, this.searchName);
    },
    async deleteUserData(userIdx) {
      await this.axios.get("/deleteUser", {
        params: { userIdx }
      });
      this.getUserList(this.currentPage, this.searchName);
    }
  },
  computed: {
    maxPage() {
      return Math.ceil(this.maxdata / 10); // 요구되는 페이지 인덱스의 총 개수
    },
    firstPageIndex() {
      return (
        this.currentPage - 1 - ((this.currentPage - 1) % this.dataPage) + 1
      );
    },
    endPageIndex() {
      var endPage = this.firstPageIndex + this.dataPage - 1;
      if (endPage >= this.maxPage) {
        endPage = this.maxPage;
      }
      return endPage;
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>

<style scoped>
.border_sec {
  padding: 49px 0 56px 200px;
}

.border_container {
  padding: 0 20px;
}

.board_title {
  font-size: 20px;
  margin-top: 20px;
  display: block;
  text-align: left;
}

.input_group {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.select_type {
  height: 41px;
  border: 1px solid #ced0da;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
}

.select_type:focus {
  outline: none;
}

.search_container {
  margin-top: 20px;
}

.search_input {
  height: 35px;
  width: 350px;
  border: 1px solid #ced0da;
  border-radius: 2px;
  padding-left: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 10%), 0px 4px 6px rgb(0 0 0 / 5%),
    inset 0px 1px 0px rgb(255 255 255 / 10%);
}

.btn_container {
  box-shadow: 0px 3px 15px -11px rgba(79, 79, 79, 0.75);
  background-color: #ced4da;
  border: none;
  border-radius: 2px;
  margin-left: 5px;
  padding: 4px 5.5px;
}

.btn_container:hover {
  background-color: #adb5bd;
}

.search_btn {
  height: 25px;
  width: 25px;
  object-fit: cover;
}

.table_container {
  font-size: 14px;
  border-top: 1px solid #ced4da;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.table_container th,
.table_container td {
  border-bottom: 1px solid #ced4da;
}

th {
  background-color: #e9ecef;
  font-size: 14px;
  padding: 5px 10px;
}

table {
  height: 600px;
}

td {
  text-align: center;
  padding: 0 5px;
}

td:nth-child(1) {
  width: 5%;
}

td:nth-child(2) {
  width: 5%;
}

.f_btn {
  border: none;
  border-radius: 4px;
  color: #fff;
  width: 50px;
  height: 30px;
}

.delete_btn {
  background-color: #f03e3e;
  margin-right: 8px;
}

.modify_btn {
  background-color: #7e7e7e;
}

.page_container {
  width: 100%;
  margin-top: 20px;
}

#page_wrapper {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  border-radius: 4px;
}

.pageIdx {
  list-style: none;
}

.pageIdx a {
  font-size: 11px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 30px;
  height: 100%;
  width: 30px;
  color: #495057;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-right: none;
}

.pageIdx:first-child a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pageIdx:last-child a {
  border-right: 1px solid #dee2e6;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pageIdx a:hover {
  background-color: #0ca678;
  color: #fff;
}

.fuction_container {
  position: relative;
  top: -30px;
  width: 50px;
}
</style>

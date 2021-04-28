<template>
  <main class="border_sec">
    <div class="border_container">
      <h1 class="board_title">유저 관리 페이지</h1>

      <div class="search_container">
        <div class="input_group">
          <input
            type="text"
            id="search"
            name="search"
            class="search_input"
            placeholder="닉네임으로 검색하세요"
          />

          <button class="btn_container" type="button">
            <img
              class="search_btn"
              src="../../public/img/돋보기.png"
              alt="검색아이콘"
            />
          </button>
        </div>
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
          </tr>
        </tbody>
      </table>

      <div class="page_container">
        <ul id="page_wrapper">
          <li class="pageIdx" v-if="firstPageIndex != 0">
            <a @click="movePage(firstPageIndex - 1)">
              prev
            </a>
          </li>

          <li
            class="pageIdx"
            v-for="firstPageIndex in endPageIndex"
            :key="firstPageIndex"
          >
            <a @click="movePage(firstPageIndex)">
              {{ firstPageIndex }}
            </a>
          </li>

          <li class="pageIdx" v-if="endPageIndex != maxPage">
            <a @click="movePage(endPageIndex + 1)">
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
      maxdataSize: 10 // 화면에 표시될 최대 데이터의 수
    };
  },
  methods: {
    async getUserList(currentPage) {
      if (!currentPage) currentPage = 1; // 처음 화면 로딩시(새로고침) 나타나는 페이지

      const { data } = await this.axios.get("/users", {
        params: { currentPage }
      });

      this.currentPage = currentPage;
      this.userList = data.resUserList;
      this.maxdata = data.maxData;

      if (this.endPageIndex >= this.maxPage) {
        this.endPageIndex = this.maxPage;
      }

      console.log("maxPage : " + this.maxPage);
      console.log("maxdata : " + this.maxdata);
      console.log("endPageIndex : " + this.endPageIndex);
    },
    movePage(i) {
      console.log(i);
      return this.getUserList(i);
    }
  },
  computed: {
    maxPage() {
      return Math.ceil(this.maxdata / 10); // 요구되는 페이지 인덱스의 총 개수
    },
    firstPageIndex() {
      return this.currentPage - 1 - ((this.currentPage - 1) % this.dataPage);
    },
    endPageIndex() {
      return this.firstPageIndex + this.dataPage;
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
  border: 1px solid #ced4da;
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
}

td:first-child {
  padding: 10px;
  width: 5%;
}

td:nth-child(1) {
  width: 5%;
}

td:nth-child(2) {
  width: 10%;
}

td:nth-child(3) {
  width: 15%;
}

td:nth-child(4) {
  width: 8%;
}

td:nth-child(5) {
  width: 13%;
}

.page_container {
  width: 100%;
  height: 35px;
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
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 35px;
  height: 100%;
  width: 35px;
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
</style>

<template>
  <main class="border_sec">
    <div class="border_container">
      <h1 class="board_title">전체 게시판 관리</h1>
      <div class="search_container">
        <form class="input_group" v-on:submit="searchInput">
          <input
            type="text"
            v-model="searchTitle"
            class="search_input"
            placeholder="제목으로 검색하세요"
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
            <th>게시판 타입</th>
            <th>제목</th>
            <th>닉네임</th>
            <th>내용</th>
            <th>게시한 날짜</th>
          </tr>
        </thead>

        <tbody id="table">
          <tr v-for="(board, i) in boardList" :key="i">
            <td>{{ i + (currentPage - 1) * 10 + 1 }}</td>
            <td>{{ board.board_type_code }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.nickName }}</td>
            <td>{{ board.contents }}</td>
            <td>{{ board.register_date }}</td>
          </tr>
        </tbody>
      </table>

      <div class="page_container">
        <ul id="page_wrapper">
          <li class="pageIdx" v-if="firstPageIndex != 1">
            <a @click="movePage(firstPageIndex - 1, searchTitle)">
              prev
            </a>
          </li>

          <li
            class="pageIdx"
            v-for="pageIndex in range(firstPageIndex, endPageIndex)"
            :key="pageIndex"
          >
            <a @click="movePage(pageIndex, searchTitle)">
              {{ pageIndex }}
            </a>
          </li>

          <li class="pageIdx" v-if="endPageIndex != maxPage">
            <a @click="movePage(firstPageIndex + 5, searchTitle)">
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
      boardList: [],
      dataPage: 5,
      currentPage: 0,
      maxdata: 0,
      maxdataSize: 10
    };
  },
  methods: {
    async getBoardList(currentPage, searchTitle) {
      await this.axios.get("/auth/check");
      if (!currentPage) currentPage = 1; // 처음 화면 로딩시(새로고침) 나타나는 페이지

      const { data } = await this.axios.get("/api/main", {
        params: { currentPage, searchTitle }
      });

      this.currentPage = currentPage;
      this.boardList = data.resBoardList;
      this.maxdata = data.maxData;
    },
    movePage(i, searchTitle) {
      console.log("currentPage: " + i + ", searchTitle: " + searchTitle);
      return this.getBoardList(i, searchTitle);
    },
    range: function(start, end) {
      let list = [];
      for (let i = start; i <= end; i++) list.push(i);
      return list;
    },
    searchInput(e) {
      e.preventDefault();
      return this.getBoardList(this.currentPage, this.searchTitle);
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
    this.getBoardList();
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
  height: 30px;
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
</style>

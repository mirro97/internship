<template>
  <div>
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
          <td>{{ i + 1 }}</td>
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
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        다음
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      pageNum: 0
    };
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    }
  },
  computed: {
    pageCount() {
      let listLength = this.listArray.length;
      let listSize = this.pageSize;
      let page = Math.ceil(listLength / listSize);

      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
};
</script>

<template>
  <div class="black-bg" v-if="modal_is_open === true">
    <div class="white-bg">
      <h4 @click="modal_is_open = false">상세페이지 타이틀</h4>
      <p>상세페이지 내용</p>
    </div>
  </div>

  <div class="menu">
    <a v-for="(a, i) in menu" :key="i">{{ a }}</a>
  </div>
  <!-- <div class="product" v-for="(a, i) in 3" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}</p>
    <button @click="reportNum++">허위매물 신고</button>
    <span>신고수 : {{ reportNum }}</span>
  </div> -->
  <div class="product">
    <h4 @click="modal_is_open = true">{{ products[0] }}</h4>
    <p>{{ price[0] }}</p>
    <button @click="reportNum[0]++">허위매물 신고</button>
    <span>신고수 : {{ reportNum[0] }}</span>
  </div>
  <div class="product">
    <h4 @click="modal_is_open = true">{{ products[1] }}</h4>
    <p>{{ price[1] }}</p>
    <button @click="reportNum[1]++">허위매물 신고</button>
    <span>신고수 : {{ reportNum[1] }}</span>
  </div>
  <div class="product">
    <h4 @click="modal_is_open = true">{{ products[2] }}</h4>
    <p>{{ price[2] }}</p>
    <button @click="reportNum[2]++">허위매물 신고</button>
    <span>신고수 : {{ reportNum[2] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 데이터 보관함 - 중요한 변수들 다 때려박으면 됨 - 실시간 자동 렌더링가능
      // 데이터는 object 자료로 저장
      menu: ["Home", "Products", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price: [60, 110, 80],
      reportNum: [0, 0, 0],
      modal_is_open: false
    };
  },
  methods: {
    increase() {
      this.reportNum += 1;
    }
  },
  components: {}
};
</script>

<style>
#app {
  text-align: center;
}

body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  widows: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: #fff;
  padding: 10px;
}
</style>

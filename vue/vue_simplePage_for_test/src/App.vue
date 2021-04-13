<template>
  <div class="black-bg" v-if="modal_is_open === true">
    <div class="white-bg">
      <h4>상세페이지 타이틀</h4>
      <p>상세페이지 내용</p>
      <button @click="modal_is_open = false">닫기</button>
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

  <div class="product" v-for="(b, i) in importData" :key="i">
    <img :src="b.image" alt="" />
    <h4 class="p_title" @click="modal_is_open = true">{{ b.title }}</h4>
    <p class="p_content">{{ b.content }}</p>
    <p class="p_price">{{ b.price }} 원</p>
    <span class="divide"></span>
  </div>
</template>

<script>
import data from "./post.js";

export default {
  name: "App",
  data() {
    return {
      modal_is_open: false,
      menu: ["Home", "Products", "About"],
      reportNum: [0, 0, 0],
      importData: data
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
  width: 100%;
  height: 100vh;
}
div {
  box-sizing: border-box;
}

h4,
p,
span {
  display: block;
  margin: 0;
}

img {
  display: block;
  width: 100%;
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
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.menu a {
  color: #fff;
  padding: 10px;
}

.product {
  padding: 10px 10px 0 10px;
}

.p_title {
  margin-top: 20px;
}

.p_content {
  margin-top: 16px;
  padding: 0 20px;
}

.p_price {
  margin-top: 10px;
  text-align: right;
}

.divide {
  margin-top: 10px;
  border-bottom: 1px solid #ced4da;
  width: 100%;
}
</style>

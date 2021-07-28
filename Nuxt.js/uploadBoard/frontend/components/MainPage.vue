<template>
  <div>
    <header>
      <h1 class="title">UploadBoard with Nuxt.js</h1>
      <button class="btn" @click="route()">글쓰기</button>
    </header>
    <Slide> </Slide>
    <div class="main-container">
      <ul class="index-list">
        <li>
          <div class="intro">
            <div class="img-container">
              <img src="../assets/img/testImg.jpg" alt="" />
            </div>
            <div class="detail">
              <h2 class="sub-title">서브타이틀</h2>
              <span class="sub-date"> 올린 날짜</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slide from '~/components/Slide.vue'
export default {
  components: { Slide },
  methods: {
    route() {
      this.$router.push('/newpost')
    },
  },
}
</script>

<style>
/* header css */
header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f1f3f5;
  padding: 0 20px;
}

.title {
  font-size: 20px;
}

.btn {
  font-size: 14px;
  padding: 7px 10px;
  background-color: #ffd43b;
  border-radius: 5px;
  border: none;
}

/* main contents css */
.index-list {
  display: grid;
  grid-template-rows: repeat(3);
}

.intro {
  width: 289px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}

.img-container {
  position: relative;
  height: 169px;
  overflow: hidden;
}

.img-container > img {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.detail {
  padding: 18px 12px;
}

.sub-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.sub-date {
  font-size: 14px;
}
</style>

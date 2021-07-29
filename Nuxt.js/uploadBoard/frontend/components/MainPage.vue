<template>
  <div>
    <header>
      <h1 class="title">UploadBoard with Nuxt.js</h1>
      <button class="btn" @click="route()">글쓰기</button>
    </header>
    <Banner> </Banner>
    <div class="main">
      <h2 class="mc-title">최신글</h2>
      <div class="main-container"></div>
      <post-list></post-list>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Footer from '~/components/Footer.vue'
import PostList from '~/components/PostList.vue'
export default {
  components: { Banner, Footer, PostList },
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
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e5e7;
  padding: 0 20px;
  height: 80px;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
}

.title {
  font-size: 20px;
}

.btn {
  font-size: 15px;
  padding: 9px 12px;
  background-color: #ffd43b;
  border-radius: 5px;
  border: none;
}

/* main contents css */
.main {
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 20px;
  max-width: 1200px;
}

.mc-title {
  font-size: 30px;
}
</style>

<template>
  <div>
    <ul class="index-list">
      <li
        class="content"
        v-for="(content, i) in contentList"
        :key="i"
        @click="route"
      >
        <div class="intro">
          <div class="img-container">
            <img :src="content.imgUrl" alt="" />
          </div>
          <div class="detail">
            <h2 class="sub-title">{{ content.title }}</h2>
            <span class="sub-date"> 올린 날짜 {{ content.uploadDay }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentList: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      await this.$axios.get('/sendData').then((res) => {
        this.contentList = res.data
      })
      console.log('받아온 데이터 출력: ' + this.contentList[0].title)
    },
    route() {
      this.$router.push('/readPost')
    },
  },
}
</script>

<style>
.index-list {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 40px;
}

.intro {
  border-radius: 5px;
  overflow: hidden;
}

.intro:hover {
  transition: 0.2s ease;
  -webkit-box-shadow: 0px 0px 13px -2px rgba(59, 59, 59, 0.79);
  box-shadow: 0px 0px 13px -2px rgba(59, 59, 59, 0.79);
}

.img-container {
  position: relative;
  height: 195px;
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
  border: 1px solid #dee2e6;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.sub-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.sub-date {
  font-size: 14px;
}
</style>

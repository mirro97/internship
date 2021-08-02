<template>
  <div>
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
    <button @click="getData">데이터 왔는지 확인용</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sentdata: '',
    }
  },
  methods: {
    getData() {
      this.$axios.get('/sendData').then((res) => {
        console.log(res.data)
      })
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
  border: 1px solid #dee2e6;
  border-radius: 5px;
  overflow: hidden;
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
}

.sub-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.sub-date {
  font-size: 14px;
}
</style>

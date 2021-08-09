<template>
  <div class="home-page">
    <h1>최신 글</h1>

    <ul class="index-list">
      <li
        v-for="(content, i) in contentList"
        :key="i"
        class="content"
        @click="route(content.postIndex)"
      >
        <div class="intro">
          <div class="img-container">
            <!-- <img :src="content.imgUrl" alt="" /> -->
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
  layout: 'defaults',
  data() {
    return {
      contentList: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

    this.getData()
  },
  methods: {
    async getData() {
      await this.$axios.post('/test').then((res) => {
        this.contentList = res.data
      })
    },
    route(item) {
      this.$router.push(`/board/${item}`)
    },
  },
}
</script>

<style></style>

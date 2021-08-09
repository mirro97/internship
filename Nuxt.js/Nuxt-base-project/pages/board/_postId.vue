<template>
  <div class="post-detail">
    <h1>{{ postData.title }}</h1>
    <p>
      {{ postData.nickname }}
    </p>
    <span>
      {{ postData.uploadDay }}
    </span>
    <p>
      {{ postData.contents }}
    </p>
  </div>
</template>

<script>
export default {
  layout: 'defaults',
  data() {
    return {
      postId: '',
      postData: [],
    }
  },
  mounted() {
    const postId = this.$route.params.postId
    this.postId = postId

    this.getData()
  },
  methods: {
    async getData() {
      await this.$axios.post(`/test/${this.postId}`).then((res) => {
        this.postData = res.data

        console.log(this.postData)
      })
    },
  },
}
</script>

<style></style>

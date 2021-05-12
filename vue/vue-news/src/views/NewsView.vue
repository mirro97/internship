<template>
  <div>
    <div v-for="news in this.$store.state.news" :key="news">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <p>{{ news.time_ago }} by {{ news.user }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // state를 사용해서 필요 없어짐
  // data() {
  //   return {
  //     users: []
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // store 에서 호출
    // fetchNewsList()
    //   .then(function(response) {
    //     console.log(response);
    //     this.users = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style></style>

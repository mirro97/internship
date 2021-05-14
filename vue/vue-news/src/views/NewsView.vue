<template>
  <div>
    <ul class="news_list">
      <li v-for="news in this.$store.state.news" :key="news" class="post">
        <div class="points">
          {{ news.points }}
        </div>
        <div class="user_description">
          <a v-bind:href="news.url" class="news_title">
            {{ news.title }}
          </a>
          <p class="userInfo">
            <span class="time_ago"> {{ news.time_ago }}</span> by
            <router-link v-bind:to="`/user/${news.user}`">
              {{ news.user }}
            </router-link>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style scoped>
p {
  margin: 0;
}
.post {
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
}

.points {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: #228be6;
}

.news_title {
  font-size: 16px;
}

.time_ago {
  font-size: 13px;
}
</style>

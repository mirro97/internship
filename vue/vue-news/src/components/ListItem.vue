<template>
  <div>
    <ul class="news_list">
      <li v-for="item in ListItems" :key="item" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div class="user_description">
          <a v-bind:href="item.url" class="news_title">
            {{ item.title }}
          </a>
          <p class="userInfo">
            <span class="time_ago"> {{ item.time_ago }}</span> by
            <router-link v-bind:to="`/user/${item.user}`">
              {{ item.user }}
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
    const name = this.$route.name;

    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASKS");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    ListItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
    }
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

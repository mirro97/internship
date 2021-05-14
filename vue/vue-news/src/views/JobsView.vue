<template>
  <div>
    <ul class="news_list">
      <li v-for="job in this.$store.state.jobs" :key="job" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div class="user_description">
          <a v-bind:href="job.url" class="news_title">
            {{ job.title }}
          </a>
          <p class="userInfo">
            <span class="time_ago"> {{ job.time_ago }}</span> by
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
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

.job_title {
  font-size: 16px;
}

.time_ago {
  font-size: 13px;
}
</style>

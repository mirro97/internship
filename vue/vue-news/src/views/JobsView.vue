<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <p>{{ job.time_ago }}, {{ job.domain }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style></style>

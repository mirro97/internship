<template>
  <div>
    <div v-for="job in $store.state.jobs" :key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import {} from "../store/index";
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style></style>

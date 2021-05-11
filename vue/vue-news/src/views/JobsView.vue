<template>
  <div>
    <div v-for="job in jobs" :key="job">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";

export default {
  data() {
    return { jobs: [] };
  },
  created() {
    var vm = this;
    fetchJobsList()
      .then(function(response) {
        vm.jobs = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>

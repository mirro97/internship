<template>
  <div>
    <div v-for="ask in asks" :key="ask">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index";
export default {
  data() {
    return {
      asks: []
    };
  },
  created() {
    var vm = this;
    fetchAskList()
      .then(function(response) {
        vm.asks = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style></style>

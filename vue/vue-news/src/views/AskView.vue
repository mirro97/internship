<template>
  <div>
    <div v-for="ask in fetchedAsk" :key="ask">
      <router-link v-bind:to="`/item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <p>{{ ask.time_ago }} by {{ ask.user }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
    //  #2
    //  ...mapState({
    //    fetchedAsk: state => state.asks
    //  })
    // #3
    // ...mapGetters({
    //    askItem: "fetchedAsk" 객체 표기법
    // })

    // #4 배열 표기법
    ...mapGetters(["fetchedAsk"])
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style></style>

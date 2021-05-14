<template>
  <div>
    <ul class="ask_list">
      <li v-for="ask in fetchedAsk" :key="ask" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div class="user_description">
          <router-link v-bind:href="`/item/${ask.id}`" class="ask_title">
            {{ ask.title }}
          </router-link>
          <p class="userInfo">
            <span class="time_ago"> {{ ask.time_ago }}</span> by
            <router-link v-bind:to="`/user/${ask.user}`">
              {{ ask.user }}
            </router-link>
          </p>
        </div>
      </li>
    </ul>
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

.ask_title {
  font-size: 16px;
}

.time_ago {
  font-size: 13px;
}
</style>

<template>
  <div>
    <ListItem></ListItem>
    <!-- <ul class="ask_list">
      <li v-for="ask in fetchedAsk" :key="ask" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div class="user_description">
          <a v-bind:href="`/item/${ask.id}`" class="ask_title">
            {{ ask.title }}
          </a>
          <p class="userInfo">
            <span class="time_ago"> {{ ask.time_ago }}</span> by
            <router-link v-bind:to="`/user/${ask.user}`">
              {{ ask.user }}
            </router-link>
          </p>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem";

export default {
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch("FETCH_ASKS");
  }
};
</script>

<style></style>

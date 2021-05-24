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
import bus from "../utils/bus";

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_ASKS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch(error => {
          console.log(error);
        });
    }, 3000);
  }
};
</script>

<style></style>

<template>
  <div class="ask_body">
    <!-- 질문 continaer -->
    <section class="q_container">
      <div class="user_container">
        <div class="user_img">
          <i class="fas fa-user"></i>
        </div>
        <div class="user_description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time_ago">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <div class="ask_container">
        <h2 class="ask_title">
          {{ fetchedItem.title }}
        </h2>
        <div class="ask_content" v-html="fetchedItem.content"></div>
      </div>
    </section>

    <div class="divide_line">
      <div>
        <i class="fas fa-caret-down"></i>
      </div>
      <strong>
        {{ fetchedItem.comments_count }}
        answers
      </strong>
    </div>
    <!-- 답변 continaer -->
    <section class="a_container">
      <div
        class="comment_container"
        v-for="item in fetchedItem.comments"
        :key="item"
      >
        <div class="user_container">
          <div class="user_img">
            <i class="fas fa-user"></i>
          </div>
          <div class="user_description">
            <router-link :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <div class="time_ago">
              {{ item.time_ago }}
            </div>
          </div>
        </div>
        <div class="answer_container">
          <div class="ask_content" v-html="item.content"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASKINFO", askId);
  }
};
</script>

<style scoped>
.ask_body {
  padding: 10px 80px;
}
.q_container {
  background-color: #edf2ff;
  border-radius: 6px;
  padding: 18px 18px 0 18px;
  margin-bottom: 20px;
}

.user_container {
  display: flex;
  align-items: center;
}

.user_img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;
}

.fa-user {
  font-size: 1.5em;
}

.time_ago {
  font-size: 12px;
}

.divide_line {
  display: flex;
  align-items: center;
  font-size: 20px;
  border-bottom: 2px solid #fab005;
  margin-bottom: 20px;
}

strong {
  margin-left: 8px;
  letter-spacing: -1px;
}

.ask_container {
  padding: 8px;
}

.ask_title {
  font-size: 16px;
}

.comment_container {
  padding: 18px 18px 8px 40px;
  border-radius: 6px;
  background-color: #f1f3f5;
  margin-bottom: 5px;
}
</style>

<template>
  <div class="ask-body">
    <!-- 질문 continaer -->
    <section class="q-container">
      <!-- 사용자 정보 -->
      <div class="user-container">
        <div class="user-img">
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time-ago">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>

      <div class="ask-container">
        <h2 class="ask-title">
          {{ fetchedItem.title }}
        </h2>
        <div class="ask-content" v-html="fetchedItem.content"></div>
      </div>
    </section>

    <div class="divide-line">
      <div>
        <i class="fas fa-caret-down"></i>
      </div>
      <strong>
        {{ fetchedItem.comments_count }}
        answers
      </strong>
    </div>
    <!-- 답변 continaer -->
    <section class="a-container">
      <div
        class="comment-container"
        v-for="item in fetchedItem.comments"
        :key="item"
      >
        <div class="user-container">
          <div class="user-img">
            <i class="fas fa-user"></i>
          </div>
          <div class="user-description">
            <router-link :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <div class="time-ago">
              {{ item.time_ago }}
            </div>
          </div>
        </div>
        <div class="answer-container">
          <div class="ask-content" v-html="item.content"></div>
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
.ask-body {
  padding: 10px 80px;
}
.q-container {
  background-color: #edf2ff;
  border-radius: 6px;
  padding: 18px 18px 0 18px;
  margin-bottom: 20px;
}

.user-container {
  display: flex;
  align-items: center;
}

.user-img {
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

.time-ago {
  font-size: 12px;
}

.divide-line {
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

.ask-container {
  padding: 8px;
}

.ask-title {
  font-size: 16px;
}

.comment-container {
  padding: 18px 18px 8px 40px;
  border-radius: 6px;
  background-color: #f1f3f5;
  margin-bottom: 5px;
}
</style>

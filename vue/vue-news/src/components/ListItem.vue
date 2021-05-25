<template>
  <div>
    <ul class="news_list">
      <li v-for="item in ListItems" :key="item" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div class="user_description">
          <!-- 타이틀 영역 -->
          <p class="news_title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <div class="userInfo">
            <span class="time_ago"> {{ item.time_ago }}</span> by
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    ListItems() {
      return this.$store.state.list;
    }
  }
};
</script>

<style scoped>
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

.news_title {
  font-size: 16px;
}

.time_ago {
  font-size: 13px;
}
</style>

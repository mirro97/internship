<template>
  <li v-bind:class="[curName === content.name ? 'sent' : 'received']">
    <i class="fas fa-user"></i>
    <div class="context">
      <div class="user-msg">
        <span class="user-name">{{ content.name }}</span>
        <div class="msg-detail">
          <span class="message">
            {{ content.msg }}
          </span>
          <span class="time">{{ content.time }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    content: Object,
    curName: String
  },
  data() {}
};
</script>

<style></style>

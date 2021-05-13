<template>
  <div>
    <p>title: {{ askInfo.title }}</p>
    <p>time ago: {{ askInfo.time_ago }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    askInfo() {
      return this.$store.state.askInfo;
    }
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASKINFO", askId);
  }
};
</script>

<style></style>

<template>
  <div>
    <ul>
      <li v-for="(content, i) in contentList" :key="i">
        <h1>{{ content.title }}</h1>

        <p>
          {{ content.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    async getData() {
      await this.$axios.post('/boardList', {})
    },
  },
}
</script>

<style></style>

<template>
  <div class="about-page">about page</div>
</template>

<script>
export default {
  layout: 'defaults',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>

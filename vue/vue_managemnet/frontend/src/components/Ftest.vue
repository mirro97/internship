<template>
  <div>
    <ul class="container">
      <li :class="clicked(i)" v-for="i in item" :key="i">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { item: ["하나", "둘", "셋"] };
  },
  methods: {
    click() {
      return console.log("클릭함");
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  width: 100%;
  height: 50px;
  display: flex;
}

li {
  border: 1px solid #525252;
  height: 50px;
  width: 50px;
}

.clicked {
  background-color: chartreuse;
}
</style>

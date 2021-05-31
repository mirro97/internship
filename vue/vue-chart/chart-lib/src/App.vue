<template>
  <div>
    <h2>
      Chart.js
    </h2>
    <BarChart></BarChart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
export default {
  components: {
    BarChart,
    LineChart
  },
  created() {}
};
</script>

<style></style>

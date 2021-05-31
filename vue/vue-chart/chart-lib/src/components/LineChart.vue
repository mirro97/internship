<template>
  <canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    // var ctx = document.getElementById("lineChart").getContext("2d");
    var ctx = this.$refs.lineChart.getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      options: {}
    });
    return myChart;
  }
};
</script>

<style></style>

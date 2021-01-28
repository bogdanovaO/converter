 <template>
 <div id="app">
    <AreaChart />
    <!-- <PieChart/> -->
    <!-- <BarChart/>
    <RadarChart/>
    <LineChart/> -->
  </div>
</template>

<script>
import AreaChart from "./AreaChart.vue";
import PieChart from "./PieChart.vue";
import BarChart from "./BarChart.vue";
import RadarChart from "./RadarChart.vue";
// import LineChart from "./LineChart.vue"

export default {
  name: "App",
  components: {
    AreaChart,
    // PieChart,
    // BarChart,
    // RadarChart,
    // LineChart
  },
  data() {
    return {
      chartData: {
        Books: 103,
        Magazine: 6000,
        Newspapers: 1000
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
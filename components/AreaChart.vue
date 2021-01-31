<script>
import { Line } from "vue-chartjs";
import { mapState } from "vuex";
export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    };
  },
  computed: {
    ...mapState({
      chartValues: "chartValues",
    }),
  },
  mounted() {
console.log(this.chartValues)

    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    

    this.renderChart(
      {
        labels: [this.chartValues[0].data, this.chartValues[1].data, this.chartValues[2].data, this.chartValues[3].data, this.chartValues[4].data, this.chartValues[5].data, this.chartValues[6].data, this.chartValues[7].data, this.chartValues[8].data, this.chartValues[9].data, this.chartValues[10].data, this.chartValues[11].data, this.chartValues[12].data, this.chartValues[13].data],
        datasets: [
          {
            label: 'currency',
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [this.chartValues[0].course, this.chartValues[1].course, this.chartValues[2].course, this.chartValues[3].course, this.chartValues[4].course, this.chartValues[5].course, this.chartValues[6].course, this.chartValues[7].course, this.chartValues[8].course, this.chartValues[9].course, this.chartValues[10].course, this.chartValues[11].course, this.chartValues[12].course, this.chartValues[13].course]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

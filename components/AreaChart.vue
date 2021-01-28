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
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14"
        ],
        datasets: [
          {
            // label: false,
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [this.chartValues[0].day, this.chartValues[1].day, this.chartValues[2].day, this.chartValues[3].day, this.chartValues[4].day, this.chartValues[5].day, this.chartValues[6].day, this.chartValues[7].day, this.chartValues[8].day, this.chartValues[9].day, this.chartValues[10].day, this.chartValues[11].day, this.chartValues[12].day, this.chartValues[13].day]
          }
          // {
          //   label: "Data Two",
          //   borderColor: "#05CBE1",
          //   pointBackgroundColor: "white",
          //   pointBorderColor: "white",
          //   borderWidth: 1,
          //   backgroundColor: this.gradient2,
          //   data: [60, 55, 32, 10, 2, 12, 53]
          // }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

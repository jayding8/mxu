<template>
  <div id="main">666</div>
</template>

<script>
import echarts from "../utils/echarts";
// import * as noise from "../utils/noise";

export default {
  data() {
    return {
      chart: {},
      data: [],
      xData: [],
      yData: [],
      option: {
        tooltip: {},
        xAxis: {
            // show: false,
          type: "category",
          data: [],
        },
        yAxis: {
            // show: false,
          type: "category",
          data: [],
        },
        visualMap: {
          min: 0,
          max: 1,
          calculable: true,
          realtime: false,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026",
            ],
          },
        },
        series: [
          {
            name: "Gaussian",
            type: "heatmap",
            data: [],
            emphasis: {
              itemStyle: {
                borderColor: "#333",
                borderWidth: 1,
              },
            },
            progressive: 1000,
            animation: false,
            // label: {
            //     show: false
            // }
          },
        ],
      },
    };
  },
  watch: {
    data() {
      this.option.series[0].data = this.data;
    },
    xData() {
      this.option.xAxis.data = this.xData;
    },
    yData() {
      this.option.yAxis.data = this.yData;
    },
  },
  methods: {
    generateData(theta, min, max) {
      console.log(theta, min, max);
      for (let i = 0; i <= 200; i++) {
          // if(i % 7 !== 0 ) continue;
        for (let j = 0; j <= 100; j++) {
            // if(j % 7 !== 0 ) continue;
          // this.data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
          this.data.push([i, j, Math.random(0, 1)]);
        }
        this.xData.push(i);
      }
      for (let j = 0; j < 100; j++) {
        this.yData.push(j);
      }
      //   return data;
    },
  },
  mounted() {
    this.generateData();
    this.chart = echarts.init(document.getElementById("main"));
    // noise.seed(Math.random());
    
    this.option && this.chart.setOption(this.option);
  },
};
</script>
<style scoped>
#main {
    width: 100%;
    height: 100%;
    /* background: no-repeat center #fff; */
    /* background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftqjimg.tianqistatic.com%2Ftoutiao%2Fshenghuo%2Fimages%2F202103%2F01%2F71c5ba615ad52f2f.jpg%2Ftqjia&refer=http%3A%2F%2Ftqjimg.tianqistatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650461693&t=59b65f777bba597b3d5a59d4435de162); */
}
</style>
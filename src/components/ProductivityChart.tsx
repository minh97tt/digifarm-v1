import { useEffect } from "react"
import * as echarts from "echarts"

const ProductivityChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("chart-1")
    const myChart = echarts.init(chartDom)
    const option: echarts.EChartsOption = {
      grid: {
        top: 30,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        textStyle: {
          fontWeight: "bold",
          fontSize: 14,
          color: "#000",
        },
        formatter: function (params: any) {
          return `${params[0].value} tấn/ha`
        },
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Lô A01",
            "Lô A02",
            "Lô A03",
            "Lô A04",
            "Lô A05",
            "Lô A06",
            "Lô A07",
          ],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            fontWeight: "bold",
            fontSize: 14,
            color: "#00000040",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          splitNumber: 5,
          axisLabel: {
            formatter: function (value: number) {
              return value ? value + " tấn/ha" : "0"
            },
            fontWeight: "bold",
            fontSize: 14,
            color: "#00000040",
          },
          // name: "Năng suất (tán)",
        },
      ],
      series: [
        {
          name: "",
          type: "bar",
          barMaxWidth: "40px",
          data: [68.38, 77.93, 90.88, 90.65, 91.61, 62.13, 92.22],
          itemStyle: {
            color: "#3ED094",
            borderRadius: [10, 10, 0, 0],
          },
          tooltip: {
            position: function (point, params, dom, rect, size) {
              // fixed at top
              return [point[0], "10%"]
            },
          },
          label: {
            show: true,
            position: "top",
            formatter: "{c}",
            backgroundColor: "#fff",
            borderColor: "#00000040",
            borderWidth: 1,
            borderRadius: 4,
            padding: [4, 6], // top, right/left
            color: "#00000040",
            fontWeight: "bold",
            shadowColor: "rgba(0,0,0,0.2)",
            shadowBlur: 3,
          },
        },
      ],
    }

    option && myChart.setOption(option)

    const resize = () => myChart.resize()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      myChart.dispose()
    }
  }, [])

  return <div id="chart-1" style={{ width: "100%", height: "100%" }}></div>
}

export default ProductivityChart

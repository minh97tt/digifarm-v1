import { useEffect } from "react"
import * as echarts from "echarts"

const PlantGrowthChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("chart-2")
    const myChart = echarts.init(chartDom)
    const option: echarts.EChartsOption = {
      grid: {
        top: 50,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
        ],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontWeight: "bold",
          fontSize: 14,
          color: "#00000040",
        },
      },
      yAxis: [
        {
          type: "value",
          splitNumber: 4,
          axisLabel: {
            formatter: function (value: number) {
              return value ? value + " m" : "0"
            },
            fontWeight: "bold",
            fontSize: 14,
            color: "#00000040",
          },
        },
        {
          type: "value",
          show: false,
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            opacity: 0.3,
          },
        },
        formatter: function (params: any) {
          let content = `<b style="font-size: 14px; font-weight: bold; color: #202020">${params[0].axisValue}</b> <br/>`
          params.forEach((item: any) => {
            const isHeight = item.seriesName === "Chiều cao"
            const isBrix = item.seriesName === "Độ ngọt"
            if (isHeight) {
              content += `
              Chiều cao TB: ${item.value}m<br/>
            `
            } else if (isBrix) {
              content += `
              Độ ngọt: ${item.value} brix<br/>
            `
            } else {
              content += `
             ${item.seriesName}: ${item.value}<br/>
            `
            }
          })
          return content
        },
      },
      legend: {
        data: [
          {
            name: "Chiều cao",
            itemStyle: {
              color: "#3ED094",
            },
          },
          {
            name: "Độ ngọt",
            itemStyle: {
              color: "#43C0FF",
            },
          },
        ],
        right: 0,
        formatter: function (name) {
          if (name === "Chiều cao") {
            return "Chiều cao (m)"
          } else if (name === "Độ ngọt") {
            return "Độ ngọt (brix)"
          }
          return ""
        },
      },
      series: [
        {
          name: "Chiều cao",
          data: [0, 0.15, 0.35, 0.75, 1.1, 1.25, 1.4, 1.6],
          type: "line",
          smooth: true,
          lineStyle: {
            type: "solid",
            color: "#3ED094",
          },
          symbol: "none",
        },
        {
          name: "Tăng trưởng",
          data: [
            "0",
            "+0.15",
            "+0.2",
            "+0.25",
            "+0.21",
            "+0.22",
            "+0.23",
            "+0.24",
          ],
          type: "bar",
          itemStyle: {
            opacity: 0,
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          name: "Độ ngọt",
          data: [0, 1.6, 2.5, 5.2, 6.5, 8, 10.1, 11.5],
          type: "line",
          smooth: true,
          lineStyle: {
            type: "dotted",
            color: "#43C0FF",
          },
          symbol: "none",
          yAxisIndex: 1,
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

  return <div id="chart-2" style={{ width: "100%", height: "100%" }}></div>
}

export default PlantGrowthChart

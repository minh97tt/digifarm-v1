import { useEffect } from 'react'
import * as echarts from 'echarts'

const textColor = '#00000090'

const PlantGrowthChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById('chart-2')
    const myChart = echarts.init(chartDom)
    const option: echarts.EChartsOption = {
      textStyle: {
        fontFamily: 'Tahoma, sans-serif',
      },
      grid: {
        top: 50,
        left: 12,
        right: 10,
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontWeight: 'bold',
          fontSize: 14,
          color: textColor,
        },
      },
      yAxis: [
        {
          type: 'value',
          splitNumber: 4,
          axisLabel: {
            formatter: function (value: number) {
              return value ? value + ' m' : '0'
            },
            fontWeight: 'bold',
            fontSize: 14,
            color: textColor,
          },
        },
        {
          type: 'value',
          show: false,
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            opacity: 0.3,
          },
        },
        formatter: function (params: any) {
          let content = `<b style="font-size: 14px; font-weight: bold; color: #202020">${params[0].axisValue}</b> <br/>`
          params.forEach((item: any) => {
            const isHeight = item.seriesName === 'Chiều cao'
            if (isHeight) {
              content += `
              Chiều cao TB: ${item.value} m<br/>
            `
            } else {
              content += `
              ${item.seriesName}: ${item.value} cây/m2<br/>
            `
            }
          })
          return content
        },
      },
      legend: {
        data: [
          {
            name: 'Chiều cao',
            itemStyle: {
              color: '#3ED094',
            },
          },
          {
            name: 'Mật độ cây',
            itemStyle: {
              color: '#43C0FF',
            },
          },
        ],
        right: 0,
        formatter: function (name) {
          if (name === 'Chiều cao') {
            return 'Chiều cao (m)'
          }
          return `${name} (cây/m2)`
        },
      },
      series: [
        {
          name: 'Chiều cao',
          data: [1.1, 1.25, 1.4, 1.6],
          type: 'line',
          smooth: true,
          lineStyle: {
            type: 'solid',
            color: '#3ED094',
          },
          symbol: 'none',
        },
        {
          name: 'Mật độ cây',
          data: [7.1, 7.1, 7.1, 7.1],
          type: 'line',
          smooth: true,
          lineStyle: {
            type: 'dotted',
            color: '#43C0FF',
          },
          symbol: 'none',
          yAxisIndex: 1,
        },
      ],
    }

    option && myChart.setOption(option)

    const resize = () => myChart.resize()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      myChart.dispose()
    }
  }, [])

  return <div id="chart-2" style={{ width: '100%', height: '100%' }}></div>
}

export default PlantGrowthChart

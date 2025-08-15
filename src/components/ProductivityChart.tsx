import { useEffect } from 'react'
import * as echarts from 'echarts'

const textColor = '#00000090'

const ProductivityChart = ({
  unit,
  unitLabel,
  chartId,
  xLabels,
  values,
  barMaxWidth = '40px',
}: {
  unit: string
  unitLabel: string
  chartId: string
  xLabels: string[]
  values: any[]
  barMaxWidth?: string
}) => {
  useEffect(() => {
    const chartDom = document.getElementById(chartId)
    const myChart = echarts.init(chartDom)
    const option: echarts.EChartsOption = {
      textStyle: {
        fontFamily: 'Tahoma, sans-serif',
      },
      grid: {
        top: 30,
        left: 12,
        right: 10,
        bottom: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          fontWeight: 'bold',
          fontSize: 14,
          color: '#000',
        },
        formatter: function (params: any) {
          return `${params[0].value} ${unitLabel}`
        },
      },
      xAxis: [
        {
          type: 'category',
          data: xLabels,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            fontWeight: 'bold',
            fontSize: 14,
            color: textColor,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            formatter: function (value: number) {
              return value ? value + ' ' + unit : '0'
            },
            fontWeight: 'bold',
            fontSize: 14,
            color: textColor,
          },
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barMaxWidth: barMaxWidth,
          data: values,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#92FE9D' },  // top
                { offset: 1, color: '#00C9FF' }   // bottom
              ]
            ),
            borderRadius: [10, 10, 0, 0],
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            backgroundColor: '#fff',
            borderColor: textColor,
            borderWidth: 1,
            borderRadius: 4,
            padding: [4, 6],
            color: textColor,
            fontWeight: 'bold',
            shadowColor: 'rgba(0,0,0,0.2)',
            shadowBlur: 3,
          },
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
  }, [values])

  return <div id={chartId} style={{ width: '100%', height: '100%' }}></div>
}

export default ProductivityChart

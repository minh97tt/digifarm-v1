import { useEffect } from 'react'
import * as echarts from 'echarts'

const ProductivityChart = ({
  unit,
  unitLabel,
  chartId,
  xLabels,
  values,
}: {
  unit: string
  unitLabel: string
  chartId: string
  xLabels: string[]
  values: any[]
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
            color: '#00000040',
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
            color: '#00000040',
          },
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barMaxWidth: '40px',
          data: values,
          itemStyle: {
            color: '#3ED094',
            borderRadius: [10, 10, 0, 0],
          },
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            backgroundColor: '#fff',
            borderColor: '#00000040',
            borderWidth: 1,
            borderRadius: 4,
            padding: [4, 6],
            color: '#00000040',
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
  }, [])

  return <div id={chartId} style={{ width: '100%', height: '100%' }}></div>
}

export default ProductivityChart

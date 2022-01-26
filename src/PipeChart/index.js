import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import 'regenerator-runtime/runtime.js'

var on = true

const defaultOptions = {
  chart: {
    background: 'white',
    type: 'line',
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 3, 3],
  },
  title: {
    text: 'HDL Transaction Statistics',
    align: 'left',
    offsetX: 110,
  },
  xaxis: {
    categories: [],
    labels: {
      hideOverlappingLabels: true,
      rotate: 0,
      style: {
        colors: 'black',
      },
    },
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB',
      },
      labels: {
        style: {
          colors: '#008FFB',
        },
      },
      title: {
        text: 'Transaction Count',
        style: {
          color: '#008FFB',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    {
      seriesName: 'Volume',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: 'black',
      },
      labels: {
        style: {
          colors: 'black',
        },
      },
      title: {
        text: 'Unit Volume',
        style: {
          color: 'black',
        },
      },
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60,
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40,
  },
}

const defaultSeries = [
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
]

function parseDefault(data) {
  let series1 = []
  let series2 = []
  let i = false
  data.data.forEach(point => {
    i = !i
    if (i) {
      series1.push(parseInt(point['tx-count']))
      series2.push(parseInt(point.volume))
    }
  })
  return [
    { name: 'Transactions', type: 'area', data: series1 },
    { name: 'Volume', type: 'bar', color: '#3a904f', data: series2 },
  ]
}

class PipeChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: props.options || defaultOptions,
      series: props.series || defaultSeries,
      labels: props.labels || [],
      interval: props.interval || 20000,
      width: props.width || '80%',
      type: props.type || 'area',
      url:
        props.url ||
        'https://indexer.algoexplorerapi.io/stats/v2/movements?time-start=1638618727&interval=6H&asset-id=137594422',
      parse: props.parseFunction || parseDefault,
    }
  }

  componentDidMount() {
    if (typeof this.props.update === 'function') {
      this.props.update()
    } else {
      this.update()
    }
    setInterval(this.props.update || this.update, this.state.interval)
    //setInterval(this.toggle, 100)
  }

  toggle = () => {
    on = !on
    let color = on ? 'red' : 'blue'
    this.setState(
      {
        options: {
          ...this.state.options,
          chart: { ...this.state.options.chart, background: color },
        },
      },
      () => {
        console.log(this.state.options)
      }
    )
  }

  update = async () => {
    let data = await fetch(this.state.url)
    let dataObject = await data.json()
    let newSeries = this.state.parse(dataObject)
    if (newSeries.length === 2 && typeof newSeries[0][0] === 'number') {
      this.setState({ series: newSeries[0] })
      this.setState({
        options: {
          ...this.state.options,
          labels: newSeries[1],
        },
      })
    } else {
      this.setState({ series: newSeries })
    }
  }

  render() {
    return (
      <div className="pipeChart" align="center">
        <Chart
          width={this.state.width}
          options={this.state.options}
          yaxis={this.state.yaxis}
          series={this.state.series}
          type={this.state.type}
          labels={this.state.labels}
        />
      </div>
    )
  }
}

export default PipeChart

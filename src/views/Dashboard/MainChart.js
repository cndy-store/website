import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from 'reactstrap';
import { extractUniquePerDay } from '../../lib/data_helpers';
import { pink, pinkChartBg, pinkLight } from '../../colors';

const chartOptions = {
  type: 'line',
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        distribution: 'linear',
        gridLines: {
          drawOnChartArea: false
        },
        time: {
          unit: 'day',
          tooltipFormat: 'MMM D YYYY'
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          maxTicksLimit: 5
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 30,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

const dataSetDefaults = {
  label: 'Total transferred',
  backgroundColor: pinkChartBg,
  borderColor: pink,
  borderWidth: 2,
  pointHoverBackgroundColor: '#fff',
  lineTension: 0.3
};

const generateChartData = stats => {
  const data = extractUniquePerDay(stats, 'transferred');
  const dataset = Object.assign({}, dataSetDefaults, {
    data: data
  });

  return {
    datasets: [dataset]
  };
};

export default class MainChart extends Component {
  renderChart() {
    if (!this.props.statsData) return null;
    const data = generateChartData(this.props.statsData);

    return <Line data={data} options={chartOptions} height={300} />;
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Trading Volume</CardTitle>
              <div className="small text-muted">
                Total amount of CNDY that was traded.
              </div>
            </Col>
          </Row>
          <div
            className="chart-wrapper"
            style={{ height: 300 + 'px', marginTop: 40 + 'px' }}
          >
            {this.renderChart()}
          </div>
        </CardBody>
      </Card>
    );
  }
}

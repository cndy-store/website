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

const chartOptions = {
  type: 'line',
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        type: 'time',
        distribution: 'linear',
        time: {
          unit: 'day',
          tooltipFormat: 'MMM D YYYY'
        }
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2,
      tension: 0.3
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

export default class CardChart extends Component {
  renderChart() {
    if (!this.props.data) return null;

    return <Line data={this.props.data} options={chartOptions} height={70} />;
  }
  render() {
    return (
      <Card className="text-white bg-card-chart">
        <CardBody className="pb-0">
          <h4 className="mb-0">{this.props.title}</h4>
          <p>{this.props.subtitle}</p>
        </CardBody>
        <div className="chart-wrapper px-0" style={{ height: '70px' }}>
          {this.renderChart()}
        </div>
      </Card>
    );
  }
}

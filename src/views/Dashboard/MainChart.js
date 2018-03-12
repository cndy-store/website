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
import {
  brandPrimary,
  brandSuccess,
  brandInfo,
  brandWarning,
  brandDanger
} from '../../colors';

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: [
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S'
  ],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: convertHex(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
};

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

export default class MainChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Amount Issued</CardTitle>
              <div className="small text-muted">Last Month</div>
            </Col>
          </Row>
          <div
            className="chart-wrapper"
            style={{ height: 300 + 'px', marginTop: 40 + 'px' }}
          >
            <Line data={mainChart} options={mainChartOpts} height={300} />
          </div>
        </CardBody>
        <CardFooter>
          <ul>
            <li>
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <Progress
                className="progress-xs mt-2"
                color="success"
                value="40"
              />
            </li>
            <li className="d-none d-md-table-cell">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <Progress className="progress-xs mt-2" color="info" value="20" />
            </li>
            <li>
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <Progress
                className="progress-xs mt-2"
                color="warning"
                value="60"
              />
            </li>
            <li className="d-none d-md-table-cell">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <Progress
                className="progress-xs mt-2"
                color="danger"
                value="80"
              />
            </li>
          </ul>
        </CardFooter>
      </Card>
    );
  }
}

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
import { extractAccumulatedPerDay } from '../../lib/data_helpers';
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
          displayFormats: {
            hour: 'MMM D hA'
          }
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: 1000
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
  label: 'Total CNDY issued',
  backgroundColor: pinkChartBg,
  borderColor: pink,
  borderWidth: 2,
  pointHoverBackgroundColor: '#fff',
  lineTension: 0.3
};

const generateChartData = effectsData => {
  const onlyCredited = effectsData.filter(
    effect => effect.type === 'account_credited'
  );

  const data = extractAccumulatedPerDay(onlyCredited, 'amount');
  const dataset = Object.assign({}, dataSetDefaults, { data: data });

  return {
    datasets: [dataset]
  };
};

export default class MainChart extends Component {
  renderChart() {
    if (!this.props.effectsData) return null;
    const data = generateChartData(this.props.effectsData);

    return <Line data={data} options={chartOptions} height={300} />;
  }

  countIssued() {
    if (!this.props.statsData) {
      return 'N/A';
    } else {
      return `${this.props.statsData.amount_issued} CNDY`;
    }
  }

  countTransferred() {
    if (!this.props.statsData) {
      return 'N/A';
    } else {
      return `${this.props.statsData.amount_transferred} CNDY`;
    }
  }

  countAccounts() {
    if (!this.props.statsData) {
      return 'N/A';
    } else {
      return `${this.props.statsData.accounts_involved} Accounts`;
    }
  }

  countEffects() {
    if (!this.props.statsData) {
      return 'N/A';
    } else {
      return `${this.props.statsData.effect_count} Effects`;
    }
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
        <CardFooter>
          <ul>
            <li>
              <div className="text-muted">Amount Issued</div>
              <strong>{this.countIssued()}</strong>
            </li>
            <li className="d-none d-md-table-cell">
              <div className="text-muted">Amount Transferred</div>
              <strong>{this.countTransferred()}</strong>
            </li>
            <li>
              <div className="text-muted">Accounts Involved</div>
              <strong>{this.countAccounts()}</strong>
            </li>
            <li className="d-none d-md-table-cell">
              <div className="text-muted">Effect Count</div>
              <strong>{this.countEffects()}</strong>
            </li>
          </ul>
        </CardFooter>
      </Card>
    );
  }
}

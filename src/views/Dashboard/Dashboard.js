import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Big from 'big.js';
import {
  Alert,
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';
import {
  extractAccumulatedPerDay,
  extractLastEntryPerDay,
  extractUniquePerDay,
  extractUniquePerDayAndValue
} from '../../lib/data_helpers';

import MainChart from './MainChart';
import CardChart from './CardChart';
import { loadStats, loadLatest } from '../../lib/api';

const dataSetDefaults = {
  backgroundColor: 'rgba(255,255,255,.2)',
  borderColor: 'rgba(255,255,255,.55)'
};

const amountIssuedTitle = latest => {
  if (!latest) return 'CNDY Issued';

  const amountIssued = new Big(latest.issued).round();
  return `${amountIssued} CNDY Issued`;
};

const amountIssuedData = stats => {
  if (!stats || !stats.length) return null;

  const data = extractUniquePerDayAndValue(stats, 'issued');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'CNDY issued',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

const accountsInvolvedTitle = latest => {
  if (!latest) return 'Accounts';

  return `${latest.accounts_with_payments} Accounts`;
};

const accountsInvolvedData = stats => {
  if (!stats) return null;

  const data = extractUniquePerDayAndValue(stats, 'accounts_with_payments');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'Accounts involved',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

const paymentsGeneratedTitle = latest => {
  if (!latest) return 'Payments';

  return `${latest.payments} Payments`;
};

const paymentsGeneratedData = stats => {
  if (!stats) return null;

  const data = extractLastEntryPerDay(stats, 'payments');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'Payments send between accounts',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadErrors: [],
      statsData: null,
      latestData: null
    };

    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    loadLatest()
      .then(response => this.setState({ latestData: response.latest }))
      .catch(e => this.addLoadError('Error loading latest data.', e));

    loadStats()
      .then(response => this.setState({ statsData: response.stats }))
      .catch(e => this.addLoadError('Error loading asset stats.', e));
  }

  addLoadError(message, e) {
    this.setState({
      loadErrors: [message, ...this.state.loadErrors]
    });

    console.error(e);
  }

  renderLoadError() {
    if (!this.state.loadErrors.length) return null;

    const errors = this.state.loadErrors.map(msg => {
      return <p key={msg}>{msg}</p>;
    });

    return (
      <Alert color="danger">
        <h4 className="alert-heading">Dashboard could not be loaded!</h4>
        {errors}
      </Alert>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        {this.renderLoadError()}
        <Row>
          <Col xs="12" sm="12" md="12" lg="4">
            <CardChart
              title={amountIssuedTitle(this.state.latestData)}
              subtitle={'Total amount of CNDY issued'}
              data={amountIssuedData(this.state.statsData)}
            />
          </Col>

          <Col xs="12" sm="12" md="12" lg="4">
            <CardChart
              title={accountsInvolvedTitle(this.state.latestData)}
              subtitle={'Accounts making transactions'}
              data={accountsInvolvedData(this.state.statsData)}
            />
          </Col>

          <Col xs="12" sm="12" md="12" lg="4">
            <CardChart
              title={paymentsGeneratedTitle(this.state.latestData)}
              subtitle={'Number of Payments'}
              data={paymentsGeneratedData(this.state.statsData)}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <MainChart
              statsData={this.state.statsData}
              latestData={this.state.latestData}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
import { extractLastEntryPerDay } from '../../lib/data_helpers';

import MainChart from './MainChart';
import CardChart from './CardChart';
import { loadStats, loadHistory, loadEffects } from '../../lib/api';

const dataSetDefaults = {
  backgroundColor: 'rgba(255,255,255,.2)',
  borderColor: 'rgba(255,255,255,.55)'
};

const amountIssuedData = historyData => {
  if (!historyData) return null;

  const data = extractLastEntryPerDay(historyData, 'total_amount');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'CNDY issued',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

const accountsInvolvedData = historyData => {
  if (!historyData) return null;

  const data = extractLastEntryPerDay(historyData, 'num_accounts');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'Accounts involved',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

const effectsGeneratedData = historyData => {
  if (!historyData) return null;

  const data = extractLastEntryPerDay(historyData, 'num_effects');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'Effects generated',
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
      historyData: null,
      statsData: null,
      effectsData: null
    };

    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    loadHistory()
      .then(response => this.setState({ historyData: response.history }))
      .catch(e => this.addLoadError('Error loading asset history', e));

    loadEffects()
      .then(response => this.setState({ effectsData: response.effects }))
      .catch(e => this.addLoadError('Error loading effects', e));

    loadStats()
      .then(response => this.setState({ statsData: response }))
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
      return <p>{msg}</p>;
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
          <Col md="12" lg="4">
            <CardChart
              title={'Issued'}
              subtitle={'Total amount of CNDY issued'}
              data={amountIssuedData(this.state.historyData)}
            />
          </Col>

          <Col md="12" lg="4">
            <CardChart
              title={'Accounts'}
              subtitle={'Accounts making transactions'}
              data={accountsInvolvedData(this.state.historyData)}
            />
          </Col>

          <Col md="12" lg="4">
            <CardChart
              title={'Effects'}
              subtitle={'Number of Effects generated'}
              data={effectsGeneratedData(this.state.historyData)}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <MainChart
              statsData={this.state.statsData}
              historyData={this.state.historyData}
              effectsData={this.state.effectsData}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

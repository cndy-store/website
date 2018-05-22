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
  extractAccumulatedPerDay,
  extractLastEntryPerDay
} from '../../lib/data_helpers';

import MainChart from './MainChart';
import CardChart from './CardChart';
import { loadStats, loadHistory, loadEffects } from '../../lib/api';

const dataSetDefaults = {
  backgroundColor: 'rgba(255,255,255,.2)',
  borderColor: 'rgba(255,255,255,.55)'
};

const amountIssuedTitle = stats => {
  if (!stats) return 'CNDY Issued';

  const amountIssued = Number(stats.amount_issued);
  return `${amountIssued} CNDY Issued`;
};

const amountIssuedData = effectsData => {
  if (!effectsData || !effectsData.length) return null;

  const issuer = effectsData[0].asset_issuer;
  const issuerEffects = effectsData.filter(
    effect => effect.type === 'account_debited' && effect.account === issuer
  );

  const data = extractAccumulatedPerDay(issuerEffects, 'amount');
  const dataset = Object.assign({}, dataSetDefaults, {
    label: 'CNDY issued',
    data: data
  });

  return {
    datasets: [dataset]
  };
};

const accountsInvolvedTitle = stats => {
  if (!stats) return 'Accounts';

  return `${stats.accounts_involved} Accounts`;
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

const effectsGeneratedTitle = stats => {
  if (!stats) return 'Effects';

  return `${stats.effect_count} Effects`;
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
              title={amountIssuedTitle(this.state.statsData)}
              subtitle={'Total amount of CNDY issued'}
              data={amountIssuedData(this.state.effectsData)}
            />
          </Col>

          <Col xs="12" sm="12" md="12" lg="4">
            <CardChart
              title={accountsInvolvedTitle(this.state.statsData)}
              subtitle={'Accounts making transactions'}
              data={accountsInvolvedData(this.state.historyData)}
            />
          </Col>

          <Col xs="12" sm="12" md="12" lg="4">
            <CardChart
              title={effectsGeneratedTitle(this.state.statsData)}
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

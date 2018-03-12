import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
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

import historyData from '../../fixtures/history';
import effectsData from '../../fixtures/effects';
import statsData from '../../fixtures/stats';

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
      historyData: null,
      statsData: null,
      effectsData: null
    };

    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  loadData() {
    this.setState({
      historyData: historyData.history,
      statsData,
      effectsData: effectsData.effects
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" lg="4">
            <CardChart
              title={'Issued'}
              subtitle={'Total amount of CNDY issued'}
              data={amountIssuedData(this.state.historyData)}
            />
          </Col>

          <Col sm="12" lg="4">
            <CardChart
              title={'Accounts'}
              subtitle={'Accounts making transactions'}
              data={accountsInvolvedData(this.state.historyData)}
            />
          </Col>

          <Col sm="12" lg="4">
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

import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle
} from 'reactstrap';

export default class GlobalChart extends Component {
  countIssued() {
    if (!this.props.latestData) {
      return 'N/A';
    } else {
      const amountIssued = Number(this.props.latestData.issued);
      return `${amountIssued} CNDY`;
    }
  }

  countTransferred() {
    if (!this.props.latestData) {
      return 'N/A';
    } else {
      const amountTransferred = Number(this.props.latestData.transferred);
      return `${amountTransferred} CNDY`;
    }
  }

  countAccountsWithTrustline() {
    if (!this.props.latestData) {
      return 'N/A';
    } else {
      return `${this.props.latestData.accounts_with_trustline} Accounts`;
    }
  }

  countAccountsWithPayments() {
    if (!this.props.latestData) {
      return 'N/A';
    } else {
      return `${this.props.latestData.accounts_with_payments} Accounts`;
    }
  }

  render() {
    return (
      <Card>
        <CardBody>
          <h4>All time statistics</h4>
        </CardBody>
        <CardFooter>
          <Row>
            <Col xs="12" sm="12" md="3" className="text-md-center">
              <div className="text-muted">Amount Issued</div>
              <strong>{this.countIssued()}</strong>
            </Col>
            <Col xs="12" sm="12" md="3" className="text-md-center">
              <div className="text-muted">Amount Transferred</div>
              <strong>{this.countTransferred()}</strong>
            </Col>
            <Col xs="12" sm="12" md="3" className="text-md-center">
              <div className="text-muted">Accounts w/ Trustlines</div>
              <strong>{this.countAccountsWithTrustline()}</strong>
            </Col>
            <Col xs="12" sm="12" md="3" className="text-md-center">
              <div className="text-muted">Accounts w/ Payments</div>
              <strong>{this.countAccountsWithPayments()}</strong>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

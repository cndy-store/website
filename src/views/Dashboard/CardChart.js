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

export default class CardChart extends Component {
  render() {
    return (
      <Card className="text-white bg-warning">
        <CardBody className="pb-0">
          <h4 className="mb-0">{this.props.title}</h4>
          <p>{this.props.subtitle}</p>
        </CardBody>
        <div className="chart-wrapper px-0" style={{ height: '70px' }}>
          <Line
            data={this.props.data}
            options={this.props.options}
            height={70}
          />
        </div>
      </Card>
    );
  }
}

import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class LandingRow extends Component {
  render() {
    return (
      <Row className={this.props.className}>
        <Col>
          <div className="container">
            <Row>{this.props.children}</Row>
          </div>
        </Col>
      </Row>
    );
  }
}

export default LandingRow;

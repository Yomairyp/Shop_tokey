import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import reports from '../../../../src/assets/img/reports.png'

class Flags extends Component {
  render() {
    return (
      <img src={reports} />
    );
  }
}

export default Flags;

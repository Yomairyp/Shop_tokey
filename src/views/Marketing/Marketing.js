import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import marketing from '../../../src/assets/img/marketing.png'

class Marketing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <img src={marketing} />
    );
  }
}

export default Marketing;
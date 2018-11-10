import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import liveView from '../../../../src/assets/img/liveView.png'

class LiveView extends Component {
  render() {
    return (
      <img src={liveView} />
    );
  }
}

export default LiveView;

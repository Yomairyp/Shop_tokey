import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import graph from '../../../../src/assets/img/graph.png'

class Board extends Component {
  render() {
    return (
      <img src={graph} />
    );
  }
}

export default Board;
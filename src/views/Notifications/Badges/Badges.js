import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import graph from '../../../../src/assets/img/graph.png'

class Badges extends Component {
  render() {
   
      return (
        <img src={graph} />
      );
  }
}

export default Badges;

import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong> Product Name</strong>
          </CardHeader>
          <CardBody>
            
            <Row className="align-items-center mt-3">
            Lorem ipsum dolor
            
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Product Description</strong>
          </CardHeader>
          <CardBody>
            
            <Row className="align-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Row>
            <Row className="align-items-center mt-3">
              
            </Row>
            <Row className="align-items-center mt-3">
              
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Production Details/infomation</strong>
          </CardHeader>
          <CardBody>
          
           
              </CardBody>
            </Card>
        
  
      </div>
    );
  }
}

export default Buttons;

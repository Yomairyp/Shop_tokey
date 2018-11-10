import React, { Component } from 'react';
import { Button, ButtonDropdown, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';

class Customer extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(19).fill(false),
    };
  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
     
        <Card>
          <CardHeader>
            <strong> Customers</strong>
          </CardHeader>
          <CardBody>
            
            <Row className="align-items-center mt-3">
            
            
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
            <strong>Product Image</strong>
          </CardHeader>
          <CardBody>
          
           
              </CardBody>
            </Card>
        
  
      </div>
    );
  }
}

export default Customer;

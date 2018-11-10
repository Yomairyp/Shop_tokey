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
            <button class="btn btn-primary">Add Customer</button>
            
            </Row>
          </CardBody>
        </Card>
        <Card>
         
         
          
        </Card>
        <Card>
          <CardHeader>
            <strong>Understand Your Customer</strong>
          </CardHeader>
          <p>When a Customer Places an Order, You will find thier detail and history here</p>
          <CardBody>
          
           
              </CardBody>
            </Card>
        
  
      </div>
    );
  }
}

export default Customer;

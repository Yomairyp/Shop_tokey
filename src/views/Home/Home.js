import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

// import Widget03 from '../../views/Widgets/Widget03'
const Widget03 = lazy(() => import('../Widgets/Widget03'));
const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')



// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};



//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="9" xl="9">
            <Card>
              <CardHeader className="greeting">
              Welcome to Shop Tokey, Tony.
              </CardHeader>
              <CardBody>
                <Row>
                 
                    <Col>
                      {/* <Col sm="6"> */}
                        <div>
                         You have 13 days left of your trial
                         <button type="button" class="btn btn-primary float-xl-right">Select a plan</button>
                        </div>
                      {/* </Col> */}
                     
                    </Col>
                    
                  
                </Row>
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-primary">Add Products</button>
                      <div className="small text-muted">
                        
                      </div>
                    </td>
                    <td className="text-center">
                     
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                         
                        </div>
                        <div className="float-right">
                          
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      
                    </td>
                    <td>
                     
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-primary">Customize Theme</button>
                      <div className="small text-muted">
                      </div>
                    </td>
                    <td className="text-center">
                     
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                         
                        </div>
                        <div className="float-right">
                         
                        </div>
                      </div>
                     
                    </td>
                    <td className="text-center">
                     
                    </td>
                    <td>
                     
                    
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                      </div>
                    </td>
                    <td>
                      <button class="btn btn-primary">Add Domain</button>
                      <div className="small text-muted">
                      </div>
                    </td>
                    <td className="text-center">
                      
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                         
                        </div>
                        <div className="float-right">
                          
                        </div>
                      </div>
                     
                    </td>
                    <td className="text-center">
                    
                    </td>
                    <td>
                     
                    </td>
                  </tr>
                
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="3" xl="3">
            <Card>
              <CardBody>
                <Row>
                    <Col>
                        <div>
                         <button class="float-xl-left">All Channels</button>
                         <button >Today</button>
                        </div>
                        <div>
                        <strong>
                          Total sale 
                        </strong>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        </div>
                        <div>
                        <strong>
                          Total sale 
                        </strong>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        </div>
                        <div>
                        <strong>
                          Total sale 
                        </strong>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        </div>
                       
                    </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
        <Row>
          
          
        </Row>
        





      </div>
    );
  }
}

export default Dashboard;

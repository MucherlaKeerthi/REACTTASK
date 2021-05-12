import React, {Component} from 'react';
import { Form, Button, Card, Alert, Carousel, Row, Col, Nav, Dropdown, DropdownButton, Accordion,Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route } from 'react-router-dom';

export class Footer extends Component{
    render(){
        return(
                 <div>
                     <Jumbotron className="jumb">
  <Container>
  <Row>
      <Col xs lg="3">
      <h6>CONTACT US</h6><br></br>
     <ul  className ="ul1" >
     <Nav.Link>Call: 1800-419-5959</Nav.Link>
     <Nav.Link>SMS BAL to 56161600 or +918691000002</Nav.Link>
     <Nav.Link>to get your Account Balance</Nav.Link><br></br>
     <Nav.Link>Call: 1800-419-6969</Nav.Link>
     <Nav.Link>SMS MINI to 56161600 or +918691000002</Nav.Link>
     <Nav.Link>to get your Mini Statemen</Nav.Link><br></br>
     <Nav.Link>Find your Nearest BranchQuery & Request</Nav.Link><br></br>
     <Nav.Link>Complaints and Grievance Redressal</Nav.Link><br></br>
     <Nav.Link>Banking Ombudsman Scheme, 2006</Nav.Link><br></br>
     <Nav.Link>Comprehensive Notice Board</Nav.Link><br></br>
     <Nav.Link>Aadhaar Enrolment Centres</Nav.Link><br></br>
     <Nav.Link>Services for customers with disabilities</Nav.Link>
                    </ul>
                    </Col>


                    <Col xs lg="3">
                         <h6>SHAREHOLDERS' CORNER</h6><br></br>
<u1  className ="ul1">
<Nav.Link>Stock Information</Nav.Link><br></br>
<Nav.Link>Regulatory Disclosures Section</Nav.Link><br></br>
<Nav.Link> Shareholder's Information</Nav.Link><br></br>
<Nav.Link>Financial Results & other information</Nav.Link><br></br>
    <Nav.Link>Corporate Governance</Nav.Link><br></br>
    <Nav.Link>Compliance Calendar</Nav.Link><br></br>
    <Nav.Link>Investor FAQsbr</Nav.Link><br></br>
    <Nav.Link>Investor Contacts</Nav.Link>
    </u1>
    </Col>


    <Col xs lg="2">
<h6>MEDIA CENTER</h6><br></br>
    <u1  className ="ul1" >
    <Nav.Link>Corporate Profile</Nav.Link><br></br>
    <Nav.Link>Vision and Values</Nav.Link><br></br>
    <Nav.Link>Awards & Recognition</Nav.Link><br></br>
    <Nav.Link>Press release</Nav.Link>
    </u1></Col>

    <Col xs lg="3">
                         <h6>PNO / NODAL DESK</h6><br></br>
<u1  className ="ul1">
    <Nav.Link>Level 1 – Queries, Request or Complaint Redressal</Nav.Link><br></br>
    <Nav.Link>Level 2 – Write to Nodal Officer</Nav.Link><br></br>
    <Nav.Link> Level 3 – Write to Principal Nodal Officer</Nav.Link><br></br>
    </u1>
    </Col>
  </Row>
  </Container>
</Jumbotron>    
                 </div>
        )
    }
}
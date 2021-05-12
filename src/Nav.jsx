import './App.css';
import React, { Component, Fragment } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class Nava extends Component {
   
    render() {
      return (
        <Fragment>
          
            <div className="App">
              <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Axis Bank</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/admin">Admin</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/user">User</Link>
                  </Nav.Link>
                </Nav>
                <Nav.Link>
                    <Link to="/user">Logout</Link>
                </Nav.Link>
  
               
              </Navbar>
              </div>
              </Fragment>
      )
    }
}
export default Nava;
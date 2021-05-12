import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {connect} from 'react-redux';
import User from './User';
import Admin from './Admin';
import ResetLogin from './ResetLogin';
// import ResetLogin1 from './ResetLogin1';
import FirstPage from './FirstPage';
import Welcome from './Welcome';
import AddUser from './AddUser';
import Edit from './Edit';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import Userpage from './UserPage';
import Addamount from './Addamount';
 import CurrentBalance from './CurrentBalance';
import Withdraw from './Withdraw';
 import CurrentWithdraw from './CurrentWithdraw';
import View from './View';
import { Footer } from './Footer';


class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Navbar bg="info" variant="dark" sticky="top">
           <img  style={{height:'2rem', width:'2rem'}}src="https://tse3.mm.bing.net/th/id/OIP.fyRSGXBCjCWBE35Y0DTxIAHaGr?w=205&h=185&c=7&o=5&dpr=1.5&pid=1.7"></img>
              <Navbar.Brand href="#Welcome" style={{fontSize:'30px'}}>Axis Bank</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/Welcome" style={{color:'white'}}>Home</Link>
                </Nav.Link>
              </Nav>
              <Navbar.Text>{this.props.userData}</Navbar.Text>
              {/* <Nav.Link>
                  <Link to="/FirstPage" style={{color:'white'}}>Logout</Link>
              </Nav.Link> */}
            </Navbar>
            
            
            <Switch>
              <Route exact path="/"><Redirect to="/FirstPage" /></Route>
              <Route path="/FirstPage" component={FirstPage}></Route> 
              <Route path="/Admin" component={Admin}></Route>
              <Route path="/User" component={User}></Route>
              <Route path="/ResetLogin" component={ResetLogin}></Route>
              <Route path="/Welcome" component={Welcome}></Route>
               <Route path="/userpage" component={Userpage}></Route> 
              <Route path="/Addamount" component={Addamount}></Route> 
              <Route path="/Withdraw" component={Withdraw}></Route> 
              <Route path="/View/:id" component={View}></Route>  
              <Route path="/AdminLogin" component={AdminLogin}></Route>
              <Route path="/AddUser" component={AddUser}></Route>
              <Route path="/edit/:id" component={Edit}></Route>
              <Route path="/users/:id" component={UserLogin}></Route>
              <Route path="/currentadd" component={CurrentBalance}></Route>
              <Route path="/currentwithdraw" component={CurrentWithdraw}></Route> 
              <Route path="**">
                <div>404 not found</div>
              </Route>
            </Switch><br></br>
          <Footer />
          </div>
        </Router>

      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return ({userData: state.userData})
}
export default connect(mapStateToProps)(App);

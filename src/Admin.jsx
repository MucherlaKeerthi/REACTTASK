import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetLogin from './ResetLogin';
import Email from './Email';
import Password from './Password';
import { userDetails } from './action';
import './App.css';
import { connect } from 'react-redux';
import App from './App';


function Admin(props) {
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);
    

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3005/admin");
        setAdmin(result.data.reverse());
    }

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);
    
        if (isEmailValid && isPasswordValid) {
            for(let i=0; i< admin.length; i++){
                debugger
                if(emailVal == admin[i].email && passwordVal == admin[i].password){
                     props.userDetails(emailVal);
                     return props.history.push('/AdminLogin');
                   
                
                }else{
                   if(i == admin.length -1){
                    alert("User name and password not matched");
               
                    } 
                }
            }
        } 
        else {
            alert("Invalid Credentials");
        }
    }

    const goToForgot = () => {
        props.history.push('/ResetLogin');
    }
    return (
        <Fragment>
            <div className="demo4"><br></br><br></br>
            <Card className="cass1">
                <Card.Body style={{background:'#FFC6C6'}}>
                    <Card.Title className='edit1'>Admin Login</Card.Title><br />
                     <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle> 
                    <Card.Text>
                        <br />
                        <small className="lock1">
                             <img
                                alt="Lock Logo"
                                src="data:image/jpeg;base64,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"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '} 
                            
                             </small><br></br><br></br> 
                        <Form>
                            <Email emailVal={emailVal}
                                emailValueChange={emailValueChange} />

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />

                            <Button variant="info" size="sm" onClick={onSubmit} block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />

                          

                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br /><br />
            </div>
        </Fragment>
        
    )
}
const mapStateToProps = (state) => ({userData: state.userData});

function mapDispatchToProps (dispatch) {
    return {
        userDetails: function (userData) {
            return dispatch(userDetails(userData))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

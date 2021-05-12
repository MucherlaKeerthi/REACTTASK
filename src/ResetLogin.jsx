import React,  {useState, Fragment } from 'react';
import {Card, Form, Button, Alert} from 'react-bootstrap';
import Mobile from './Mobile';
import Email from './Email';
import Password from './Password';

function ResetLogin(props) {
    const [changeMobile, setChangeMobile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const showEmail = () => {
        setChangeMobile(!true);
    }

    const showMobile = () => {
        setChangeMobile(true);
    }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }

    const onSubmit = () => {
      
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      
        const isPasswordValid = passwordRegex.test(passwordVal);
        if ( isPasswordValid) {
          
            props.history.push('/Welcome');
           
        } else {
            
            setShowAlert(false);
        }
    }


    return (
        <div style={{backgroundImage:`url("https://i.pinimg.com/originals/70/f8/cd/70f8cde36d9286869ed7fd7449d92581.jpg")`}}>
        <Card className="cass1">
            <Card.Body style={{background:'#FFC6C6'}}>
                <Card.Title className='edit1' style={{height:'4rem'}}> Reset Login Password</Card.Title><br />
                <Alert variant="warning"><small>For security purposes, no withdrawals are permitted for 24 hours after modification of security methods</small></Alert>
                <Card.Text>
                    <Form>
                        <div style={{ marginRight: '200px' }}>
                            <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                            <Button variant="light" size="sm" onClick={showMobile}>Mobile</Button><hr></hr>
                        </div>
                        {
                            changeMobile ?
                                <Mobile />
                                :
                                null
                              
                        }
                        <Password 
                           passwordVal={passwordVal}
                           passwordChange={passwordValueChange}/>
                       
                        
                            <Button variant="success" size="sm"onClick={onSubmit} block >
                                Next
                            </Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />
                            <br />
                        
                            
                    </Form>
                </Card.Text>
                </Card.Body>
            </Card>
            
            <br /><br />
           
    
    </div>
    )

}
export default ResetLogin;
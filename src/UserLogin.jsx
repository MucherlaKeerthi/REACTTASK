import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, CardColumns, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserLogin = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3005/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/Addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/Withdraw');
    }
    const currentWithAmount = () => {
        props.history.push('/currentwithdraw');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    return (
        <center>


            <div className="demo7">
            <Form inline>
            <Link className= "btn btn-primary" to="/FirstPage" style={{ marginLeft:'72rem',marginTop:'3px'}}>Logout</Link>
            </Form>
                <h3 > USER ID :{id}</h3><br></br>
                <h3 > Account Number :{user.account}</h3><br></br>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.4_QGSplne0BALETcLfQ9UwHaEH?w=255&h=180&c=7&o=5&dpr=1.5&pid=1.7" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text className="cardT" ><Button variant="primary" size="sm" onClick={currentButton} block>Current Account</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card ><br></br><br></br>
                    <Card style={{ width: '20rem' }} className="">
                        <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.R6DR0BN_KwhNoullf-iJnwAAAA?w=249&h=171&c=7&o=5&dpr=1.5&pid=1.7" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text className="cardT" ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings Account</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                <br /><br></br>
                    {
                        showButton === true && (
                            <div>
                                <Table striped bordered hover variant="warning" style={{}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Pan Card</th>
                        <th>Account No</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                            <th>{1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.pan}</td>
                            <td>{user.account}</td>
                            <td>{user.balance}</td>
                            <td>
                               
                                <button class="btn btn-outline-dark btnAdd" onClick={userButton}>Credit</button>
                                <button class="btn btn-outline-dark btnAdd" onClick={userButton1}>Debit</button>
                            </td>
                            </tr>
                      
                   
                </tbody>
                
            </Table><br></br>
            <Link className="btn btn-primary" to="/Welcome">Back to Home</Link> 
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <Table striped bordered hover variant="warning" style={{}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Pan Card</th>
                        <th>Account No</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                            <th>{1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.pan}</td>
                            <td>{user.account}</td>
                            <td>{user.currentbalance}</td>
                            <td>
                                <button class="btn btn-outline-dark btnAdd" onClick={currentAddAmount}>Credit</button>
                                <button class="btn btn-outline-dark btnAdd" onClick={currentWithAmount}>Debit</button>
                            </td>
                            </tr>
                      
                   
                </tbody>
                
            </Table><br></br>

            <Link className="btn btn-primary" to="/Welcome">Back to Home</Link> 
                            </div>
                        )}
                </div>
         
        </center>

    )

}
export default UserLogin;
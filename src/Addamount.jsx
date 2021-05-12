import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Addamount() {
    const [user, setUser] = useState({
        id: '',
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        balance: 0

    });
    const [amount, setAmount] = useState('');

    const { id } = useParams();
    useEffect(() => {
        const res = sessionStorage.getItem('user');
        let user = JSON.parse(res);
        getUser(user.id);
    }, []);

    const getUser = async (id) => {
        const res = await axios.get(`http://localhost:3005/users/${id}`);
        setUser(res.data);
    }

    const onSubmit = async e => {
        e.preventDefault();
        user.balance = parseInt(user.balance) + parseInt(amount);
        await axios.put(`http://localhost:3005/users/${user.id}`, user);
        getUser(user.id);
        alert('Amount added successfully');

    }
    const inputvalchange = (e) => {
        setAmount(e.target.value);

    }
    return (
        <Fragment>
        <div>
            
            <center>
              <div className='demo2'>
              <Form inline>
            <Link className= "btn btn-primary" to="/FirstPage" style={{ marginLeft:'72rem',marginTop:'3px'}}>Logout</Link>
            </Form>
                <h3>Account No: {user.account}</h3>
                <h4 className="edit1">Add Amount</h4>
                <Card className="cass">
                    <Card.Body style={{background:'#E8FFC6' }}>
                    <Card.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="left">UserID: {user.name}</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="formBasicEBal">
                            <Form.Label className="left">Saving Balance: {user.balance}</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="left">Amount</Form.Label>
                            <Form.Control type="number" placeholder="Amount" onChange={inputvalchange} />
                        </Form.Group>

                        <Button class="btn btn-success" variant="primary" onClick={onSubmit} block >Submit</Button>
                    </Form>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Link class='btn btn-dark btnAdd' to={'/userpage'} block >Back to UserPage</Link> 
                </div>
            </center>
        </div>
    </Fragment>
    )
}
export default Addamount;
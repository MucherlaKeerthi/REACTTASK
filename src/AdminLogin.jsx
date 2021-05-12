import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Nav, Navbar, Row , Col , Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AdminLogin = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3005/users");
        setUsers(result.data.reverse());
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUsers();
    }
    return (
        <div className='home'>
        <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home"  style={{color:'white', marginLeft:'32rem', fontStyle:'italic'}}>Welcome to Our Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
           
            </Nav>
            <Form inline>
            <Link className= "btn btn-info" to="/AddUser">AddUser</Link>
            </Form>
            <Nav.Link>
                  <Link to="/FirstPage" style={{color:'white'}}>Logout</Link>
              </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
        <div className='home' style={{ marginLeft: '20px', marginTop: '20px'}}>
            
            <h3  className="view1">User Details</h3>
            <Table striped bordered hover variant="dark" style={{}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Pan Card</th>
                        <th>Account No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.pan}</td>
                            <td>{user.account}</td>
                            <td>
                                <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </Table>
            </div>
        
       
        </div>
    )
}
export default AdminLogin;
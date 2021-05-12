import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem,Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const View = (props) => {
    const [user, setUser] = useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    pan: ""
                });
                const { id } = useParams();
                useEffect(() => {
                    loadUser();
                }, []);
        
                const loadUser = async () => {
                    const res = await axios.get(`http://localhost:3005/users/${id}`);
                    setUser(res.data);
                }
        
                return (
                    <div  className="view"><br></br>
                                <Card.Title className="view1">User Id: {user.id}</Card.Title><br />
                                        <br />
                                        <Table striped bordered hover variant="danger" style={{}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Pan Card</th>
                    </tr>
                </thead>
                <tbody>
                  
                            <tr>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.pan}</td>
                            </tr>
                        
                    
                </tbody>
                
            </Table>
                         

                                        <Link className="btn btn-dark" to="/Welcome">Back to Home</Link>
                             
        
        
        
            </div>
    

 )

}
export default View;

import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Toast, Card, Carousel, CardDeck } from 'react-bootstrap';

import User from './User';
import Admin from './Admin';
import { Link } from 'react-router-dom';

function Welcome(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="demo5" >
            <Fragment>
                <Navbar bg="secondary" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" style={{ color: 'white', marginLeft: '32rem', fontStyle: 'italic' }}>Welcome To our Bank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>

                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => setShow(true)} >LOGIN</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ marginRight: '10%', marginBottom: '10%', marginLeft: '10%' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.axisbank.com/images/default-source/homebanner/axis-bank-aura-credit-card-banner-748x301.jpg" height="400"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.axisbank.com/images/default-source/homebanner/axis-bank-club-vistara-forex-card-banner-748x301.jpg" height="400"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://happycredit.in/static/images/banners/app_download_listpage_desktop1.png" height="400"
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel><br></br>
                    <br></br>

                    <CardDeck>
                        <Card >
                            <Card.Img style={{ height: '10rem' }} variant="top" src="data:image/jpeg;base64,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" />
                            <Card.Body>
                                <Card.Title>Car loans</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card  >
                            <Card.Img style={{ height: '10rem' }} variant="top" src="https://tse4.mm.bing.net/th/id/OIP.pR2ydomOCm4NYT1y83gngQHaDk?w=301&h=168&c=7&o=5&dpr=1.5&pid=1.7/100px160" />
                            <Card.Body>
                                <Card.Title>Personal loans</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Img style={{ height: '10rem' }} variant="top" src="https://tse3.mm.bing.net/th/id/OIP.b-Ke8i6xWb1wA4P6I3x-JQHaDW?w=343&h=158&c=7&o=5&dpr=1.5&pid=1.7/100px160" />
                            <Card.Body>
                                <Card.Title>Gold Loans</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <br />

                    <Col style={{ marginLeft: '39%' }}>
                        <Row xs={6} >
                            <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide style={{ background: 'aqua' }}>
                                {/* <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded mr-2"
                                        alt=""
                                    />
                                    <small style={{ marginLeft: '13rem' }}>few mins ago</small>
                                </Toast.Header> */}
                                <Toast.Body>

                                    <Link class="btn btn-success mr-2" to='/admin'>Admin Login</Link><br /><br />
                                    <Link class="btn btn-success mr-2" to='/user'>User Login</Link>

                                </Toast.Body>
                            </Toast>

                        </Row>
                    </Col>
                </div>
            </Fragment>
        </div>
    )
}
export default Welcome;
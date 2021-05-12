import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

class FirstPage extends Component {
    render() {
        return (
            <div className="ma" >
            <Fragment>
                <Card className="ca1" >
                    <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.O1ceNGdXEuD6CGh_P4oSTwHaE7?w=250&h=180&c=7&o=5&dpr=1.5&pid=1.7" height='600px' />
                    <Card.ImgOverlay>
    <Card.Title style={{color:'white', fontSize:'40px'}}>WELCOME TO AXIS</Card.Title>
  </Card.ImgOverlay>
                   
                </Card>
               
                <br />
            </Fragment>
            </div>
        )
    }
}
export default FirstPage;
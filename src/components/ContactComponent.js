import React, {Component} from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';

class Contact extends Component {
    render(){
        return(
            <Container className="contact-body">
                <Row className="contact-row">
                    <Col style={{backgroundColor:'#d3cfd0'}} sm="8">
                        <h2>Miguel Venegas</h2>
                        <img 
                            className='main-gradient-color'
                            src="https://kahoot.com/files/2017/05/james_trans.png"
                            alt="avatar"
                            style={{height:"250px", borderRadius:'25%', border:' 5px solid black'}}
                        />
                        <p style={{width:"75%", margin:"auto", paddingTop:"1em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col sm="4">
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <ListGroup>
                                <ListGroupItem style={{fontSize:'25px', fontFamily:'Anton'}}><i className="fa fa-phone-square" aria-hidden='true'/>+1  (123) 456-7891  </ListGroupItem>
                                <ListGroupItem style={{fontSize:'25px', fontFamily:'Anton'}}><i className="fa fa-envelope-square" aria-hidden='true'/>mvenegas@gmail.com</ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;